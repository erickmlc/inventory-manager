import { validateAllowedId } from "#domain/shared/validators/allowed-id.validator.js";
import { validateSchema } from "#domain/shared/validators/schema.validator.js";
import { updateCategorySchemaDTO } from "#infrastructure/database/schemas/dto/category/update-category.dto.schema.js";

export class UpdateCategoryDTO {
    id;
    name;
    description;

    constructor(        
        payload = {},
        schema = updateCategorySchemaDTO
    ) {
        validateSchema(
            payload,
            schema
        );

        if (payload.id != null) {
            validateAllowedId(payload.id);
        }

        this.id = payload.id;
        this.name = payload.name;
        this.description = payload.description;
    }
}
