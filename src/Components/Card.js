import React from "react";
import "./Card.css";

const Card = ({ article }) => {
    return (
        
        <div className="card">
            <img src={article.image} alt={article.title} className="card-img" />
            <div className="card-content">
                <h3 className="card-title">{article.title}</h3>
                <p className="card-description">{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="card-link">
                    Read More
                </a>
            </div>
        </div>
    );
};

export default Card;