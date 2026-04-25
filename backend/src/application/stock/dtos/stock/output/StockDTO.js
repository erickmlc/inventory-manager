export class StockDTO {
    constructor({ id, item_id, location_id, quantity }) {
        this.id = id;
        this.quantity = quantity;
        this.location_id = location_id;
        this.item_id = item_id;
    }
}
