import { validateSchema } from "#domain/shared/validators/schema.validator.js";

export class CategoryModel {
    constructor(
        { id, name, description } = {},
        schema
    ) {
        validateSchema(
            { id, name, description },
            schema
        );

        this.id = id;
        this.name = name;
        this.description = description;
    }
}
