import { stockUseCases } from "#application/factories/use-cases/stock.use-case.factory.js";
import { BaseController } from "#infrastructure/base/controller.base.js";
import { stockDTOs } from "#application/factories/dtos/stock.dtos.factory.js";

class StockController extends BaseController {
    constructor() {
        super(stockDTOs, stockUseCases);
    }
}

export default new StockController();
