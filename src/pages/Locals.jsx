import React, { useState, useEffect } from "react";
import FilterSidebar from "../components/FilterSidebar";
import Card from "../components/ui/Card";
import { callRestaurants } from "../utils/ApiConnector";

const Locales = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(false);

	// Estado para la paginación (página actual)
	const [page, setPage] = useState(1);
	const ITEMS_PER_PAGE = 9;

	// Estado centralizado para todos los filtros
	const [filters, setFilters] = useState({
		location: "zaragoza", // Valor único (radio button)
		restaurante: true,
		hotel: false,
		postalCode: "",
		searchText: "",
	});

	// Actualiza el filtro modificado y reinicia la paginación a la primera página
	const handleFilterChange = (key, value) => {
		setFilters((prev) => ({ ...prev, [key]: value }));
		setPage(1);
	};

	// Controla el cambio de página asegurando que no sea menor a 1
	const handlePageChange = (newPage) => {
		if (newPage >= 1) setPage(newPage);
	};

	// Efecto principal: Se ejecuta al cambiar filtros o página para cargar datos
	useEffect(() => {
		const loadData = async () => {
			setLoading(true);
			let newData = [];

			try {
				// Si el filtro "restaurante" está activo, llamamos a la API correspondiente
				if (filters.restaurante) {
					const rests = await callRestaurants(
						filters.location,
						"restaurant",
						page,
						ITEMS_PER_PAGE,
						filters.searchText,
					);
					newData = [...newData, ...rests];
				}

				// Si el filtro "hotel" está activo, llamamos a la API correspondiente
				if (filters.hotel) {
					const hotels = await callRestaurants(
						filters.location,
						"hotel",
						page,
						ITEMS_PER_PAGE,
						filters.searchText,
					);
					newData = [...newData, ...hotels];
				}
			} catch (error) {
				console.error("Error en carga:", error);
			}

			setItems(newData);
			setLoading(false);
		};

		// Debounce: Espera 300ms antes de llamar a la API para evitar múltiples llamadas al escribir
		const timer = setTimeout(() => {
			loadData();
		}, 300);

		return () => clearTimeout(timer);
	}, [filters, page]);

	// Filtrado en cliente para el Código Postal (evita recargar la API solo por esto)
	const displayedItems = items.filter((item) => {
		if (!filters.postalCode) return true;
		return String(item.postalCode).includes(filters.postalCode);
	});

	return (
		<div className="main-layout">
			{/* Sidebar fija con los controles de filtrado */}
			<FilterSidebar filters={filters} onFilterChange={handleFilterChange} />

			{/* Área principal de contenido */}
			<main className="content-area">
				<h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
					Resultados en{" "}
					{filters.location === "zaragoza" ? "Zaragoza" : "Murcia"}
				</h1>
				<p style={{ color: "#666", marginBottom: "2rem" }}>
					Mostrando página {page}
				</p>

				{loading ? (
					<p>Cargando locales...</p>
				) : (
					<>
						{displayedItems.length === 0 ? (
							<div className="no-results">
								<p>No se encontraron resultados.</p>
							</div>
						) : (
							<div className="cards-grid">
								{displayedItems.map((item, index) => (
									<Card
										key={`${item.id}-${index}`}
										image={item.image}
										title={item.name}
										description={item.address}
										link={item.link || "#"}
									/>
								))}
							</div>
						)}

						{/* Botones de navegación para la paginación */}
						<div className="pagination-controls">
							<button
								className="pagination-btn"
								onClick={() => handlePageChange(page - 1)}
								disabled={page === 1}
							>
								Anterior
							</button>
							<span style={{ alignSelf: "center", fontWeight: "bold" }}>
								Página {page}
							</span>
							<button
								className="pagination-btn"
								onClick={() => handlePageChange(page + 1)}
								// Deshabilitamos "Siguiente" si se recibieron menos elementos de los solicitados (fin de lista)
								disabled={
									items.length < ITEMS_PER_PAGE &&
									filters.restaurante !== filters.hotel
								}
							>
								Siguiente
							</button>
						</div>
					</>
				)}
			</main>
		</div>
	);
};

export default Locales;
