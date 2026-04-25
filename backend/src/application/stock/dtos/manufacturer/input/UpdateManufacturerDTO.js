import { validateAllowedId } from "#domain/shared/validators/allowed-id.validator.js";
import { validateSchema } from "#domain/shared/validators/schema.validator.js";
import { updateManufacturerSchemaDTO } from "#infrastructure/database/schemas/dto/manufacturer/update-manufacturer.dto.schema.js";

export class UpdateManufacturerDTO {
    id;
    name;
    identifier;

    constructor(
        payload = {},
        schema = updateManufacturerSchemaDTO
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
        this.identifier = payload.identifier;
    }
}
