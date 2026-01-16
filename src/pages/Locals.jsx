import { useEffect, useState } from "react";
import CardGrid from "../components/ui/CardGrid";
import FilterSidebar from "../components/FilterSidebar";
import { callRestaurants } from "../services/ApiConnector";

const Locales = () => {
    const [zaragozaRestaurants, setZaragozaRestaurants] = useState([]);
    const [murciaRestaurants, setMurciaRestaurants] = useState([]);
    const [zaragozaHotels, setZaragozaHotels] = useState([]);
    const [murciaHotels, setMurciaHotels] = useState([]);

    // Estado del Sidebar
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

    // Lógica de datos a mostrar (Aquí conectarías tus filtros reales más adelante)
    const displayData = zaragozaHotels.length > 0 ? zaragozaHotels : [];

    return (
        /* Usamos las clases main-content que definimos en CSS para el layout grid */
        <main className={`main-content ${!isSidebarOpen ? 'sidebar-collapsed' : ''}`}>

            <FilterSidebar
                isOpen={isSidebarOpen}
                toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            />

            <section style={{ padding: '0 3rem' }}>
                <h1 style={{ marginBottom: '2rem', fontSize: '2rem' }}>Explora nuestros locales</h1>

                {displayData.length === 0 ? (
                    <p style={{ textAlign: 'center', marginTop: '2rem' }}>Cargando experiencias...</p>
                ) : (
                    <CardGrid data={displayData} />
                )}
            </section>

        </main>
    );
};

export default Locales;