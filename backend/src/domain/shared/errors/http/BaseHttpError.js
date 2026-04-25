export class BaseHttpError extends Error {
    constructor({
        translationKey,
        variables = {},
        status,
        code,
    }) {
        super(translationKey);

        this.translationKey = translationKey;
        this.variables = variables;
        this.status = status;
        this.code = code;

        Error.captureStackTrace?.(this, this.constructor);
    }

    toJSON(i18n) {
        const message = i18n
            ? i18n.tError(this.translationKey, this.variables)
            : this.translationKey;

        return {
            error: {
                code: this.code,
                message
            }
        };
    }
}