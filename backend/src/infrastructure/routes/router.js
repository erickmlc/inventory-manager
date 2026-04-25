import { MethodNotAllowedError } from "#domain/shared/errors/http/MethodNotAllowedError.js";
import { NotFoundError } from "#domain/shared/errors/http/NotFoundError.js";

export class Router {
    constructor() {
        this.routes = [];
        this.middlewares = [];
        this.paramMiddlewares = {};
    }

    get(path, ...handlers) { this.#addRoute("GET", path, ...handlers); }
    post(path, ...handlers) { this.#addRoute("POST", path, ...handlers); }
    put(path, ...handlers) { this.#addRoute("PUT", path, ...handlers); }
    patch(path, ...handlers) { this.#addRoute("PATCH", path, ...handlers); }
    delete(path, ...handlers) { this.#addRoute("DELETE", path, ...handlers); }

    route(path) {
        const self = this;

        return {
            get(...handlers) { self.#addRoute("GET", path, ...handlers); return this; },
            post(...handlers) { self.#addRoute("POST", path, ...handlers); return this; },
            put(...handlers) { self.#addRoute("PUT", path, ...handlers); return this; },
            patch(...handlers) { self.#addRoute("PATCH", path, ...handlers); return this; },
            delete(...handlers) { self.#addRoute("DELETE", path, ...handlers); return this; }
        };
    }

    param(name, ...middlewares) {
        if (this.paramMiddlewares[name] == null) {
            this.paramMiddlewares[name] = [];
        }

        this.paramMiddlewares[name].push(...middlewares);
    }

    use(prefixOrHandler, ...handlers) {
        if (typeof prefixOrHandler === "string") {
            handlers.forEach(handler => {
                if (handler instanceof Router) {
                    this.#mountRouter(prefixOrHandler, handler)
                    return;
                }

                if (typeof handler === "function") {
                    this.middlewares.push({
                        prefix: prefixOrHandler,
                        handler
                    });
                }
            });

            return;
        }

        if (typeof prefixOrHandler === "function") {
            this.middlewares.push({
                prefix: "/",
                handler: prefixOrHandler
            });
        }
    }

    async handle(req, res, context) {
        await this.#runMiddlewares(req, res, context);

        for (const route of this.routes) {
            if (res.headersSent) return;
            const match = context.url.match(route.regex);
            if (match == null) continue;

            route.params.forEach((param, index) => {
                context.params[param] = match[index + 1];
            });

            await this.#runParamMiddlewares(req, res, context, route)

            const handlers = route.methods[context.method];

            if (handlers == null) {
                const allowed = Object.keys(route.methods);
                res.setHeader("Allow", allowed.join(", "));
                throw new MethodNotAllowedError();
            }

            return await this.#runHandlers(handlers, req, res, context);
        }

        throw new NotFoundError();
    }

    async #runHandlers(handlers, req, res, context) {
        let index = -1;

        const next = async () => {
            index++;

            if (index >= handlers.length || res.headersSent) return;

            const handler = handlers[index];

            await handler(req, res, context, next);
        };

        await next();
    }

    async #runMiddlewares(req, res, context) {
        const middlewares = this.middlewares.filter(m => {
            if (m.prefix === "/") return true;

            return (context.url === m.prefix ||
                context.url.startsWith(m.prefix + "/")
            );
        });

        const execute = async (index) => {
            const middleware = middlewares[index];

            if (middleware == null) return;

            await middleware.handler(
                req,
                res,
                context,
                () => execute(index + 1)
            );
        };

        await execute(0);
    }

    async #runParamMiddlewares(req, res, context, route) {
        if (res.headersSent) return;
        for (const param of route.params) {
            const middlewares = this.paramMiddlewares[param];
            if (middlewares == null) continue;

            for (const middleware of middlewares) {
                let nextCalled = false;

                await middleware(req, res, context, () => {
                    nextCalled = true;
                });

                if (nextCalled == null) return;
            }
        }
    }

    #mountRouter(prefix, childRouter) {
        childRouter.routes.forEach(route => {
            const path = `${prefix.replace(/\/$/, "")}/${route.path.replace(/^\//, "")}`;

            for (const [method, handlers] of Object.entries(route.methods)) {
                this.#addRoute(method, path, ...handlers);
            }
        });

        childRouter.middlewares.forEach(m => {
            this.middlewares.push({
                prefix: prefix + m.prefix,
                handler: m.handler
            });
        });

        Object.entries(childRouter.paramMiddlewares).forEach(([key, mws]) => {
            this.paramMiddlewares[key] ??= [];
            this.paramMiddlewares[key].push(...mws);
        });
    }

    #addRoute(method, path, ...handlers) {
        let route = this.routes.find(r => r.path === path);

        if (route == null) {
            const { regex, params } = this.#pathToRegex(path);

            route = {
                path,
                regex,
                params,
                methods: {}
            };

            this.routes.push(route);
        }

        route.methods[method] ??= [];
        route.methods[method].push(...handlers);
    }

    #pathToRegex(path) {
        const params = [];

        const regex = path
            .split("/")
            .filter(Boolean)
            .map(segment => {
                if (segment.startsWith(":")) {
                    params.push(segment.slice(1));
                    return "([^/]+)";
                }
                return segment;
            })
            .join("/");

        return {
            regex: new RegExp(`^/${regex}/?$`),
            params
        };
    }
}
