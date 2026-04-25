import { CreateLocationDTO } from "#application/stock/dtos/location/input/CreateLocationDTO.js";
import { UpdateLocationDTO } from "#application/stock/dtos/location/input/UpdateLocationDTO.js";
import { LocationDTO } from "#application/stock/dtos/location/output/LocationDTO.js";

export const locationDTOs = {
    input: {
        create: data => new CreateLocationDTO(data),
        update: data => new UpdateLocationDTO(data)
    },
    output: {
        response: location => new LocationDTO({
            id: location.id,
            description: location.description,
            name: location.name
        })
    }
};
