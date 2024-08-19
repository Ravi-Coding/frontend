import React from 'react';
import Card from './card';
import './mainContent.css';

const MainContent = ({ cards }) => {
  return (
    <div className="main-content">
      {cards.map(card => (
        <Card key={card.id} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default MainContent;
