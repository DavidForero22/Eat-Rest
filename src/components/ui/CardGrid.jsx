import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardGrid = ({ data }) => {
	const [dataList, setDataList] = useState([]);

	useEffect(() => {
		if (data && data.length > 0) {
			// Seleccionar índice aleatorio para mostrar contenido variado en cada carga
			const startIndex = Math.floor(Math.random() * data.length);
			const selectedCards = [];

			// Limitar a máximo 9 tarjetas
			const limit = Math.min(9, data.length);

			for (let i = 0; i < limit; i++) {
				// Usamos módulo (%) para rotar al principio del array si llegamos al final
				const index = (startIndex + i) % data.length;
				const item = data[index];

				// Normalización de datos para soportar distintas estructuras de API
				selectedCards.push({
					image: item.image || item["Foto 1"],
					title: item.title || item["Nombre"],
					description:
						item.streetAddress ||
						item["Dirección"] ||
						"Sin descripción disponible",
					link: item.uri || item["URL Real"] || "#",
				});
			}
			setDataList(selectedCards);
		}
	}, [data]);

	return (
		<div className="cards-grid">
			{dataList.map((item, index) => (
				<Card
					key={index}
					image={item.image}
					title={item.title}
					description={item.description}
					link={item.link}
				/>
			))}
		</div>
	);
};

export default CardGrid;
