import { createManufacturerSchemaModel } from "#infrastructure/database/schemas/domain/manufacturer/create-manufacturer.model.schema.js";
import { updateManufacturerSchemaModel } from "#infrastructure/database/schemas/domain/manufacturer/update-manufacturer.model.schema.js";
import { createManufacturerSchemaDTO } from "#infrastructure/database/schemas/dto/manufacturer/create-manufacturer.dto.schema.js";
import { updateManufacturerSchemaDTO } from "#infrastructure/database/schemas/dto/manufacturer/update-manufacturer.dto.schema.js";

export const manufacturerSchemas = {
    domain: {
        create: createManufacturerSchemaModel,
        update: updateManufacturerSchemaModel
    },
    dto: {
        create: createManufacturerSchemaDTO,
        update: updateManufacturerSchemaDTO
    }
};
