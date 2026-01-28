import React from "react";
import "../styles/sidebar.css";

const FilterSidebar = ({ filters, onFilterChange }) => {
	// Función para manejar cambios en inputs (texto, radio, checkbox)
	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;

		// Si es checkbox pasamos el estado 'checked', si no el 'value'
		if (type === "checkbox") {
			onFilterChange(name, checked);
		} else {
			onFilterChange(name, value);
		}
	};

	return (
		<aside className="filter-sidebar">
			<div className="sidebar-content">
				<h2>Filtros</h2>

				{/* --- BÚSQUEDA POR NOMBRE --- */}
				<div className="filter-group">
					<label>Buscar por nombre</label>
					<input
						type="text"
						name="searchText"
						className="input-text"
						placeholder="Ej: El Palafox..."
						value={filters.searchText}
						onChange={handleChange}
					/>
				</div>

				{/* --- UBICACIÓN (RADIO BUTTONS) --- */}
				<div className="filter-group">
					<label>Ubicación (Obligatorio)</label>
					<div className="radio-wrapper">
						<input
							type="radio"
							name="location"
							id="loc-zaragoza"
							value="zaragoza"
							checked={filters.location === "zaragoza"}
							onChange={handleChange}
						/>
						<label htmlFor="loc-zaragoza">Zaragoza</label>
					</div>
					<div className="radio-wrapper">
						<input
							type="radio"
							name="location"
							id="loc-murcia"
							value="murcia"
							checked={filters.location === "murcia"}
							onChange={handleChange}
						/>
						<label htmlFor="loc-murcia">Murcia</label>
					</div>
				</div>

				{/* --- TIPO DE LOCAL (CHECKBOXES) --- */}
				<div className="filter-group">
					<label>Tipo de Local</label>
					<div className="checkbox-wrapper">
						<input
							type="checkbox"
							name="restaurante"
							id="type-rest"
							checked={filters.restaurante}
							onChange={handleChange}
						/>
						<label htmlFor="type-rest">Restaurante</label>
					</div>
					<div className="checkbox-wrapper">
						<input
							type="checkbox"
							name="hotel"
							id="type-hotel"
							checked={filters.hotel}
							onChange={handleChange}
						/>
						<label htmlFor="type-hotel">Hotel</label>
					</div>
				</div>

				{/* --- CÓDIGO POSTAL --- */}
				<div className="filter-group">
					<label>Código Postal</label>
					<input
						type="text"
						name="postalCode"
						className="input-text"
						placeholder="Ej: 50001"
						value={filters.postalCode}
						onChange={handleChange}
					/>
				</div>
			</div>
		</aside>
	);
};

export default FilterSidebar;
