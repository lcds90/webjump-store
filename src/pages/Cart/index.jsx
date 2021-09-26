import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Categories, Form, Input, ProductCard,
} from '../../components';
import styles from './Cart.module.css';

const {
  content, editInfos, footer, itemsList, showInfoStyle, wrapperForm, wrapperFormBackground,
} = styles;

const Login = () => {
  const [showForm, setShowForm] = useState(false);
  const user = useSelector((state) => state.user);
  const { selected } = useSelector((state) => state.products);
  return (
    <section className={content}>
      <article className={showInfoStyle}>
        <ul>
          {Object
            .entries(user)
            .filter((info) => info[0] !== 'showNavbar')
            .map((info) => {
              const state = info[0];
              const value = info[1];
              const verifyTitle = {
                firstName: 'Nome',
                lastName: 'Sobrenome',
                email: 'E-mail',
                password: 'Senha',
                phone: 'Telefone',
                address: 'Endereço',
                zipcode: 'CEP',
              };
              return <li>{`${verifyTitle[state]}: ${value || 'Não cadastrado'}`}</li>;
            })}
        </ul>
        <h2>
          <button
            className={editInfos}
            type="button"
            onClick={() => setShowForm(true)}
          >
            Editar informações cadastradas
          </button>
        </h2>
        <div
          onClickCapture={() => setShowForm(false)}
          className={showForm ? wrapperFormBackground : null}
          style={showForm ? { display: 'block' } : { display: 'none' }}
        />
        <div
          className={showForm ? wrapperForm : null}
          style={showForm ? { display: 'block' } : { display: 'none' }}
        >
          <Form showTitles={false} setShowForm={setShowForm} />
        </div>
      </article>
      <article className={itemsList}>
        {selected.map((product) => <ProductCard product={product} />)}
      </article>
      <footer className={footer} />
    </section>
  );
};

export default Login;
