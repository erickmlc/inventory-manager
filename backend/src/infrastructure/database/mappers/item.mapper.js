import { Item } from "#domain/stock/entities/item.entity.js";
import { BaseMapper } from "#infrastructure/base/mapper.base.js";
import { ItemModel } from "#infrastructure/database/models/item.model.js";

class ItemMapper extends BaseMapper {
    constructor() {
        super(Item, ItemModel);
    }
}

export default new ItemMapper();
