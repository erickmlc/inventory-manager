import itemRepository from "#domain/stock/repositories/item.repository.js";
import { validateExistsByFilters } from "#domain/shared/validators/exists-by-filters.validator.js";

class ItemUseCase {
    constructor() {
        this.repository = itemRepository;
    }

    async execute(filters) {
        const result = validateExistsByFilters(this.repository, filters);

        return result;
    }
}

export default new ItemUseCase();
