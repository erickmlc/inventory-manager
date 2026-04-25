import { createDropdown } from "../../shared/components/dropdown/dropdown.js";
import { renderDados } from "../../core/utils/render.utils.js";
import { resourcesConfig } from "../../config/resources.config.js";
import { itemsApi } from "../../core/api/backend.api.js";

const resultado = document.getElementById("resultado");
const id = document.getElementById("deleteId");
const btnDelete = document.getElementById("btnDelete");

let currentResource = null;

createDropdown(label => currentResource = resourcesConfig[label.toLowerCase()]);

btnDelete.addEventListener("click", () => {
	renderDados(resultado, () => itemsApi.remover(currentResource.endpoint, id.value));
});
