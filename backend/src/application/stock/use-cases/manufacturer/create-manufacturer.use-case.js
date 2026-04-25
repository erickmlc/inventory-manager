import manufacturerRepository from "#domain/stock/repositories/manufacturer.repository.js";
import { Manufacturer } from "#domain/stock/entities/manufacturer.entity.js";

class CreateManufacturerUseCase {
    constructor() {
        this.repository = manufacturerRepository;
    }

    async execute(dto) {
        const entity = new Manufacturer(dto);

        const result = await this.repository.create(entity);

        return result;
    }
}

export default new CreateManufacturerUseCase();
