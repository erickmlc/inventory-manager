import { locationSchemas } from "#application/factories/schemas/location.schemas.factory.js";
import { BaseRepository } from "#infrastructure/base/repository.base.js";
import locationMapper from "#infrastructure/database/mappers/location.mapper.js";

class LocationRepository extends BaseRepository {
    constructor() {
        super("location", locationMapper, locationSchemas);
    }
}

export default new LocationRepository();
