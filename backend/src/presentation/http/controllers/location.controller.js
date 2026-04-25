import { BaseController } from "#infrastructure/base/controller.base.js";
import { locationDTOs } from "#application/factories/dtos/location.dtos.factory.js";
import { locationUseCases } from "#application/factories/use-cases/location.use-case.factory.js";

class LocationController extends BaseController {
    constructor() {
        super(locationDTOs, locationUseCases);
    }
}

export default new LocationController();
