const DEFAULT_HEADERS = {
	"Content-Type": "application/json"
};

async function request(url, options = {}) {
	const response = await fetch(url, {
		headers: DEFAULT_HEADERS,
		...options
	});

	const contentType = response.headers.get("content-type");
	let data = null;

	if (contentType != null && contentType.includes("application/json")) {
		data = await response.json();
	} else {
		data = await response.text();
	}

	if (!response.ok) {
		throw data;
	}

	return data;
}

export const httpClient = {
	get: (url) => request(url),
	post: (url, body) =>
		request(url, {
			method: "POST",
			body: JSON.stringify(body)
		}),
	put: (url, body) =>
		request(url, {
			method: "PUT",
			body: JSON.stringify(body)
		}),
	patch: (url, body) =>
		request(url, {
			method: "PATCH",
			body: JSON.stringify(body)
		}),
	delete: (url) =>
		request(url, { method: "DELETE" })
};
