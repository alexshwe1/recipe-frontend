import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import RecipeForm from '../RecipeForm/RecipeForm';
import './PageHeader.css';

const PageHeader = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = async (event, formData) => {
    event.preventDefault();
    handleClose();

    try {
      const response = await fetch('https://us-east-1.aws.data.mongodb-api.com/app/recipeapi-rnans/endpoint/recipe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        window.location.reload();
        // Handle successful response
      } else {
        // Handle error response
      }
    } catch (error) {
      // Handle fetch error
    }
  };

  return (
    <div className="page-header">
      <h1 className='page-title'>RecipeCards</h1>
      <div className="add-icon-container">
        <FaPlus className="add-icon" onClick={handleShow} />
      </div>

      <RecipeForm showModal={showModal} handleClose={handleClose} handleSubmit={handleSubmit} />
    </div>
  );
}

export default PageHeader;