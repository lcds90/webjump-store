import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Store } from './pages';
import './App.css';

const App = () => (
  <Switch>
    <Route path="/store/:id" component={Store} />
    <Route path="/store" component={Store} />
    <Route path="/" component={Login} />
  </Switch>
);

export default App;
