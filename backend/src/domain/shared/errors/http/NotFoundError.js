import { BaseHttpError } from "./BaseHttpError.js";

export class NotFoundError extends BaseHttpError {
    constructor(
        key = "http.not_found",
        variables = {},
        code = "NOT_FOUND"
    ) {
        super({
            translationKey: key,
            variables,
            status: 404,
            code,
        });
    }
}
