import { handleHttpErrors } from "#presentation/helpers/error-handler.js";
import router from "./routes.js";

import "./modules/stock/stock.module.js";

export async function app(req, res) {
	let requestContext = { params: {}, body: {} };
	
	try {
		requestContext = {
			body: {},
			url: req.url,
			params: {},
			lang: "en",
			method: req.method,
		}

		return await router.handle(req, res, requestContext);
	} catch (error) {
		return handleHttpErrors(res, error, requestContext);
	}
}
