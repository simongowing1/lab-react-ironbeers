import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Beers from './components/Beers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer'
import Navbar from './components/Navbar'
import SingleBeer from './components/SingleBeer'

function App() {
  return (
    <div>
    <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/beers' component={Beers} />
        <Route exact path='/beers/:id' component={SingleBeer} />
        <Route exact path='/random-beer' component={RandomBeer} />
        <Route exact path='/new-beer' component={NewBeer} />
    </Switch>
    </div>
  );
}

export default App;
