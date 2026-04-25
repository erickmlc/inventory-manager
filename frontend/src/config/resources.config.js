export const resourcesConfig = {
	categorias: {
		label: "Categorias",
		endpoint: "categories",
		fields: [
			{ name: "name", type: "text", placeholder: "Nome" },
			{ name: "description", type: "text", placeholder: "Descrição" }
		]
	},

	estoque: {
		label: "Estoque",
		endpoint: "stock",
		fields: [
			{ name: "item_id", type: "number", placeholder: "ID do item", source: "itens" },
			{ name: "location_id", type: "number", placeholder: "ID do local", source: "locais" },
			{ name: "quantity", type: "number", placeholder: "Quantidade" }
		]
	},

	fabricantes: {
		label: "Fabricantes",
		endpoint: "manufacturers",
		fields: [
			{ name: "name", type: "text", placeholder: "Nome" },
			{ name: "identifier", type: "text", placeholder: "CNPJ" }
		]
	},

	itens: {
		label: "Itens",
		endpoint: "items",
		fields: [
			{ name: "manufacturer_id", type: "number", placeholder: "ID do fabricante", source: "fabricantes" },
			{ name: "name", type: "text", placeholder: "Nome" },
			{ name: "category_id", type: "number", placeholder: "ID da categoria", source: "categorias" }
		]
	},

	locais: {
		label: "Locais",
		endpoint: "locations",
		fields: [
			{ name: "name", type: "text", placeholder: "Nome" },
			{ name: "description", type: "text", placeholder: "Descrição" }
		]
	}
};
