import categoryRepository from "#domain/stock/repositories/category.repository.js";

class ListCategoryUseCase {
    constructor() {
        this.repository = categoryRepository;
    }

    async execute(filters) {
        const result = await this.repository.findAll(filters);

        return result;
    }
}

export default new ListCategoryUseCase();
