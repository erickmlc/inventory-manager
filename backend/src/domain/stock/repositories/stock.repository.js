import { stockSchemas } from "#application/factories/schemas/stock.schemas.factory.js";
import { BaseRepository } from "#infrastructure/base/repository.base.js";
import stockMapper from "#infrastructure/database/mappers/stock.mapper.js";

class StockRepository extends BaseRepository {
    constructor() {
        super("stock", stockMapper, stockSchemas);
    }
}

export default new StockRepository();
