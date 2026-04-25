export const createStockSchemaModel = {
    id: {
        type: "number",
        required: false,
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
