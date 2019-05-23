import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Navigation from 'components/shared/Navigation';

import './App.scss';

import HomePage from 'components/pages/HomePage/HomePage';
import StickyPage from 'components/pages/StickyPage/StickyPage';

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={ () => <Redirect to="home" /> } />

      <Switch>
        <Route path="/home" component={ () => (<HomePage />)} />
        <Route path="/sticky" component={ () => (<StickyPage /> )} />
      </Switch>

      <Navigation />

    </div>
  );
}

export default App;
