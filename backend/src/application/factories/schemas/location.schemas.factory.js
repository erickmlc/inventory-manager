import { createLocationSchemaModel } from "#infrastructure/database/schemas/domain/location/create-location.model.schema.js";
import { updateLocationSchemaModel } from "#infrastructure/database/schemas/domain/location/update-location.model.schema.js";
import { createLocationSchemaDTO } from "#infrastructure/database/schemas/dto/location/create-location.dto.schema.js";
import { updateLocationSchemaDTO } from "#infrastructure/database/schemas/dto/location/update-location.dto.schema.js";

export const locationSchemas = {
    domain: {
        create: createLocationSchemaModel,
        update: updateLocationSchemaModel
    },
    dto: {
        create: createLocationSchemaDTO,
        update: updateLocationSchemaDTO
    }
};
