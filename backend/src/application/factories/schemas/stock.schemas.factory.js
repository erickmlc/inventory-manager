import { createStockSchemaModel } from "#infrastructure/database/schemas/domain/stock/create-stock.model.schema.js";
import { updateStockSchemaModel } from "#infrastructure/database/schemas/domain/stock/update-stock.model.schema.js";
import { createStockSchemaDTO } from "#infrastructure/database/schemas/dto/stock/create-stock.dto.schema.js";
import { updateStockSchemaDTO } from "#infrastructure/database/schemas/dto/stock/update-stock.dto.schema.js";

export const stockSchemas = {
    domain: {
        create: createStockSchemaModel,
        update: updateStockSchemaModel
    },
    dto: {
        create: createStockSchemaDTO,
        update: updateStockSchemaDTO
    }
};
