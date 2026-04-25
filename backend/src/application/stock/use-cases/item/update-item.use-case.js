import categoryRepository from "#domain/stock/repositories/category.repository.js";
import manufacturerRepository from "#domain/stock/repositories/manufacturer.repository.js";
import { validateForeignKey } from "#domain/shared/validators/foreign-key.validator.js";
import { validateExistsByFilters } from "#domain/shared/validators/exists-by-filters.validator.js";
import { Item } from "#domain/stock/entities/item.entity.js";
import itemRepository from "#domain/stock/repositories/item.repository.js";

class UpdateItemUseCase {
    constructor() {
        this.repository = itemRepository;
    }

    async execute(filters, dto) {
        const existing = await validateExistsByFilters(this.repository, filters);
        
        await validateForeignKey(
            dto.category_id,
            "category_id",
            categoryRepository
        );
        await validateForeignKey(
            dto.manufacturer_id,
            "manufacturer_id",
            manufacturerRepository
        );

        if (dto.category_id != null) {
            existing.category_id = dto.category_id;
        }
        if (dto.name != null) {
            existing.name = dto.name;
        }
        if (dto.manufacturer_id != null) {
            existing.manufacturer_id = dto.manufacturer_id;
        }

        const entity = new Item(existing);
        const result = await this.repository.update(filters, entity);

        return result;
    }
}

export default new UpdateItemUseCase();
