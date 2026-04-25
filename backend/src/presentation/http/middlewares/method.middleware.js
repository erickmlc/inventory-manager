import { BadRequestError } from "#domain/shared/errors/http/BadRequestError.js";
import { logger } from "#infrastructure/logging/logger.js";

const ALLOWED_METHODS = new Set(["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]);

export function validateMethodMiddleware(req, res, context, next) {
    if (!ALLOWED_METHODS.has(context.method)) {
        const allowed = [...ALLOWED_METHODS].join(", ");
        res.setHeader("Allow", allowed);
        throw new BadRequestError("http.invalid_method");
    }

    res.on("finish", () => {
        logger.info(`${context.method} ${req.url} ${res.statusCode}`);
    });

    return next();
}
