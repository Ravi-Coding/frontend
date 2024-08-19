import React from 'react';
import './card.css';

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="cta-button">Learn More</button>
    </div>
  );
};

export default Card;
