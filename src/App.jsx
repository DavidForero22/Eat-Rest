import { useEffect, useState } from "react";
import './App.css'

import Header from  "./modules/header.jsx";
import BestRated from "./modules/bestRated.jsx";
import {callRestaurants} from "./modules/ApiConnector.jsx";

function App() {

  const [zaragozaRestaurants, setZaragozaRestaurants] = useState([]);
  const [murciaRestaurants, setMurciaRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      let data = await callRestaurants("zaragoza");
      setZaragozaRestaurants(data.result); 

      data = await callRestaurants("murcia");
      setMurciaRestaurants(data.result); 
    };
    fetchRestaurants();
  }, []);

  return (
    <>
      <Header/>
      <BestRated data={zaragozaRestaurants} title="Restaurantes en Zaragoza"/>
      <hr/>
      <BestRated data={murciaRestaurants} title="Restaurantes en Murcia"/>
    </>
  )
}

export default App
