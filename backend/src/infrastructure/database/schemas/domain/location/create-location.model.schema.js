export const createLocationSchemaModel = {
    id: {
        type: "number",
        required: false,
    },
    name: {
        type: "string",
        required: true,
        maxLength: 255
    },
    description: {
        type: "string",
        required: false,
        maxLength: 255
    }
};
