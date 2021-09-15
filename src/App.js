import React from 'react';
import { Route, Switch } from 'react-router';
import { Login, Store } from './pages';
import './App.css';
const App = () => {
  return (
    <Switch>
      <Route exact path='/store' component={Store} />
      <Route exact path='/' component={Login} />
    </Switch>
  );
};

export default App;
