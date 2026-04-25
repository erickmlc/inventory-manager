import { renderDados } from "../../core/utils/render.utils.js";
import { createDropdown } from "../../shared/components/dropdown/dropdown.js";
import { resourcesConfig } from "../../config/resources.config.js";
import { itemsApi } from "../../core/api/backend.api.js";

const resultado = document.getElementById("resultado");
const id = document.getElementById("readId");
const btnBuscar = document.getElementById("btnBuscar");

let currentResource = null;

createDropdown(label => currentResource = resourcesConfig[label.toLowerCase()]);

btnBuscar.addEventListener("click", () => {
	renderDados(resultado, () => id.value != null 
		? itemsApi.buscarPorId(currentResource.endpoint, id.value)
		: itemsApi.buscar(currentResource.endpoint)
	);
});
