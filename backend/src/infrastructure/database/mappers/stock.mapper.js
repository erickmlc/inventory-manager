import { Stock } from "#domain/stock/entities/stock.entity.js";
import { BaseMapper } from "#infrastructure/base/mapper.base.js";
import { StockModel } from "#infrastructure/database/models/stock.model.js";

class StockMapper extends BaseMapper {
    constructor() {
        super(Stock, StockModel);
    }
}

export default new StockMapper();
