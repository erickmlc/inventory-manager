import { validateAllowedId } from "#domain/shared/validators/allowed-id.validator.js";
import { validateSchema } from "#domain/shared/validators/schema.validator.js";
import { updateLocationSchemaDTO } from "#infrastructure/database/schemas/dto/location/update-location.dto.schema.js";

export class UpdateLocationDTO {
    id;
    name;
    description;

    constructor(
        payload = {},
        schema = updateLocationSchemaDTO
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
