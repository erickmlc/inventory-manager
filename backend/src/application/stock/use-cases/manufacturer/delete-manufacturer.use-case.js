import { validateExistsByFilters } from "#domain/shared/validators/exists-by-filters.validator.js";
import manufacturerRepository from "#domain/stock/repositories/manufacturer.repository.js";

class DeleteManufacturerUseCase {

	constructor() {
		this.repository = manufacturerRepository;
	}

	async execute(filters) {
		await validateExistsByFilters(this.repository, filters);

		const result = await this.repository.remove(filters);

		return result;
	}
}

export default new DeleteManufacturerUseCase();
