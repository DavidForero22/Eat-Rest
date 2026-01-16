import React from 'react';

const FilterSidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <aside className={`filter-sidebar ${!isOpen ? 'collapsed' : ''}`}>
            
            {/* Botón de Toggle: Se mantiene fuera del wrapper de contenido */}
            <button 
                className="sidebar-toggle-btn" 
                onClick={toggleSidebar}
                title={isOpen ? "Ocultar filtros" : "Mostrar filtros"}
            >
                {isOpen ? (
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                ) : (
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                )}
            </button>

            <div className="sidebar-content-wrapper">
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
            </div>
        </aside>
    );
};

export default FilterSidebar;