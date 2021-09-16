import React from 'react';
import { Header, Navbar } from '../../components';
import { headerItems, navItems } from './helpers';
import styles from './Store.module.css';

const {
  main, nav, content, footer,
} = styles;

const Store = () => (
  <main className={main}>
    <Header headerItems={headerItems} />
    <Navbar className={nav} navItems={navItems} />
    <section className={content}>
      <aside>categorias</aside>
      <article>cinza</article>
      <article>texto</article>
    </section>
    <footer className={footer}>footer</footer>
  </main>
);

export default Store;
