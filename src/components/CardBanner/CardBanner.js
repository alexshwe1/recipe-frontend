import React from 'react';
import './CardBanner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIceCream, faBurger, faPizzaSlice, faUtensils } from '@fortawesome/free-solid-svg-icons';

const CardBanner = ({ category }) => {
  // Determine the banner color based on the category
  let rectangleColor = '';
  let circleColor = '';
  let icon = null;

  switch (category) {
    case 'Snack':
      rectangleColor = '#87E285'; // Green
      circleColor = '#41D83E'; // Green
      icon = faPizzaSlice;
      break;
    case 'Dinner':
      rectangleColor = '#9FCBFF'; // Blue
      circleColor = '#5BA7FF'; // Blue
      icon = faBurger;
      break;
    case 'Dessert':
      rectangleColor = '#FF9F9F'; // Pink
      circleColor = '#FF7373'; // Pink
      icon = faIceCream;
      break;
    default:
      rectangleColor = '#9C27B0'; // Purple (Default)
      circleColor = '#9C27B0'; // Purple (Default)
      icon = faUtensils;
      break;
  }

  return (
    <div className="card-banner">
      <FontAwesomeIcon icon={icon} className="icon" />
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none" style={{ zIndex: 2 }}>
        <circle cx="35" cy="35" r="35" fill={circleColor}/>
      </svg>
      <div className="category-text">{category}</div>
      <svg xmlns="http://www.w3.org/2000/svg" width="210" height="40" viewBox="0 0 211 47" fill="none">
        <path d="M0 20C0 8.95431 8.95431 0 20 0H191C202.046 0 211 8.95431 211 20V27C211 38.0457 202.046 47 191 47H20C8.9543 47 0 38.0457 0 27V20Z" fill={rectangleColor} />
      </svg>
    </div>
  );
};

export default CardBanner;