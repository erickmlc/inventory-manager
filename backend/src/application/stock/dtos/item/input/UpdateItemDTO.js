import { validateAllowedId } from "#domain/shared/validators/allowed-id.validator.js";
import { validateSchema } from "#domain/shared/validators/schema.validator.js";
import { updateItemSchemaDTO } from "#infrastructure/database/schemas/dto/item/update-item.dto.schema.js";

export class UpdateItemDTO {
    id;
    manufacturer_id;
    name;
    category_id;

    constructor(
        payload = {},
        schema = updateItemSchemaDTO
    ) {
        validateSchema(
            payload,
            schema
        );
        
        if (payload.id != null) {
            validateAllowedId(payload.id);
        }

        if (payload.category_id != null) {
            validateAllowedId(payload.category_id);
        }

        if (manufacturer_id != null) {
            validateAllowedId(payload.manufacturer_id);
        }

        this.id = payload.id;
        this.manufacturer_id = payload.manufacturer_id;
        this.name = payload.name;
        this.category_id = payload.category_id;
    }
}
