import { useEffect, useState } from "react";
import './App.css'

import Header from  "./modules/header.jsx";
import RowCards from "./modules/rowCards.jsx";
import {callRestaurants} from "./modules/ApiConnector.jsx";

function App() {

  const [zaragozaRestaurants, setZaragozaRestaurants] = useState([]);
  const [murciaRestaurants, setMurciaRestaurants] = useState([]);
  const [zaragozaHotels, setZaragozaHotels] = useState([]);
  const [murciaHotels, setMurciaHotels] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      let data = await callRestaurants("zaragoza", "restaurant");
      setZaragozaRestaurants(data); 

      data = await callRestaurants("murcia", "restaurant");
      setMurciaRestaurants(data);

      data = await callRestaurants("zaragoza", "hotel");
      setZaragozaHotels(data);

      data = await callRestaurants("murcia", "hotel");
      setMurciaHotels(data);
    };
    fetchRestaurants();
  }, []);

  return (
    <>
      <Header/>
      <RowCards data={zaragozaRestaurants} title="Restaurantes en Zaragoza"/>
      <hr/>
      <RowCards data={murciaRestaurants} title="Restaurantes en Murcia"/>
      <hr/>
      <RowCards data={zaragozaHotels} title="Hoteles en Zaragoza"/>
      <hr/>
      <RowCards data={murciaHotels} title="Hoteles en Murcia"/>
    </>
  )
}

export default App
