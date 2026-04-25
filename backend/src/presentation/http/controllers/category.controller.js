import { categoryUseCases } from "#application/factories/use-cases/category.use-case.factory.js";
import { BaseController } from "#infrastructure/base/controller.base.js";
import { categoryDTOs } from "#application/factories/dtos/category.dtos.factory.js";

class CategoryController extends BaseController {
    constructor() {
        super(categoryDTOs, categoryUseCases);
    }
}

export default new CategoryController();
