import { itemUseCases } from "#application/factories/use-cases/item.use-case.factory.js";
import { BaseController } from "#infrastructure/base/controller.base.js";
import { itemDTOs } from "#application/factories/dtos/item.dtos.factory.js";

class ItemController extends BaseController {
    constructor() {
        super(itemDTOs, itemUseCases);
    }
}

export default new ItemController();
