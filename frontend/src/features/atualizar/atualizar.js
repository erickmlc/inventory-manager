import { createDropdown } from "../../shared/components/dropdown/dropdown.js";
import { renderForm } from "../../shared/components/forms/forms.js";
import { resourcesConfig } from "../../config/resources.config.js";
import { renderDados } from "../../core/utils/render.utils.js";
import { formToObj } from "../../core/utils/object.utils.js";
import { itemsApi } from "../../core/api/backend.api.js";

const btnAtualizar = document.getElementById("btnAtualizar");
const id = document.getElementById("updateId");
const resultado = document.getElementById("resultado");
const formContainer = document.querySelector(".form-container");

let currentResource = null;

await createDropdown(label =>{
    currentResource = resourcesConfig[label.toLowerCase()];
    renderForm(formContainer, currentResource.endpoint, currentResource);
});

btnAtualizar.addEventListener("click", () => {
    const form = document.getElementById(currentResource.endpoint);
    const obj = formToObj(form);

    renderDados(resultado, () => itemsApi.atualizar(currentResource.endpoint, id.value, obj));
});
