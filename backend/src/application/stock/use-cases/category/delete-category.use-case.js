import { validateExistsByFilters } from "#domain/shared/validators/exists-by-filters.validator.js";
import categoryRepository from "#domain/stock/repositories/category.repository.js";

class DeleteCategoryUseCase {
    constructor() {
        this.repository = categoryRepository;
    }

    async execute(filters) {
        await validateExistsByFilters(this.repository, filters);

        const result = await this.repository.remove(filters);

        return result;
    }
}

export default new DeleteCategoryUseCase();
