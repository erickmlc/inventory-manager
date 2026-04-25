export const createItemSchemaModel = {
    id: {
        type: "number",
        required: false,
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
