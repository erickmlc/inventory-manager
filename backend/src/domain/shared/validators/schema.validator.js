import { BadRequestError } from "#domain/shared/errors/http/BadRequestError.js";

export function validateSchema(data, schema) {
    validateExtraFields(data, schema);
    
    for (const field in schema) {
        const constraints = schema[field];
        validateField(field, data[field], constraints);
    }

    return data;
}

function validateField(field, value, constraints) {
    const { required, type, maxLength } = constraints;

    validateRequired(field, value, required);

    if (value == null) return;

    validateType(field, value, type);
    validateMaxLength(field, value, maxLength);
}

function validateRequired(field, value, required) {
    if (required && value == null) {
        throw new BadRequestError(
            "validation.required",
            { field }
        );
    }
}

function validateType(field, value, type) {
    if (type == null || value == null) return;

    if (typeof value !== type) {
        throw new BadRequestError(
            "validation.type_expected",
            { field, type }
        );
    }
}

function validateMaxLength(field, value, maxLength) {
    if (maxLength == null || typeof value !== "string") return;

    if (value.length > maxLength) {
        throw new BadRequestError(
            "validation.max_length",
            { field, max: maxLength }
        );
    }
}

function validateExtraFields(data, schema) {
    for (const field in data) {
        if (!(field in schema)) {
            throw new BadRequestError(
                "validation.unknown_field",
                { field }
            );
        }
    }
}
