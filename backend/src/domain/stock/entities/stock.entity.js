import { BadRequestError } from "#domain/shared/errors/http/BadRequestError.js";
import { validateAllowedId } from "#domain/shared/validators/allowed-id.validator.js";

export class Stock {
    #id;
    #item_id;
    #location_id;
    #quantity;

    constructor({ id, item_id, location_id, quantity } = {}) {
        this.id = id;
        this.item_id = item_id;
        this.location_id = location_id;
        this.quantity = quantity;
    }

    static fromPersistence(persistence) {
        const entity = new Stock()

        entity.#id = persistence.id;
        entity.#item_id = persistence.item_id;
        entity.#location_id = persistence.location_id;
        entity.#quantity = persistence.quantity;

        return entity;
    }

    toPersistence() {
        return {
            "id": this.id,
            "item_id": this.item_id,
            "location_id": this.location_id,
            "quantity": this.quantity
        };
    }

    get id() {
        return this.#id;
    }
    set id(id) {
        if (id != null) {
            this.#validateId(id);
            id = this.#normalizeId(id);
        }
        this.#id = id;
    }
    #validateId(id) {
        validateAllowedId(id);
    }
    #normalizeId(id) {
        return id
    }

    get item_id() {
        return this.#item_id;
    }
    set item_id(item_id) {
        if (item_id != null) {
            this.#validateItemId(item_id);
            item_id = this.#normalizeItemId(item_id);
        }
        this.#item_id = item_id;
    }
    #validateItemId(item_id) {
        validateAllowedId(item_id);
    }
    #normalizeItemId(item_id) {
        return item_id;
    }

    get location_id() {
        return this.#location_id;
    }
    set location_id(location_id) {
        if (location_id != null) {
            this.#validateLocationId(location_id);
            location_id = this.#normalizeLocationId(location_id);
        }
        this.#location_id = location_id;
    }
    #validateLocationId(location_id) {
        validateAllowedId(location_id);
    }
    #normalizeLocationId(location_id) {
        return location_id
    }

    get quantity() {
        return this.#quantity;
    }
    set quantity(quantity) {
        if (quantity != null) {
            this.#validateQuantity(quantity);
            quantity = this.#normalizeQuantity(quantity);
        }
        this.#quantity = quantity;
    }
    #validateQuantity(quantity) {
        if (quantity < 1) {
            throw new BadRequestError(
                "validation.min_value",
                { field: "quantity", min: 1 }
            );
        }
    }
    #normalizeQuantity(quantity) {
        return quantity;
    }
}
