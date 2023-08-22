import React from 'react';
import "./Card.css";
import CardBanner from "../CardBanner/CardBanner"

const Card = ({ title, description  }) => {
  return (
    <div className='card-container'>
      <div className='banner'>
        <CardBanner/>
      </div>
      <h1 className='card-title'>{title}</h1>
      <h5 className='card-description'>{description}</h5>
    </div>
  );
};

export default Card;