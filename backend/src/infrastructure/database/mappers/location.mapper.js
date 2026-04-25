import { Location } from "#domain/stock/entities/location.entity.js";
import { BaseMapper } from "#infrastructure/base/mapper.base.js";
import { LocationModel } from "#infrastructure/database/models/location.model.js";

class LocationMapper extends BaseMapper {
    constructor() {
        super(Location, LocationModel);
    }
}

export default new LocationMapper();
