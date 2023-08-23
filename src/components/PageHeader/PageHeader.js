import React from 'react';
import './PageHeader.css';
import { FaPlus } from 'react-icons/fa'; // Import the plus icon from react-icons/fa

const PageHeader = () => {
  return (
    <div className="page-header">
      <h1 className='page-title'>RecipeCards</h1>
      <div className="add-icon-container">
        <FaPlus className="add-icon" />
      </div>
    </div>
  );
}

export default PageHeader;