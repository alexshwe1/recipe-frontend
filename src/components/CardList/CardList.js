// CardList.js
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import RecipeModal from '../RecipeModal/RecipeModal';
import './CardList.css'

const CardList = () => {
    const [recipes, setRecipes] = useState([]);

    const [selectedCard, setSelectedCard] = useState(null)

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardSelect = async (card) => {
      await setSelectedCard(card);
    }

    const handleClose = async () => {
      await setSelectedCard(null)
    }
  
    useEffect(() => {
      fetchData();
    }, []);


    useEffect(() => {
      if (selectedCard !== null) {
        setIsModalOpen(true);
      } else {
        setIsModalOpen(false);
      }
    }, [selectedCard]);
    
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
    <div>
      <div className="card-list">
        {recipes.map(card => (
          <Card
            key={card._id}
            card={card}
            onClick={() => {
              handleCardSelect(card);
            }}
          />
        ))}
      </div>
      <RecipeModal
        isOpen={isModalOpen}
        onClose={handleClose}
        card={selectedCard}
      />
    </div>
  );
};

export default CardList;