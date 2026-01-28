import React, { useState, useEffect } from "react";
import FilterSidebar from "../components/FilterSidebar";
import Card from "../components/ui/Card"; // Asegúrate de la ruta correcta
import { callRestaurants } from "../utils/ApiConnector";

const Locales = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(false);

	// Estado de Paginación
	const [page, setPage] = useState(1);
	const ITEMS_PER_PAGE = 9;

	// Estado Unificado de Filtros
	const [filters, setFilters] = useState({
		location: "zaragoza", // Radio button: solo un valor string
		restaurante: true,
		hotel: false,
		postalCode: "",
		searchText: "",
	});

	// Actualizar filtros y resetear página a 1
	const handleFilterChange = (key, value) => {
		setFilters((prev) => ({ ...prev, [key]: value }));
		setPage(1); // Importante: volver a la página 1 al filtrar
	};

	// Cambiar página
	const handlePageChange = (newPage) => {
		if (newPage >= 1) setPage(newPage);
	};

	// EFECTO: Cargar datos cuando cambian filtros o página
	useEffect(() => {
		const loadData = async () => {
			setLoading(true);
			let newData = [];

			try {
				// 1. Buscar Restaurantes si está activo
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

				// 2. Buscar Hoteles si está activo
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

		// Debounce para la búsqueda de texto (opcional pero recomendado)
		const timer = setTimeout(() => {
			loadData();
		}, 300);

		return () => clearTimeout(timer);
	}, [filters, page]); // Dependencias: cualquier cambio en filtros o página dispara la carga

	// Filtrado FINAL por CP (siempre en cliente para simplificar)
	const displayedItems = items.filter((item) => {
		if (!filters.postalCode) return true;
		return String(item.postalCode).includes(filters.postalCode);
	});

	return (
		<div className="main-layout">
			{/* Sidebar Fija */}
			<FilterSidebar filters={filters} onFilterChange={handleFilterChange} />

			{/* Contenido Derecha */}
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

						{/* Controles de Paginación */}
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
								// Deshabilitar "Siguiente" si trajimos menos items de los pedidos
								// (significa que se acabaron)
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
