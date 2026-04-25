export const updateCategorySchemaModel = {
    id: {
        type: "number",
        required: true,
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
