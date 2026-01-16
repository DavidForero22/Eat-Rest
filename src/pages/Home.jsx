import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

            {/* Hero Section */}
            <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', lineHeight: 1.1 }}>
                    Eat<span style={{ color: 'var(--color-orange)' }}>&</span>Rest
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '700px', margin: '0 auto 2rem auto' }}>
                    La plataforma integral para descubrir la gastronomía y el descanso en Murcia y Zaragoza.
                </p>
                <Link
                    to="/locales"
                    style={{
                        backgroundColor: 'var(--color-orange)',
                        color: 'white',
                        padding: '1rem 2rem',
                        borderRadius: 'var(--radius)',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        boxShadow: 'var(--shadow-soft)'
                    }}
                >
                    Explorar Locales
                </Link>
            </section>

            {/* Propósito y Alcance */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                <div className="card" style={{ padding: '2rem' }}>
                    <h2 style={{ marginBottom: '1rem', borderBottom: '2px solid var(--color-orange)', display: 'inline-block' }}>Propósito</h2>
                    <p style={{ lineHeight: '1.6', color: 'var(--color-dark-gray)' }}>
                        Proporcionar información en tiempo real de restaurantes y alojamientos.
                        Permitimos consultar, valorar y reservar de manera centralizada buscando por cercanía, valoración y tipo de comida.
                    </p>
                </div>

                <div className="card" style={{ padding: '2rem' }}>
                    <h2 style={{ marginBottom: '1rem', borderBottom: '2px solid var(--color-orange)', display: 'inline-block' }}>Para Turistas</h2>
                    <p style={{ lineHeight: '1.6', color: 'var(--color-dark-gray)' }}>
                        La herramienta ideal para quienes visitan la comunidad. Consulta disponibilidad,
                        realiza reservas directas y comparte tu experiencia con otros usuarios mediante nuestro sistema de valoraciones.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Home;