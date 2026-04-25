import { validateAllowedId } from "#domain/shared/validators/allowed-id.validator.js";

export class Item {
    #id;
    #category_id;
    #name;
    #manufacturer_id;

    constructor({ id, category_id, name, manufacturer_id } = {}) {
        this.id = id;
        this.category_id = category_id;
        this.name = name;
        this.manufacturer_id = manufacturer_id;
    }

    static fromPersistence(persistence) {
        const entity = new Item();

        entity.#id = persistence.id;
        entity.#category_id = persistence.category_id;
        entity.#name = persistence.name;
        entity.#manufacturer_id = persistence.manufacturer_id;

        return entity;
    }

    toPersistence() {
        return {
            "id": this.id,
            "category_id": this.category_id,
            "name": this.name,
            "manufacturer_id": this.manufacturer_id
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
        return id;
    }

    get category_id() {
        return this.#category_id;
    }
    set category_id(category_id) {
        if (category_id != null) {
            this.#validateCategoryId(category_id);
            category_id = this.#normalizeCategoryId(category_id);
        }
        this.#category_id = category_id;
    }
    #validateCategoryId(category_id) {
        validateAllowedId(category_id);
    }
    #normalizeCategoryId(category_id) {
        return category_id;
    }

    get name() {
        return this.#name;
    }
    set name(name) {
        if (name != null) {
            this.#validateName(name);
            name = this.#normalizeName(name);
        }
        this.#name = name;
    }
    #validateName(name) { }
    #normalizeName(name) {
        name = name.trim();
        if (name.length === 0) {
            return null;
        }
        return name;
    }

    get manufacturer_id() {
        return this.#manufacturer_id;
    }
    set manufacturer_id(manufacturer_id) {
        if (manufacturer_id != null) {
            this.#validateManufacturerId(manufacturer_id);
            manufacturer_id = this.#normalizeManufacturerId(manufacturer_id)
        }
        this.#manufacturer_id = manufacturer_id;
    }
    #validateManufacturerId(manufacturer_id) {
        validateAllowedId(manufacturer_id);
    }
    #normalizeManufacturerId(manufacturer_id) {
        return manufacturer_id;
    }
}
