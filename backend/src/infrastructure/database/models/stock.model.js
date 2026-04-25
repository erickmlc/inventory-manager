import { validateSchema } from "#domain/shared/validators/schema.validator.js";

export class StockModel {
    constructor(
        { id, item_id, location_id, quantity } = {},
        schema
    ) {
        validateSchema(
            { id, item_id, location_id, quantity },
            schema
        );
        
        this.id = id;
        this.quantity = quantity;
        this.location_id = location_id;
        this.item_id = item_id;
    }
}
