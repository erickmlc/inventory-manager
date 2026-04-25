import { validateExistsByFilters } from "#domain/shared/validators/exists-by-filters.validator.js";
import { Manufacturer } from "#domain/stock/entities/manufacturer.entity.js";
import manufacturerRepository from "#domain/stock/repositories/manufacturer.repository.js";

class UpdateManufacturerUseCase {
    constructor() {
        this.repository = manufacturerRepository;
    }

    async execute(filters, dto) {
        const existing = await validateExistsByFilters(this.repository, filters);

        if (dto.name != null) {
            existing.name = dto.name;
        }
        if (dto.identifier != null) {
            existing.identifier = dto.identifier;
        }

        const entity = new Manufacturer(existing);
        const result = await this.repository.update(filters, entity);

        return result;
    }
}

export default new UpdateManufacturerUseCase();
