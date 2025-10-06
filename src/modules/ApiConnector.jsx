export const callRestaurants = async (location, type) => {
    let data;

    if (location == 'zaragoza') {
        let response = (
            type == 'restaurant' ? await fetch('https://www.zaragoza.es/sede/servicio/restaurante.json?rows=500')
            : type == 'hotel' ? await fetch('https://www.zaragoza.es/sede/servicio/alojamiento.json?rows=500')
            : console.log('Error while connecting to api: Type not found.')
        );

        data = await response.json();    
        data = data.result.filter(item => item.hasOwnProperty('image'));

    } else if(location == 'murcia') {
        const response = (
            type == 'restaurant' ? await fetch('https://nexo.carm.es/nexo/archivos/recursos/opendata/json/Restaurantes.json')
            : type == 'hotel' ? await fetch('https://nexo.carm.es/nexo/archivos/recursos/opendata/json/Hoteles.json')
            : console.log('Error while connecting to api: Type not found.')
        );
        data = await response.json();
        // console.log(data);
        data = data.filter(item => item.hasOwnProperty('Foto 1'));
    }
    return data;
}