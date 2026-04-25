import { BaseHttpError } from "./BaseHttpError.js";

export class BadRequestError extends BaseHttpError {
    constructor(
        key = "http.bad_request",
        variables = {},
        code = "BAD_REQUEST"
    ) {
        super({
            translationKey: key,
            variables,
            status: 400,
            code,
        });
    }
}
