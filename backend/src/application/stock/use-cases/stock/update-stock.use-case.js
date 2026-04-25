import itemRepository from "#domain/stock/repositories/item.repository.js";
import locationRepository from "#domain/stock/repositories/location.repository.js";
import { validateExistsByFilters } from "#domain/shared/validators/exists-by-filters.validator.js";
import { validateForeignKey } from "#domain/shared/validators/foreign-key.validator.js";
import { Stock } from "#domain/stock/entities/stock.entity.js";
import stockRepository from "#domain/stock/repositories/stock.repository.js";

class UpdateStockUseCase {
    constructor() {
        this.repository = stockRepository;
    }

    async execute(filters, dto) {
        const existing = await validateExistsByFilters(this.repository, filters);

        await validateForeignKey(
            dto.item_id,
            "item_id",
            itemRepository
        );
        await validateForeignKey(
            dto.location_id,
            "location_id",
            locationRepository
        );

        if (dto.item_id != null) {
            existing.item_id = dto.item_id;
        }
        if (dto.location_id != null) {
            existing.location_id = dto.location_id;
        }
        if (dto.quantity != null) {
            existing.quantity = dto.quantity;
        }

        const entity = new Stock(existing);
        const result = await this.repository.update(filters, entity);

        return result;
    }
}

export default new UpdateStockUseCase();
