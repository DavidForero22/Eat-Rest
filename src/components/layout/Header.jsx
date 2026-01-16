import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <a href="/" className="logo">
                    Eat<span>&</span>Rest
                </a>
                <nav className="nav-links">
                    <a href="#" title="Volver al inicio">Inicio</a>
                    <a href="#" title="Buscar locales">Locales</a>
                    <a href="#" title="Contacta con nosotros">Contacto</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;