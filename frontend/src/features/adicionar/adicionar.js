import { createDropdown } from "../../shared/components/dropdown/dropdown.js";
import { renderForm } from "../../shared/components/forms/forms.js";
import { resourcesConfig } from "../../config/resources.config.js";
import { renderDados } from "../../core/utils/render.utils.js";
import { formToObj } from "../../core/utils/object.utils.js";
import { itemsApi } from "../../core/api/backend.api.js";

const btnSalvar = document.getElementById("btnSalvar");
const resultado = document.getElementById("resultado");
const formContainer = document.querySelector(".form-container");

let currentResource = null;

createDropdown(label => {
	currentResource = resourcesConfig[label.toLowerCase()];
	renderForm(formContainer, currentResource.endpoint, currentResource);
});

btnSalvar.addEventListener("click", () => {
	const form = document.getElementById(currentResource.endpoint);
	const obj = formToObj(form);

	renderDados(resultado, () => itemsApi.criar(currentResource.endpoint, obj));
});
