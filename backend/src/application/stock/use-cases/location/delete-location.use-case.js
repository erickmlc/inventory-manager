import { validateExistsByFilters } from "#domain/shared/validators/exists-by-filters.validator.js";
import locationRepository from "#domain/stock/repositories/location.repository.js";

class DeleteLocationUseCase {

	constructor() {
		this.repository = locationRepository;
	}

	async execute(filters) {
		await validateExistsByFilters(this.repository, filters);

		const result = await this.repository.remove(filters);

		return result;
	}
}

export default new DeleteLocationUseCase();
