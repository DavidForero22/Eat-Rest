import React from 'react';

const FilterSidebar = () => {
    return (
        <aside className="filter-sidebar">
            <h2>Filtros</h2>
            
            <div className="filter-group">
                <label>Ubicación</label>
                <div className="checkbox-wrapper">
                    <input type="checkbox" name="zaragoza" id="zgz" />
                    <label htmlFor="zgz" style={{marginBottom:0, fontWeight:'normal'}}>Zaragoza</label>
                </div>
                <div className="checkbox-wrapper">
                    <input type="checkbox" name="murcia" id="mur" />
                    <label htmlFor="mur" style={{marginBottom:0, fontWeight:'normal'}}>Murcia</label>
                </div>
            </div>

            <div className="filter-group">
                <label>Tipo de Local</label>
                <div className="checkbox-wrapper">
                    <input type="checkbox" name="restaurante" id="rest" />
                    <label htmlFor="rest" style={{marginBottom:0, fontWeight:'normal'}}>Restaurante</label>
                </div>
                <div className="checkbox-wrapper">
                    <input type="checkbox" name="hotel" id="hot" />
                    <label htmlFor="hot" style={{marginBottom:0, fontWeight:'normal'}}>Hotel</label>
                </div>
            </div>

            <div className="filter-group">
                <label>Código Postal</label>
                <input type="text" className="input-text" placeholder="Ej: 50001" />
            </div>
        </aside>
    );
};

export default FilterSidebar;