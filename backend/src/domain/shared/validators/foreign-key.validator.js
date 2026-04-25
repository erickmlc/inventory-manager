import { BadRequestError } from "#domain/shared/errors/http/BadRequestError.js"

export async function validateForeignKey(foreignKey, fieldName, repository) {
    const record = await repository.findOne({ id: foreignKey });

    if (record == null) {
        throw new BadRequestError(
            "validation.field_not_found",
            { field: fieldName }
        );
    }

    return record;
}
