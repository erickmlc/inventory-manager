import { httpClient } from "../../core/api/http.client.js";

const BASE_URL = "http://localhost:3000";

export const apiService = {
	get: (endpoint) =>
		httpClient.get(`${BASE_URL}${endpoint}`),

	post: (endpoint, data) =>
		httpClient.post(`${BASE_URL}${endpoint}`, data),

	patch: (endpoint, data) =>
		httpClient.patch(`${BASE_URL}${endpoint}`, data),

	delete: (endpoint) =>
		httpClient.delete(`${BASE_URL}${endpoint}`)
};
