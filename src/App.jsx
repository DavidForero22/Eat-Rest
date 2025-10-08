import { useEffect, useState } from "react";
import './App.css'

import Header from  "./modules/header.jsx";
import Cards from "./modules/cards.jsx";
import Filter from "./modules/filter.jsx";
import {callRestaurants} from "./modules/ApiConnector.jsx";

function App() {

  const [zaragozaRestaurants, setZaragozaRestaurants] = useState([]);
  const [murciaRestaurants, setMurciaRestaurants] = useState([]);
  const [zaragozaHotels, setZaragozaHotels] = useState([]);
  const [murciaHotels, setMurciaHotels] = useState([]);

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

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <>
      <Header/>
      <div style={{display: "flex"}}>
        <Filter/>
        <div>
        <Cards data={zaragozaHotels}/>
        </div>
      </div>     
    </>
  )
}

export default App
