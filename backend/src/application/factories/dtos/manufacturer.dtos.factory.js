import { CreateManufacturerDTO } from "#application/stock/dtos/manufacturer/input/CreateManufacturerDTO.js";
import { UpdateManufacturerDTO } from "#application/stock/dtos/manufacturer/input/UpdateManufacturerDTO.js";
import { ManufacturerDTO } from "#application/stock/dtos/manufacturer/output/ManufacturerDTO.js";

export const manufacturerDTOs = {
    input: {
        create: data => new CreateManufacturerDTO(data),
        update: data => new UpdateManufacturerDTO(data)
    },
    output: {
        response: manufacturer => new ManufacturerDTO({
            id: manufacturer.id,
            identifier: manufacturer.identifier,
            name: manufacturer.name
        })
    }
};
