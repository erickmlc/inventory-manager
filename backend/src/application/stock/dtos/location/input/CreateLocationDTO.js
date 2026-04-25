import { validateSchema } from "#domain/shared/validators/schema.validator.js";
import { createLocationSchemaDTO } from "#infrastructure/database/schemas/dto/location/create-location.dto.schema.js";

export class CreateLocationDTO {
    name;
    description;

    constructor(
        payload = {},
        schema = createLocationSchemaDTO
    ) {
        validateSchema(
            payload,
            schema
        );

        this.name = payload.name;
        this.description = payload.description;
    }
}
