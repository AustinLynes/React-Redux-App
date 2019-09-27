import React from 'react';

import './App.scss';
import CardList from './components/CardList';
import Nav from './components/Nav';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import SetList from './components/SetList';
function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path='/' component={Home} />
      <Route exact path='/cards' component={CardList} />
      <Route exact path='/sets' component={SetList} />
    </div>
  );
}

export default App;
