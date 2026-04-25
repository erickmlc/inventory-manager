import stockRepository from "#domain/stock/repositories/stock.repository.js";

class ListStockUseCase {
    constructor() {
        this.repository = stockRepository;
    }

    async execute(filters) {
        const result = await this.repository.findAll(filters);

        return result;
    }
}

export default new ListStockUseCase();
