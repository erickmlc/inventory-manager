import { sendResponse } from "#presentation/helpers/send-response.js";

export function corsMiddleware(req, res, context, next) {
	const allowedHostnames = new Set([
		"localhost",
		"127.0.0.1"
	]);

	const origin = req.headers.origin;

	if (origin == null) return next();

	const originUrl = new URL(origin);

	if (
		allowedHostnames.has(originUrl.hostname) &&
		(originUrl.protocol === 'http:' || originUrl.protocol === 'https:')
	) {
		res.setHeader('Access-Control-Allow-Origin', origin);
		res.setHeader('Vary', 'Origin');
	}

	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, PATCH, DELETE, OPTIONS",
	);
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Content-Type, Authorization, apikey",
	);
	res.setHeader("Access-Control-Max-Age", "86400");

	if (req.method === "OPTIONS") {
		sendResponse(res, 204);
		return;
	}

	return next();
}