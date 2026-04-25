import { sendResponse } from "#presentation/helpers/send-response.js";
import { InternalError } from "#domain/shared/errors/http/InternalError.js";
import { logger } from "#infrastructure/logging/logger.js"
import { BaseHttpError } from "#domain/shared/errors/http/BaseHttpError.js";

export function handleHttpErrors(res, error, context = {}) {
    if (!(error instanceof BaseHttpError)) {
        logger.warn(error);
        logger.trace(error);
        error = new InternalError();
    }
    
    logger.trace(error);

    const i18n = context.i18n;

    return sendResponse(
        res,
        error.status,
        error.toJSON(i18n)
    );
}
