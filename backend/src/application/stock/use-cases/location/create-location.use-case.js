import locationRepository from "#domain/stock/repositories/location.repository.js";
import { Location } from "#domain/stock/entities/location.entity.js";

class CreateLocationUseCase {
    constructor() {
        this.repository = locationRepository;
    }

    async execute(dto) {
        const entity = new Location(dto);

        const result = await this.repository.create(entity);

        return result;
    }
}

export default new CreateLocationUseCase();
