import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Categories, Form, Input,
} from '../../components';
import styles from './Login.module.css';
import welcomeMessage from './helpers';

const {
  content, footer, login,
} = styles;

const Login = () => {
  const [showForm, setShowForm] = useState(false);
  const renderLogin = () => (
    <article className={login}>
      <h1>
        {`${welcomeMessage()}, seja bem vindo!`}
      </h1>
      <p>
        <button onClick={() => setShowForm(true)} type="button">Acesse sua conta</button>
        ou
        <button onClick={() => setShowForm(true)} type="button">Cadastre-se</button>
      </p>
    </article>
  );
  return (
    <section className={content}>
      <Categories />
      {showForm ? <Form setShowForm={setShowForm} /> : renderLogin()}
      <article>
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
      <footer className={footer} />
    </section>
  );
};

export default Login;
