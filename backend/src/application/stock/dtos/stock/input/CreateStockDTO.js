import { validateAllowedId } from "#domain/shared/validators/allowed-id.validator.js";
import { validateSchema } from "#domain/shared/validators/schema.validator.js";
import { createStockSchemaDTO } from "#infrastructure/database/schemas/dto/stock/create-stock.dto.schema.js";

export class CreateStockDTO {
    item_id;
    location_id;
    quantity;

    constructor(
        payload = {},
        schema = createStockSchemaDTO
    ) {
        validateSchema(
            payload,
            schema
        );

        if (payload.item_id != null) {
            validateAllowedId(payload.item_id);
        }

        if (payload.location_id != null) {
            validateAllowedId(payload.location_id);
        }

        if (payload.quantity != null) {
            if (!Number.isInteger(payload.quantity)) {
                throw new BadRequestError(
                    "validation.integer_expected",
                    { field: "quantity" }
                );
            }
        }

        this.quantity = payload.quantity;
        this.location_id = payload.location_id;
        this.item_id = payload.item_id;
    }
}
