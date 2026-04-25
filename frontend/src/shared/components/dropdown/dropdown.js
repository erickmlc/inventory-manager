import { MENSAGENS } from "../../../shared/constants/messages.constants.js";

export async function createDropdown(onSelect = null) {
	const button = document.querySelector(".dropdown-btn");
	
	const container = document.querySelector(".dropdown-container")

	const menu = document.createElement("ul");

	menu.className = "dropdown-menu";
	menu.style.display = "none";

	const loading = document.createElement("li");
	loading.textContent = MENSAGENS.carregando;

	menu.appendChild(loading);

	button.addEventListener("click", () => {
		menu.style.display =
			menu.style.display === "block" ? "none" : "block";
	});

	container.appendChild(menu); 

	const types = ["Categorias", "Estoque", "Fabricantes", "Itens", "Locais"];
	
	types.forEach(type =>  {
		const typeName = type;
		const li = document.createElement("li");
		li.textContent = typeName;

		li.addEventListener("click", () => {
			button.textContent = typeName;
			menu.style.display = "none";

			if (onSelect != null) onSelect(typeName);
		});

		menu.appendChild(li);
	});

	loading.remove();
}
