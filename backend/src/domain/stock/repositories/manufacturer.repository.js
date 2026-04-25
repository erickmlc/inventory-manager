import { manufacturerSchemas } from "#application/factories/schemas/manufacturer.schemas.factory.js";
import { BaseRepository } from "#infrastructure/base/repository.base.js";
import manufacturerMapper from "#infrastructure/database/mappers/manufacturer.mapper.js";

class ManufacturerRepository extends BaseRepository {
    constructor() {
        super("manufacturer", manufacturerMapper, manufacturerSchemas);
    }
}

export default new ManufacturerRepository();
