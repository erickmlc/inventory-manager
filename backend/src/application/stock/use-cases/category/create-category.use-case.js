import categoryRepository from "#domain/stock/repositories/category.repository.js";
import { Category } from "#domain/stock/entities/category.entity.js"

class CreateCategoryUseCase {
    constructor() {
        this.repository = categoryRepository;
    }

    async execute(dto) {
        const entity = new Category(dto);

        const result = await this.repository.create(entity);

        return result;
    }
}

export default new CreateCategoryUseCase();
