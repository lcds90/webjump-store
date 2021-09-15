import React from 'react'
import { Route, Switch } from 'react-router';
import { Login, Store } from './pages';
import './App.css';
const App = () => {

    return (
      <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/carteira" component={ Store } />
    </Switch>
    )
}

export default App;