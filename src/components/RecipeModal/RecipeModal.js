import React from 'react';
import './RecipeModal.css'; // Import your CSS for modal styling
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const RecipeModal = ({ isOpen, onClose, card }) => {
  if (!isOpen || !card) return null;

  // Render modal content here
  return (
    <Modal show={isOpen} onHide={onClose} size="lg">
      <Modal.Header className="custom-modal-header">
        <Modal.Title>
          <h1 className='modal-title'>
            {card.title}
          </h1>
          <h4 className='modal-description'>{
            card.description}
          </h4>
          <div className="custom-close-button" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes}/>
            <span className="hover-overlay"></span> {/* Overlay for hover effect */}
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 style={{ marginTop: '10px'}}>Ingredients:</h3>
          <ul>
            {card.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        <h3>Directions:</h3>
        <p>{card.instructions}</p>
      </Modal.Body>
    </Modal>
  );
};

export default RecipeModal;