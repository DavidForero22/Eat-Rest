export const callRestaurants = async (location, type) => {
    let data;

    if (location == 'zaragoza') {
        const response = await fetch('https://www.zaragoza.es/sede/servicio/restaurante.json');
        data = await response.json();

    } else if(location == 'murcia') {
        const response = await fetch('https://nexo.carm.es/nexo/archivos/recursos/opendata/json/Restaurantes.json');
        data = await response.json();
    }
    
    return data;
}