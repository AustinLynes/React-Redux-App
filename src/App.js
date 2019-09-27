import React from 'react';

import './App.scss';
import CardList from './components/CardList';
import Nav from './components/Nav';
import Home from './components/Home';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path='/' component={Home} />
      <Route exact path='/cards' component={CardList} />
    </div>
  );
}

export default App;
