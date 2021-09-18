import React from 'react';
import { Categories, Header, Navbar } from '../../components';
import styles from './Login.module.css';

const { main, content, footer } = styles;

const Login = () => (
  <section className={content}>
    <Categories />
    <article>cinza</article>
    <article>
      <h1>Seja bem vindo</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        malesuada est turpis, mattis ultricies libero fermentum vel. Donec
        dapibus metus non dictum fringilla. Donec nec maximus tellus, eget
        vulputate enim. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Cras tincidunt ullamcorper lacinia.
        Proin tellus turpis, ornare a viverra sed, pulvinar sit amet nisi.
        Aliquam accumsan purus at lectus imperdiet auctor. Duis ut ultrices
        lacus. Cras iaculis imperdiet arcu vel ultricies. Sed rutrum velit
        tortor, laoreet iaculis ligula venenatis ullamcorper.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        malesuada est turpis, mattis ultricies libero fermentum vel. Donec
        dapibus metus non dictum fringilla. Donec nec maximus tellus, eget
        vulputate enim. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Cras tincidunt ullamcorper lacinia.
        Proin tellus turpis, ornare a viverra sed, pulvinar sit amet nisi.
        Aliquam accumsan purus at lectus imperdiet auctor. Duis ut ultrices
        lacus. Cras iaculis imperdiet arcu vel ultricies. Sed rutrum velit
        tortor, laoreet iaculis ligula venenatis ullamcorper.
      </p>
    </article>
    <footer className={footer}>footer</footer>
  </section>
);

export default Login;
