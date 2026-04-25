import { Category } from "#domain/stock/entities/category.entity.js";
import { BaseMapper } from "#infrastructure/base/mapper.base.js";
import { CategoryModel } from "#infrastructure/database/models/category.model.js";

class CategoryMapper extends BaseMapper {
    constructor() {
        super(Category, CategoryModel);
    }
}

export default new CategoryMapper();
