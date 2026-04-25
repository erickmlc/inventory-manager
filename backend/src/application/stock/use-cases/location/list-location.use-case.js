import locationRepository from "#domain/stock/repositories/location.repository.js";

class ListLocationUseCase {
    constructor() {
        this.repository = locationRepository;
    }

    async execute(filters) {
        const result = await this.repository.findAll(filters);

        return result;
    }
}

export default new ListLocationUseCase();
