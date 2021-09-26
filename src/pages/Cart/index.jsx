import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Categories, Form, Input,
} from '../../components';
import styles from './Cart.module.css';

const {
  content, footer, login,
} = styles;

const Login = () => {
  const [showForm, setShowForm] = useState(false);
  const user = useSelector((state) => state.user);
  return (
    <section className={content}>
      <article>
        <h2>
          <button
            style={showForm ? { display: 'none' } : { display: 'block' }}
            type="button"
            onClick={() => setShowForm(true)}
          >
            Editar informações cadastradas
          </button>
        </h2>
        <div style={showForm ? { display: 'block' } : { display: 'none' }}>
          <Form showTitles={false} setShowForm={setShowForm} />
        </div>
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
      </article>
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
