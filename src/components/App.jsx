import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './App.scss';

import HomePage from 'components/pages/HomePage';
import ContactsPage from 'components/pages/ContactsPage';

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={ () => <Redirect to="home" /> } />

      <Switch>
        <Route path="/home" component={ () => (<HomePage />)} />
        <Route path="/contacts" component={ () => (<ContactsPage /> )} />
      </Switch>

    </div>
  );
}

export default App;
