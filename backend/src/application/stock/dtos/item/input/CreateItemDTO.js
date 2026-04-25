import { validateAllowedId } from "#domain/shared/validators/allowed-id.validator.js";
import { validateSchema } from "#domain/shared/validators/schema.validator.js";
import { createItemSchemaDTO } from "#infrastructure/database/schemas/dto/item/create-item.dto.schema.js";

export class CreateItemDTO {
    manufacturer_id;
    name;
    category_id;

    constructor(
        payload = {},
        schema = createItemSchemaDTO
    ) {
        validateSchema(
            payload,
            schema
        );

        if (payload.category_id != null) {
            validateAllowedId(payload.category_id);
        }

        if (payload.manufacturer_id != null) {
            validateAllowedId(payload.manufacturer_id);
        }

        this.manufacturer_id = payload.manufacturer_id;
        this.name = payload.name;
        this.category_id = payload.category_id;
    }
}
