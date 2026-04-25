import { BadRequestError } from "#domain/shared/errors/http/BadRequestError.js";

export function validateAllowedId(id, field = "id") {
    if (id == null) {
        throw new BadRequestError(
            "business.required_id",
            { value: id }
        )
    }
    if (!Number.isInteger(id)) {
        throw new BadRequestError(
            "validation.integer_expected",
            { field }
        );
    }
    try {
        const bigint = BigInt(id);

        if (bigint <= 0n) {
            throw new BadRequestError(
                "validation.min_value",
                { field, min: 1 }
            );
        }

        if (bigint > BigInt(Number.MAX_SAFE_INTEGER)) {
            throw new BadRequestError(
                "business.invalid_id",
                { value: id }
            );
        }
    } catch {
        throw new BadRequestError(
            "business.invalid_id",
            { value: id }
        );
    }

    return id;
}