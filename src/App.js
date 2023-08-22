import React from 'react';
import CardList from './components/CardList/CardList';
import './App.css';
import './components/Card/Card.js'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <h1>Recipes</h1>
      <CardList />
    </div>
  );
}

export default App;
