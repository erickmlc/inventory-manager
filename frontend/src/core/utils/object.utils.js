export function formToObj(form) {
	return Object.fromEntries(
		[...new FormData(form)]
			.map(([k, v]) => {
				if (typeof v === "string") {
					const trimmed = v.trim();

					if (trimmed === "") return [k, ""];

					const n = Number(trimmed);
					return [k, !isNaN(n) ? n : v];
				}

				return [k, v];
			})
			.filter(([, v]) => v !== "" && v != null)
	);
}