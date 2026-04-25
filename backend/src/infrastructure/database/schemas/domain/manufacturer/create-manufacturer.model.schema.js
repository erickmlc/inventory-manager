export const createManufacturerSchemaModel = {
    id: {
        type: "number",
        required: false,
    },
    name: {
        type: "string",
        required: true,
        maxLength: 255
    },
    identifier: {
        type: "string",
        required: true,
        maxLength: 15
    }
};
