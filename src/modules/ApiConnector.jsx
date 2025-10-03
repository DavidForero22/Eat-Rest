export const callRestaurants = async (location, type) => {
    let data;

    if (location == 'zaragoza') {
        const response = (
            type == 'restaurant' ? await fetch('https://www.zaragoza.es/sede/servicio/restaurante.json')
            : type == 'hotel' ? await fetch('https://www.zaragoza.es/sede/servicio/alojamiento.json')
            : console.log('Error while connecting to api: Type not found.')
        );
        data = await response.json();

    } else if(location == 'murcia') {
        const response = (
            type == 'restaurant' ? await fetch('https://nexo.carm.es/nexo/archivos/recursos/opendata/json/Restaurantes.json')
            : type == 'hotel' ? await fetch('https://nexo.carm.es/nexo/archivos/recursos/opendata/json/Hoteles.json')
            : console.log('Error while connecting to api: Type not found.')
        );
        data = await response.json();
    }
    
    return data;
}