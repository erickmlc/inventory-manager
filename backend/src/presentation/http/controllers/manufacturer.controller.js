import { BaseController } from "#infrastructure/base/controller.base.js";
import { manufacturerDTOs } from "#application/factories/dtos/manufacturer.dtos.factory.js";
import { manufacturerUseCases } from "#application/factories/use-cases/manufacturer.use-case.factory.js";

class LocationController extends BaseController {
    constructor() {
        super(manufacturerDTOs, manufacturerUseCases);
    }
}

export default new LocationController();
