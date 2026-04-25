import { MENSAGENS } from "../../shared/constants/messages.constants.js";

export function setResultado(element, texto) {
	element.textContent = texto;
}

export function renderErro(element, mensagem) {
	element.textContent = mensagem;
}

export function renderJson(element, data) {
	element.textContent = JSON.stringify(data, null, 1);
}

export async function renderDados(element, findDataFn) {
	setResultado(element, MENSAGENS.carregando);

	try {
		const data = await findDataFn();

		if (data == null || Object.keys(data).length === 0) {
			setResultado(element, MENSAGENS.sucesso);
			return;
		}

		renderJson(element, data);

	} catch (err) {
		console.error(err);

		if (err?.error?.message) {
			renderErro(element, err.error.message);
			return;
		}

		renderErro(element, MENSAGENS.erro);
	}
}