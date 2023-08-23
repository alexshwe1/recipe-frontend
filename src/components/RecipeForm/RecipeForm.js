// RecipeForm.js
import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './RecipeForm.css';

const RecipeForm = ({ showModal, handleClose, handleSubmit }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Dinner');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState('');
  const [minutesToCook, setMinutesToCook] = useState(0);

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = value;
    setIngredients(updatedIngredients);
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header className="custom-modal-header">
        <Modal.Title>
          <h1 className='modal-title'>Create New Recipe</h1>
          <div className="custom-close-button-form" onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} />
            <span className="hover-overlay-form"></span> {/* Overlay for hover effect */}
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => handleSubmit(e, { title, category, description, ingredients, instructions, minutesToCook })}>
          <Form.Group controlId="recipeTitle">
            <h5 className="form-title">Recipe Title</h5>
            <Form.Control
              type="text"
              placeholder="Enter recipe title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="recipeCategory">
            <h5 className="form-title">Category</h5>
            <Form.Control
              as="select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Dinner">Dinner</option>
              <option value="Dessert">Dessert</option>
              <option value="Snack">Snack</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="recipeDescription">
            <h5 className="form-title">Description</h5>
            <Form.Control
              as="textarea"
              placeholder="Enter recipe description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="recipeIngredients">
            <h5 className="form-title">Ingredients</h5>
            {ingredients.map((ingredient, index) => (
              <Form.Control
                key={index}
                type="text"
                placeholder={`Enter ingredient ${index + 1}`}
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
              />
            ))}
            <Button variant="outline-primary" onClick={() => setIngredients([...ingredients, ''])}>
              Add Ingredient
            </Button>
          </Form.Group>
          <Form.Group controlId="recipeInstructions">
            <h5 className="form-title">Instructions</h5>
            <Form.Control
              as="textarea"
              placeholder="Enter recipe instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="recipeMinutesToCook">
            <h5 className="form-title">Minutes to Cook</h5>
            <Form.Control
              type="number"
              placeholder="Enter minutes to cook"
              value={minutesToCook}
              onChange={(e) => setMinutesToCook(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="recipeSubmit">
            <Button variant="primary" type="submit" className="submit-button">
              Create Recipe
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RecipeForm;

