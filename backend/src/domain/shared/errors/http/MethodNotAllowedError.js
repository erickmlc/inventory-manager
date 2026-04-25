import { BaseHttpError } from "./BaseHttpError.js";

export class MethodNotAllowedError extends BaseHttpError {
    constructor(
        key = "http.method_not_allowed",
        variables = {},
        code = "METHOD_NOT_ALLOWED"
    ) {
        super({
            translationKey: key,
            variables,
            status: 405,
            code,
        });
    }
}
