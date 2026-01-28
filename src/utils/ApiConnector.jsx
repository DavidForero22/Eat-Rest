export const callRestaurants = async (
	location,
	type,
	page = 1,
	limit = 9,
	searchText = "",
) => {
	try {
		let normalizedData = [];
		const start = (page - 1) * limit;

		// --- ZARAGOZA (API Real con soporte de parámetros) ---
		if (location === "zaragoza") {
			// Construimos la URL con parámetros de paginación y búsqueda
			let query = "";
			if (searchText) {
				// La API de Zaragoza usa 'title' para filtrar por nombre (sintaxis aproximada)
				query = `&title=${encodeURIComponent(searchText)}`;
			}

			const baseUrl =
				type === "restaurant"
					? "https://www.zaragoza.es/sede/servicio/restaurante.json"
					: "https://www.zaragoza.es/sede/servicio/alojamiento.json";

			const url = `${baseUrl}?rows=${limit}&start=${start}${query}`;

			const response = await fetch(url);
			const json = await response.json();

			if (json.result) {
				normalizedData = json.result.map((item) => ({
					id: item.id,
					name: item.title,
					image:
						item.image || "https://via.placeholder.com/400x300?text=No+Image",
					address: item.streetAddress || "Dirección no disponible",
					postalCode: item.postalCode || "",
					location: "Zaragoza",
					type: type,
					link: item.uri,
				}));
			}

			// --- MURCIA (JSON Estático - Paginación Simulada) ---
		} else if (location === "murcia") {
			const url =
				type === "restaurant"
					? "https://nexo.carm.es/nexo/archivos/recursos/opendata/json/Restaurantes.json"
					: "https://nexo.carm.es/nexo/archivos/recursos/opendata/json/Hoteles.json";

			const response = await fetch(url);
			const json = await response.json();

			// 1. Filtramos primero (por validez y por texto)
			let filteredRaw = json.filter((item) => {
				const hasData = item["Foto 1"] && item["URL Corta"];
				if (!hasData) return false;

				if (searchText) {
					const name = item.Nombre ? item.Nombre.toLowerCase() : "";
					return name.includes(searchText.toLowerCase());
				}
				return true;
			});

			// 2. Paginamos manualmente (slice)
			const pagedRaw = filteredRaw.slice(start, start + limit);

			// 3. Normalizamos
			normalizedData = pagedRaw.map((item) => ({
				id: item.Registro || Math.random(),
				name: item.Nombre,
				image: item["Foto 1"],
				address: item.Dirección || item.Domicilio || "",
				postalCode: item.CP || item["C.P."] || "",
				location: "Murcia",
				type: type,
				link: item["URL Real"],
			}));
		}

		return normalizedData;
	} catch (error) {
		console.error(`Error fetching ${location}:`, error);
		return [];
	}
};
