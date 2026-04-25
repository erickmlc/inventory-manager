import { validateExistsByFilters } from "#domain/shared/validators/exists-by-filters.validator.js";
import itemRepository from "#domain/stock/repositories/item.repository.js";

class DeleteItemUseCase {

	constructor() {
		this.repository = itemRepository;
	}

	async execute(filters) {
		await validateExistsByFilters(this.repository, filters);

		const result = await this.repository.remove(filters);

		return result;
	}
}

export default new DeleteItemUseCase();
