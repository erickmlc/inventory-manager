import { BadRequestError } from "#domain/shared/errors/http/BadRequestError.js";
import { validateAllowedId } from "#domain/shared/validators/allowed-id.validator.js";

export function validateIdMiddleware(req, res, context, next) {
    const { id } = context.params;
    
    if (id == null) {
        throw new BadRequestError("business.required_id");
    }
    
    if (!/^\d+$/.test(id)) {
        throw new BadRequestError(
            "business.invalid_id",
            { value: id }
        );
    }

    const intId = Number(id);

    validateAllowedId(intId);

    context.params.id = intId;

    return next();
}
