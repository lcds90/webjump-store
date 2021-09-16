import React from 'react';
import { Header, Navbar } from '../../components';
import styles from './Store.module.css';

const {
  main, content, footer,
} = styles;

const Store = () => (
  <main className={main}>
    <Header />
    <Navbar />
    <section className={content}>
      <aside>categorias</aside>
      <article>cinza</article>
      <article>texto</article>
      <footer className={footer}>footer</footer>
    </section>
  </main>
);

export default Store;
