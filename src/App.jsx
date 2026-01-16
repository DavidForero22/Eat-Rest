import { useEffect, useState } from "react";
// Importamos los estilos globales
import "./styles/main.css";

// Importamos los componentes organizados
import Header from "./components/layout/Header";
import CardGrid from "./components/ui/CardGrid";
import FilterSidebar from "./components/ui/FilterSidebar";
import { callRestaurants } from "./services/ApiConnector";

function App() {
  const [zaragozaRestaurants, setZaragozaRestaurants] = useState([]);
  const [murciaRestaurants, setMurciaRestaurants] = useState([]);
  const [zaragozaHotels, setZaragozaHotels] = useState([]);
  const [murciaHotels, setMurciaHotels] = useState([]);

  // Se mantiene tu lógica original de carga de datos
  const fetchRestaurants = async () => {
    // Nota: Es recomendable manejar errores con try/catch aquí también
    try {
      let data = await callRestaurants("zaragoza", "restaurant");
      setZaragozaRestaurants(data || []);

      data = await callRestaurants("murcia", "restaurant");
      setMurciaRestaurants(data || []);

      data = await callRestaurants("zaragoza", "hotel");
      setZaragozaHotels(data || []);

      data = await callRestaurants("murcia", "hotel");
      setMurciaHotels(data || []);
    } catch (error) {
      console.error("Error cargando datos iniciales", error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  // Combinamos datos para mostrar algo interesante en la demo (Ej: Hoteles de Zaragoza)
  // Puedes cambiar esto según la lógica de tu filtro más adelante
  const displayData = zaragozaHotels.length > 0 ? zaragozaHotels : [];

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        {/* Sidebar a la izquierda */}
        <FilterSidebar />

        {/* Grid de contenido a la derecha */}
        <section>
          {displayData.length === 0 ? (
            <p style={{ textAlign: 'center', marginTop: '2rem' }}>Cargando experiencias...</p>
          ) : (
            <CardGrid data={displayData} />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;