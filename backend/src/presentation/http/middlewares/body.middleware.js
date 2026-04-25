import { BadRequestError } from "#domain/shared/errors/http/BadRequestError.js";

const MAX_BODY_SIZE = 1e6;

export async function bodyMiddleware(req, res, context, next) {
    if (!req.headers["content-type"]?.includes("application/json")) {
        throw new BadRequestError("http.invalid_json")
    }

    const body = new Promise((resolve, reject) => {
        const chunks = [];
        let totalSize = 0;
        let aborted = false;

        function cleanup() {
            req.removeAllListeners("data");
            req.removeAllListeners("end");
            req.removeAllListeners("error");
        }

        req.on("data", chunk => {
            totalSize += chunk.length;
            let error = null;

            if (totalSize > MAX_BODY_SIZE) {
                error = new BadRequestError("http.body_too_large");
            }

            if (error != null) {
                cleanup();
                aborted = true;
                reject(error);
                return;
            }

            chunks.push(chunk);
        });

        req.on("end", () => {
            if (aborted) return;

            try {
                const buffer = Buffer.concat(chunks);
                const body = buffer.toString().trim();
                const parsed = JSON.parse(body);

                if (Object.keys(parsed).length === 0) {
                    throw new BadRequestError("http.empty_body");
                }

                resolve(parsed);
            } catch (err) {
                reject(
                    err instanceof BadRequestError
                        ? err
                        : new BadRequestError("http.invalid_json")
                );
            } finally {
                cleanup();
            }
        });

        req.on("error", err => {
            cleanup();
            reject(err);
        });
    });

    context.body = await body;

    return next();
}
