import { categorySchemas } from "#application/factories/schemas/category.schemas.factory.js";
import { BaseRepository } from "#infrastructure/base/repository.base.js";
import categoryMapper from "#infrastructure/database/mappers/category.mapper.js";

class CategoryRepository extends BaseRepository {
    constructor() {
        super("category", categoryMapper, categorySchemas);
    }
}

export default new CategoryRepository();
