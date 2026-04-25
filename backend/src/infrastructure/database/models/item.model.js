import { validateSchema } from "#domain/shared/validators/schema.validator.js";

export class ItemModel {
    constructor(
        { id, manufacturer_id, name, category_id } = {},
        schema
    ) {
        validateSchema(
            { id, manufacturer_id, name, category_id },
            schema
        );

        this.id = id;
        this.manufacturer_id = manufacturer_id;
        this.name = name;
        this.category_id = category_id;
    }
}
