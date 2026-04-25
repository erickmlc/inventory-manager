import { validateExistsByFilters } from "#domain/shared/validators/exists-by-filters.validator.js";
import { Location } from "#domain/stock/entities/location.entity.js";
import locationRepository from "#domain/stock/repositories/location.repository.js";

class UpdateLocationUseCase {
    constructor() {
        this.repository = locationRepository;
    }

    async execute(filters, dto) {
        const existing = await validateExistsByFilters(this.repository, filters);

        if (dto.name != null) {
            existing.name = dto.name;
        }
        if (dto.description != null) {
            existing.description = dto.description;
        }

        const entity = new Location(existing);
        const result = await this.repository.update(filters, entity);

        return result;
    }
}

export default new UpdateLocationUseCase();
