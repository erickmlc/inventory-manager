import categoryRepository from "#domain/stock/repositories/category.repository.js";
import { validateExistsByFilters } from "#domain/shared/validators/exists-by-filters.validator.js";

class CategoryUseCase {
    constructor() {
        this.repository = categoryRepository;
    }

    async execute(filters) {
        const result = validateExistsByFilters(this.repository, filters);

        return result;
    }
}

export default new CategoryUseCase();
