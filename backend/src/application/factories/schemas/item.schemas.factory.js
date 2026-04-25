import { createItemSchemaModel } from "#infrastructure/database/schemas/domain/item/create-item.model.schema.js";
import { updateItemSchemaModel } from "#infrastructure/database/schemas/domain/item/update-item.model.schema.js";
import { createItemSchemaDTO } from "#infrastructure/database/schemas/dto/item/create-item.dto.schema.js";
import { updateItemSchemaDTO } from "#infrastructure/database/schemas/dto/item/update-item.dto.schema.js";

export const itemSchemas = {
    domain: {
        create: createItemSchemaModel,
        update: updateItemSchemaModel
    },
    dto: {
        create: createItemSchemaDTO,
        update: updateItemSchemaDTO
    }
};
