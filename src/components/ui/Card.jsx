import React from 'react';
import cardLayout from '../../assets/img-layout.png';

const Card = ({ title, image, description, link }) => {
    
    // Función segura para truncar texto y evitar descripciones kilométricas
    const createMarkup = (html) => {
        return { __html: html };
    };

    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="card" title={title}>
            <div className="card-img-container">
                <img 
                    className="card-img" 
                    src={image} 
                    alt={title} 
                    onError={(e) => {
                        e.target.onError = null;
                        e.target.src = cardLayout;
                    }}
                />
            </div>
            
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <div 
                    className="card-desc"
                    dangerouslySetInnerHTML={createMarkup(description)}
                />
                <div className="card-cta">
                    Reservar / Ver más
                </div>
            </div>
        </a>
    );
};

export default Card;