export const updateItemSchemaModel = {
    id: {
        type: "number",
        required: true,
    },
    name: {
        type: "string",
        required: true,
        maxLength: 255,
    },
    manufacturer_id: {
        type: "number",
        required: true,
    },
    category_id: {
        type: "number",
        required: true,
    }
};
