export const updateStockSchemaModel = {
    id: {
        type: "number",
        required: true,
    },
    item_id: {
        type: "number",
        required: true,
    },
    location_id: {
        type: "number",
        required: true,
    },
    quantity: {
        type: "number",
        required: true,
    }
};
