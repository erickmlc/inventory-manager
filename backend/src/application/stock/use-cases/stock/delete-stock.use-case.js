import { validateExistsByFilters } from "#domain/shared/validators/exists-by-filters.validator.js";
import stockRepository from "#domain/stock/repositories/stock.repository.js";

class DeleteStockUseCase {

	constructor() {
		this.repository = stockRepository;
	}

	async execute(filters) {
		await validateExistsByFilters(this.repository, filters);

		const result = await this.repository.remove(filters);

		return result;
	}
}

export default new DeleteStockUseCase();
