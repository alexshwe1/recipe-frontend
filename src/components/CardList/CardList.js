// CardList.js
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';

const CardList = () => {
    const [recipes, setRecipes] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
    
    async function fetchData() {
      try {
        const response = await fetch('https://us-east-1.aws.data.mongodb-api.com/app/recipeapi-rnans/endpoint/recipes');
        const data = await response.json();
        setRecipes(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

  return (
    <div className="card-list">
      {recipes.map(card => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardList;