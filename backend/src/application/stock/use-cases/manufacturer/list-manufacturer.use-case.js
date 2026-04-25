import manufacturerRepository from "#domain/stock/repositories/manufacturer.repository.js";

class ListManufacturerUseCase {
    constructor() {
        this.repository = manufacturerRepository;
    }

    async execute(filters) {
        const result = await this.repository.findAll(filters);

        return result;
    }
}

export default new ListManufacturerUseCase();
