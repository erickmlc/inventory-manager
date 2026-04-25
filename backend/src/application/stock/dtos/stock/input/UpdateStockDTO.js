import { BadRequestError } from "#domain/shared/errors/http/BadRequestError.js";
import { validateAllowedId } from "#domain/shared/validators/allowed-id.validator.js";
import { validateSchema } from "#domain/shared/validators/schema.validator.js";
import { updateStockSchemaDTO } from "#infrastructure/database/schemas/dto/stock/update-stock.dto.schema.js";

export class UpdateStockDTO {
    id;
    item_id;
    location_id;
    quantity;

    constructor(
        payload = {},
        schema = updateStockSchemaDTO
    ) {
        validateSchema(
            payload,
            schema
        );

        if (payload.id != null) {
            validateAllowedId(payload.id);
        }

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

        this.id = payload.id;
        this.quantity = payload.quantity;
        this.location_id = payload.location_id;
        this.item_id = payload.item_id;
    }
}
