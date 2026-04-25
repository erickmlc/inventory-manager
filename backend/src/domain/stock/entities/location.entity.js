import { validateAllowedId } from "#domain/shared/validators/allowed-id.validator.js";

export class Location {
    #id;
    #name;
    #description;

    constructor({ id, name, description } = {}) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    static fromPersistence(persistence) {
        const entity = new Location();

        entity.#id = persistence.id;
        entity.#name = persistence.name;
        entity.#description = persistence.description;

        return entity;
    }

    toPersistence() {
        return {
            "id": this.id,
            "name": this.name,
            "description": this.description
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

    get description() {
        return this.#description;
    }
    set description(description) {
        if (description != null) {
            this.#validateDescription(description);
            description = this.#normalizeDescription(description);
        }
        this.#description = description;
    }
    #validateDescription(description) { }
    #normalizeDescription(description) {
        description = description.trim();
        if (description.length === 0) {
            return null;
        }
        return description;
    }
}
