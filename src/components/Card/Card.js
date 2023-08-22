import React from 'react';
import "./Card.css";
import CardBanner from "../CardBanner/CardBanner"

const Card = ({ title, description, category  }) => {
  return (
    <div className='card-container'>
      <div className='banner'>
        <CardBanner
          category={category}
        />
      </div>
      <h1 className='card-title'>{title}</h1>
      <h5 className='card-description'>{description}</h5>
    </div>
  );
};

export default Card;