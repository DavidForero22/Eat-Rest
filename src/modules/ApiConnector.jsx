export const callRestaurants = async (location) => {
    const lowLocation = location.toLowerCase();
    let data;

    if (lowLocation == 'zaragoza') {
        const response = await fetch('https://www.zaragoza.es/sede/servicio/alojamiento.json');
        data = await response.json();

    } else if(lowLocation == 'murcia') {
        const response = await fetch('https://nexo.carm.es/nexo/archivos/recursos/opendata/json/Restaurantes.json');
        data = await response.json();
    }

    if (data != null) {
        console.log(data);

    } else {
        console.log('El parametro ' + location + ' no es válido.')
    }
}


export const testApi = () => {
    return (
        <>
        <button onClick={() => callRestaurants('murcia')}>Probar API</button>
        </>
    );
}