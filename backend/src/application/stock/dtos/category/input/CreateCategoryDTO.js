import { validateSchema } from "#domain/shared/validators/schema.validator.js";
import { createCategorySchemaDTO } from "#infrastructure/database/schemas/dto/category/create-category.dto.schema.js";

export class CreateCategoryDTO {
    name;
    description;

    constructor(
        payload = {},
        schema = createCategorySchemaDTO
    ) {
        validateSchema(
            payload,
            schema
        );

        this.name = payload.name;
        this.description = payload.description;
    }
}
