import { httpClient } from "#presentation/helpers/http-client.js";
import { SUPABASE_URL } from "#config/supabase.client.js";
import { BadRequestError } from "#domain/shared/errors/http/BadRequestError.js";
import { UnauthorizedError } from "#domain/shared/errors/http/UnauthorizedError.js";
import { ForbiddenError } from "#domain/shared/errors/http/ForbiddenError.js";
import { TooManyRequestsError } from "#domain/shared/errors/http/TooManyRequestsError.js";
import { InternalError } from "#domain/shared/errors/http/InternalError.js";
import { logger } from "#infrastructure/logging/logger.js";

const ERROR_MAP = {
    "23502": {
        key: "database.not_null_violation",
        code: "FIELD_REQUIRED",
    },
    "23503": {
        key: "database.foreign_key_violation",
        code: "FOREIGN_KEY_VIOLATION",
    },
    "23505": {
        key: "database.unique_violation",
        code: "DUPLICATE_VALUE",
    },
    "23514": {
        key: "database.check_violation",
        code: "CHECK_VIOLATION",
    },
    "22001": {
        key: "database.string_too_long",
        code: "STRING_TOO_LONG",
    },
    "22P02": {
        key: "database.invalid_text_representation",
        code: "INVALID_FORMAT",
    },
    "22003": {
        key: "database.numeric_out_of_range",
        code: "NUMERIC_OUT_OF_RANGE",
    },
    "42601": {
        key: "database.syntax_error",
        code: "SYNTAX_ERROR",
    },
};

class SupabaseGateway {
    constructor() {
        this.baseUrl = `${SUPABASE_URL}/rest/v1`;
    }

    #buildUrl(table, query = "") {
        return `${this.baseUrl}/${table}${query}`;
    }

    #buildQuery(filters = {}) {
        if (filters == null || typeof filters !== "object") return "";

        const queryParts = [];

        for (const [key, value] of Object.entries(filters)) {
            if (value == null) continue;

            if (key === "select") {
                queryParts.push(
                    `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
                );
                continue;
            }

            if (Array.isArray(value)) {
                value.forEach(v => {
                    queryParts.push(
                        `${encodeURIComponent(key)}=eq.${encodeURIComponent(v)}`
                    );
                });
            } else {
                queryParts.push(
                    `${encodeURIComponent(key)}=eq.${encodeURIComponent(value)}`
                );
            }
        }

        return queryParts.length ? `?${queryParts.join("&")}` : "";
    }

    async handleResponse(response) {
        let data = null;

        try {
            data = await response.json();
        } catch { }

        if (!response.ok) {
            switch (response.status) {
                case 401:
                    throw new UnauthorizedError();
                case 403:
                    throw new ForbiddenError();
                case 429:
                    throw new TooManyRequestsError();
                default:
                    if (response.status >= 500) {
                        throw new InternalError();
                    }
                    const errorInfo = ERROR_MAP[data?.code] || {
                        key: "database.unknown_error",
                        code: "UNKNOWN_ERROR"
                    };
                    logger.warn(data?.message);
                    throw new BadRequestError(
                        errorInfo.key,
                        {},
                        errorInfo.code
                    );
            }

        }
        return data;
    }

    async select(table, filters = {}) {
        const query = this.#buildQuery(filters);
        const response = await httpClient.get(
            this.#buildUrl(table, query)
        );
        return this.handleResponse(response);
    }

    async insert(table, payload) {
        const response = await httpClient.post(
            this.#buildUrl(table),
            payload
        );
        return this.handleResponse(response);
    }

    async update(table, payload, filters = {}) {
        const query = this.#buildQuery(filters);
        const response = await httpClient.put(
            this.#buildUrl(table, query),
            payload
        );
        return this.handleResponse(response);
    }

    async remove(table, filters = {}) {
        const query = this.#buildQuery(filters);
        const response = await httpClient.delete(
            this.#buildUrl(table, query)
        );
        return this.handleResponse(response);
    }
}

export default new SupabaseGateway();
