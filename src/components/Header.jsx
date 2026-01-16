import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <Link to="/" className="logo">
                    Eat<span>&</span>Rest
                </Link>
                <nav className="nav-links">
                    <Link to="/">Inicio</Link>
                    <Link to="/locales">Locales</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;