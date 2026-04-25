import { validateExistsByFilters } from "#domain/shared/validators/exists-by-filters.validator.js";
import { Category } from "#domain/stock/entities/category.entity.js";
import categoryRepository from "#domain/stock/repositories/category.repository.js";

class UpdateCategoryUseCase {
    constructor() {
        this.repository = categoryRepository;
    }

    async execute(filters, dto) {
        const existing = await validateExistsByFilters(this.repository, filters);

        if (dto.name != null) {
            existing.name = dto.name;
        }
        if (dto.description != null) {
            existing.description = dto.description;
        }

        const entity = new Category(existing);
        const result = await this.repository.update(filters, entity);

        return result;
    }
}

export default new UpdateCategoryUseCase();
