import { BaseHttpError } from "./BaseHttpError.js";

export class InternalError extends BaseHttpError {
    constructor(
        key = "server.internal_error",
        variables = {},
        code = "INTERNAL_ERROR"
    ) {
        super({
            translationKey: key,
            variables,
            status: 500,
            code,
        });
    }
}
