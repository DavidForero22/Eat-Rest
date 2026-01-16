import { useEffect, useState } from "react";
import "./styles/main.css";

import Header from "./components/layout/Header";
import CardGrid from "./components/ui/CardGrid";
import FilterSidebar from "./components/ui/FilterSidebar";
import { callRestaurants } from "./services/ApiConnector";

function App() {
  const [zaragozaRestaurants, setZaragozaRestaurants] = useState([]);
  const [murciaRestaurants, setMurciaRestaurants] = useState([]);
  const [zaragozaHotels, setZaragozaHotels] = useState([]);
  const [murciaHotels, setMurciaHotels] = useState([]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const fetchRestaurants = async () => {
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

  const displayData = zaragozaHotels.length > 0 ? zaragozaHotels : [];

  return (
    <div className="app-container">
      <Header />

      <main className={`main-content ${!isSidebarOpen ? 'sidebar-collapsed' : ''}`}>
        
        <FilterSidebar 
            isOpen={isSidebarOpen} 
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
        />

        <section style={{ padding: '0 2rem' }}>
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