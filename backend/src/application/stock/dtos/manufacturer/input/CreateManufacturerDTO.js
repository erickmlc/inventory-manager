import { validateSchema } from "#domain/shared/validators/schema.validator.js";
import { createManufacturerSchemaDTO } from "#infrastructure/database/schemas/dto/manufacturer/create-manufacturer.dto.schema.js";

export class CreateManufacturerDTO {
    name;
    identifier;

    constructor(
        payload = {},
        schema = createManufacturerSchemaDTO
    ) {
        validateSchema(
            payload,
            schema
        );

        this.name = payload.name;
        this.identifier = payload.identifier;
    }
}
