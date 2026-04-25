import { CreateItemDTO } from "#application/stock/dtos/item/input/CreateItemDTO.js";
import { UpdateItemDTO } from "#application/stock/dtos/item/input/UpdateItemDTO.js";
import { ItemDTO } from "#application/stock/dtos/item/output/ItemDTO.js";

export const itemDTOs = {
    input: {
        create: data => new CreateItemDTO(data),
        update: data => new UpdateItemDTO(data)
    },
    output: {
        response: item => new ItemDTO({
            id: item.id,
            category_id: item.category_id,
            manufacturer_id: item.manufacturer_id,
            name: item.name
        })
    }
};
