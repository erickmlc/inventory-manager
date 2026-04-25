import stockRepository from "#domain/stock/repositories/stock.repository.js";
import { Stock } from "#domain/stock/entities/stock.entity.js";
import { validateForeignKey } from "#domain/shared/validators/foreign-key.validator.js";
import itemRepository from "#domain/stock/repositories/item.repository.js";
import locationRepository from "#domain/stock/repositories/location.repository.js";

class CreateStockUseCase {
    constructor() {
        this.repository = stockRepository;
    }

    async execute(dto) {
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

        const entity = new Stock(dto);

        const result = await this.repository.create(entity);

        return result;
    }
}

export default new CreateStockUseCase();
