import itemRepository from "#domain/stock/repositories/item.repository.js";
import { Item } from "#domain/stock/entities/item.entity.js";
import { validateForeignKey } from "#domain/shared/validators/foreign-key.validator.js";
import manufacturerRepository from "#domain/stock/repositories/manufacturer.repository.js";
import categoryRepository from "#domain/stock/repositories/category.repository.js";

class CreateItemUseCase {
    constructor() {
        this.repository = itemRepository;
    }

    async execute(dto) {
        await validateForeignKey(
            dto.manufacturer_id,
            "manufacturer_id",
            manufacturerRepository
        );
        await validateForeignKey(
            dto.category_id,
            "category_id",
            categoryRepository
        );

        const entity = new Item(dto);

        const result = await this.repository.create(entity);

        return result;
    }
}

export default new CreateItemUseCase();
