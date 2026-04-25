import itemRepository from "#domain/stock/repositories/item.repository.js";

class ListItemUseCase {
    constructor() {
        this.repository = itemRepository;
    }

    async execute(filters) {
        const result = await this.repository.findAll(filters);

        return result;
    }
}

export default new ListItemUseCase();
