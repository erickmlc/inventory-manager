export const updateManufacturerSchemaModel = {
    id: {
        type: "number",
        required: true,
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
