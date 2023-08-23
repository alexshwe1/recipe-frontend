import React from 'react';
import CardList from './components/CardList/CardList';
import './App.css';
import './components/Card/Card.js'
import 'bootstrap/dist/css/bootstrap.css';
import PageHeader from './components/PageHeader/PageHeader';

function App() {
  return (
    <div className="App">
      <PageHeader />
      <CardList />
    </div>
  );
}

export default App;
