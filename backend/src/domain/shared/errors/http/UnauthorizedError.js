import { BaseHttpError } from "./BaseHttpError.js";

export class UnauthorizedError extends BaseHttpError {
    constructor(
        key = "http.unauthorized",
        variables = {},
        code = "UNAUTHORIZED"
    ) {
        super({ 
            translationKey: key,
            variables,
            status: 401,
            code,
        });
    }
}
