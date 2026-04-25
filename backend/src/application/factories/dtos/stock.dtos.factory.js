import { CreateStockDTO } from "#application/stock/dtos/stock/input/CreateStockDTO.js";
import { UpdateStockDTO } from "#application/stock/dtos/stock/input/UpdateStockDTO.js";
import { StockDTO } from "#application/stock/dtos/stock/output/StockDTO.js";

export const stockDTOs = {
    input: {
        create: data => new CreateStockDTO(data),
        update: data => new UpdateStockDTO(data)
    },
    output: {
        response: stock => new StockDTO({
            id: stock.id,
            item_id: stock.item_id,
            location_id: stock.location_id,
            quantity: stock.quantity
        })
    }
};
