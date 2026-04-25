import { itemSchemas } from "#application/factories/schemas/item.schemas.factory.js";
import { BaseRepository } from "#infrastructure/base/repository.base.js";
import itemMapper from "#infrastructure/database/mappers/item.mapper.js";

class ItemRepository extends BaseRepository {
    constructor() {
        super("item", itemMapper, itemSchemas);
    }
}

export default new ItemRepository();
