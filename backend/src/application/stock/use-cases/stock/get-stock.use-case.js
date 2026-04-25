import stockRepository from "#domain/stock/repositories/stock.repository.js";
import { validateExistsByFilters } from "#domain/shared/validators/exists-by-filters.validator.js";

class StockUseCase {
    constructor() {
        this.repository = stockRepository;
    }

    async execute(filters) {
        const result = validateExistsByFilters(this.repository, filters);

        return result;
    }
}

export default new StockUseCase();
