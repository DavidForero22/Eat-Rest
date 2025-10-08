const Filter = () => {

    return (
        <div id="filtros" className="filter">
            <h2>Filtros</h2>
            <label>Localidad</label> <br/>
            <input type="checkbox" name="zaragoza"/> <label>Zaragoza</label>
            <input type="checkbox" name="murcia"/> <label>Murcia</label>
            <br/><br/>

            <label>Local</label> <br/>
            <input type="checkbox" name="restaurante"/> <label>Restaurante</label>
            <input type="checkbox" name="hotel"/> <label>Hotel</label>
            <br/><br/>
            
            <label>Código postal</label><br/>
            <input type="text" name="codigo-postal"/>
            <br/><br/>
        </div>
    ); 
}

export default Filter;