import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Cart, Login, Store } from './pages';
import { Header, Navbar } from './components';
import styles from './App.module.css';
const {
  main, content, footer, list, listContainer, listTitle, productItem,
} = styles;

const App = () => (
  <main className={main}>
    <Header />
    <Navbar />
    <Switch>
      <Route path='/store/:id' component={Store} />
      <Route path='/store' component={Store} />
      <Route path='/cart' component={Cart} />
      <Route path='/' component={Login} />
    </Switch>
  </main>
);

export default App;
