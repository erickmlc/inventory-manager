import { Manufacturer } from "#domain/stock/entities/manufacturer.entity.js";
import { BaseMapper } from "#infrastructure/base/mapper.base.js";
import { ManufacturerModel } from "#infrastructure/database/models/manufacturer.model.js";

class ManufacturerMapper extends BaseMapper {
    constructor() {
        super(Manufacturer, ManufacturerModel);
    }
}

export default new ManufacturerMapper();
