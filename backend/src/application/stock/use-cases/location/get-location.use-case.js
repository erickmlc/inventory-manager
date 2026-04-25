import { validateExistsByFilters } from "#domain/shared/validators/exists-by-filters.validator.js";
import locationRepository from "#domain/stock/repositories/location.repository.js";

class LocationUseCase {
    constructor() {
        this.repository = locationRepository;
    }

    async execute(filters) {
        const result = validateExistsByFilters(this.repository, filters);

        return result;
    }
}

export default new LocationUseCase();
