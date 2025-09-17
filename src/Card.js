// src/components/Card.js
import React from 'react';
import './Card.css';


const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {/* <button className="card-button">Learn More</button> */}
      </div>
    </div>
  );
};

export default Card;
