import { apiService } from "../../shared/service/api.service.js";

export const itemsApi = {
	async buscar(tipo) {
		return apiService.get(`/${tipo}`);
	},

	async buscarPorId(tipo, id) {
		return apiService.get(`/${tipo}/${id}`);
	},

	async criar(tipo, payload) {
		return apiService.post(`/${tipo}`, payload);
	},

	async atualizar(tipo, id, payload) {
		return apiService.patch(`/${tipo}/${id}`, payload);
	},

	async remover(tipo, id) {
		return apiService.delete(`/${tipo}/${id}`);
	},
};
