import { DEFAULT_HEADERS } from "#config/supabase.client.js";
import { InternalError } from "#domain/shared/errors/http/InternalError.js";

async function request(method, url, body) {
	const controller = new AbortController();

	const timeout = setTimeout(() => {
		controller.abort();
	}, 10000);

	try {
		const response = await fetch(url, {
			method,
			headers: DEFAULT_HEADERS,
			body: body ? JSON.stringify(body) : undefined,
			signal: controller.signal
		});

		clearTimeout(timeout);

		return response;

	} catch (error) {
		throw new InternalError("database.connection_error");
	}
}

export const httpClient = {
	delete: (url) => request("DELETE", url),
	get: (url) => request("GET", url),
	post: (url, body) => request("POST", url, body),
	put: (url, body) => request("PUT", url, body),
};
