import { createCategorySchemaModel } from "#infrastructure/database/schemas/domain/category/create-category.model.schema.js";
import { updateCategorySchemaModel } from "#infrastructure/database/schemas/domain/category/update-category.model.schema.js";
import { createCategorySchemaDTO } from "#infrastructure/database/schemas/dto/category/create-category.dto.schema.js";
import { updateCategorySchemaDTO } from "#infrastructure/database/schemas/dto/category/update-category.dto.schema.js";

export const categorySchemas = {
    domain: {
        create: createCategorySchemaModel,
        update: updateCategorySchemaModel
    },
    dto: {
        create: createCategorySchemaDTO,
        update: updateCategorySchemaDTO
    }
};
