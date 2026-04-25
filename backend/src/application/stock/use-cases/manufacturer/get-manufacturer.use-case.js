import manufacturerRepository from "#domain/stock/repositories/manufacturer.repository.js";
import { validateExistsByFilters } from "#domain/shared/validators/exists-by-filters.validator.js";

class ManufacturerUseCase {
    constructor() {
        this.repository = manufacturerRepository;
    }

    async execute(filters) {
        const result = validateExistsByFilters(this.repository, filters);

        return result;
    }
}

export default new ManufacturerUseCase();
