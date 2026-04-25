export async function renderForm(container, formKey, config) {
	container.innerHTML = "";

	const form = document.createElement("form");
	form.id = formKey;

	for (const field of config.fields) {
		const input = document.createElement("input");
		input.name = field.name;
		input.type = field.type;
		input.placeholder = field.placeholder;

		form.appendChild(input);
	}

	container.appendChild(form);
}
