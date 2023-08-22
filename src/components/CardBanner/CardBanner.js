import React from 'react';
import './CardBanner.css';

const CardBanner = ({ title, description }) => {
  return (
    <div className="card-banner">
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none" style={{ zIndex: 2 }}>
        <circle cx="35" cy="35" r="35" fill="#FF7373" />
      </svg>
      <div className="category-text">Category</div>
      <svg xmlns="http://www.w3.org/2000/svg" width="210" height="40" viewBox="0 0 211 47" fill="none">
        <path d="M0 20C0 8.95431 8.95431 0 20 0H191C202.046 0 211 8.95431 211 20V27C211 38.0457 202.046 47 191 47H20C8.9543 47 0 38.0457 0 27V20Z" fill="#FF9F9F" />
      </svg>
    </div>
  );
};

export default CardBanner;