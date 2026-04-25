import { BaseHttpError } from "./BaseHttpError.js";

export class TooManyRequestsError extends BaseHttpError {
    constructor(
        key = "http.too_many_requests",
        variables = {},
        code = "TOO_MANY_REQUESTS"
    ) {
        super({
            translationKey: key,
            variables,
            status: 429,
            code,
        });
    }
}
