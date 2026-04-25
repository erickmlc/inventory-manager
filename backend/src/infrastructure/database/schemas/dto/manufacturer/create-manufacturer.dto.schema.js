export const createManufacturerSchemaDTO = {
    id: {
        type: "number",
        required: false,
    },
    name: {
        type: "string",
        required: true,
    },
    identifier: {
        type: "number",
        required: true,
    }
};
