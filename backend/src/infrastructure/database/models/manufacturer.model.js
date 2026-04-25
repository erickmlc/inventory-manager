import { validateSchema } from "#domain/shared/validators/schema.validator.js";

export class ManufacturerModel {
    constructor(
        { id, name, identifier } = {},
        schema
    ) {
        validateSchema(
            { id, name, identifier },
            schema
        );
        
        this.id = id;
        this.name = name;
        this.identifier = identifier;
    }
}
