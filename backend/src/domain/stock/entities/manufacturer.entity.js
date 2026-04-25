import { BadRequestError } from "#domain/shared/errors/http/BadRequestError.js";
import { validateAllowedId } from "#domain/shared/validators/allowed-id.validator.js";

export class Manufacturer {
    #id;
    #name;
    #identifier;

    constructor({ id, name, identifier } = {}) {
        this.id = id;
        this.name = name;
        this.identifier = identifier;
    }

    static fromPersistence(persistence) {
        const entity = new Manufacturer();

        entity.#id = persistence.id
        entity.#name = persistence.name
        entity.#identifier = persistence.identifier;

        return entity;
    }

    toPersistence() {
        return {
            "id": this.id,
            "name": this.name,
            "identifier": this.identifier
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
    #normalizeId(id){
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
        this.#name  = name;
    }
    #validateName(name) { }
    #normalizeName(name) {
        name = name.trim();
        if (name.length === 0) {
            return null;
        }
        return name;
    }

    get identifier() {
        return this.#identifier;
    }
    set identifier(identifier) {
        if (identifier != null) {
            this.#validateIdentifier(identifier);
            identifier = this.#normalizeIdentifier(identifier);
        }
        this.#identifier = identifier;
    }
    #validateIdentifier(identifier) {
        if (identifier < 1e7 || identifier > 1e15) {
            throw new BadRequestError(
                "validation.numeric_out_of_range",
                { field: "identifier", min: 1e7, max: 1e15 }
            );
        }
    }
    #normalizeIdentifier(identifier) {
        identifier = String(identifier);
        return identifier;
    }
}
