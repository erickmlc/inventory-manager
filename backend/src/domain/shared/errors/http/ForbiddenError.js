import { BaseHttpError } from "./BaseHttpError.js";

export class ForbiddenError extends BaseHttpError {
    constructor(
        key = "http.forbidden",
        variables = {},
        code = "FORBIDDEN"
    ) {
        super({
            translationKey: key,
            variables,
            status: 403,
            code,
        });
    }
}
