import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Categories, Header, Input, Navbar,
} from '../../components';
import styles from './Login.module.css';
import welcomeMessage from './helpers';
import { sendUserInfo } from '../../redux/actions';

const {
  article, content, footer, form, infos, infosLi, login, wrapper,
} = styles;

const Login = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    zipcode: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // NOTE Dispatch de userActions.js no onClick
  const renderForm = () => (
    <article className={article}>
      <section className={wrapper}>
        <form className={form}>
          <Input
            name="firstName"
            label="Nome"
            onChange={handleChange}
            placeholder="Digite seu nome"
            value={userInfo.firstName}
          />
          <Input
            name="lastName"
            label="Sobrenome"
            onChange={handleChange}
            placeholder="Digite seu sobrenome"
            value={userInfo.lastName}
          />
          <Input
            name="email"
            label="E-mail"
            onChange={handleChange}
            placeholder="Digite seu e-mail"
            value={userInfo.email}
          />
          <Input
            name="password"
            label="Senha"
            onChange={handleChange}
            placeholder="Digite uma senha válida"
            value={userInfo.password}
          />
          <Input
            name="phone"
            label="Telefone"
            onChange={handleChange}
            placeholder="Digite um telefone para contato"
            value={userInfo.phone}
          />
          <Input
            name="address"
            label="Endereço"
            onChange={handleChange}
            placeholder="Digite seu endereço"
            value={userInfo.address}
          />
          <Input
            name="zipcode"
            label="CEP"
            onChange={handleChange}
            placeholder="Digite seu CEP"
            value={userInfo.zipcode}
          />
        </form>
      </section>
      <section className={infos}>
        <h2>Confirme suas informações</h2>
        <ul>
          {Object.entries(userInfo).map((info) => {
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
            /* TODO Implementações
            Implementar CEP com api, tera um input disabled mostrando o cep validado
            deixando o input de endereco somente com informacao que vim da api
            Campo de senha sera somente **** e tera um state para mostrar e ocultar
            */
            return (
              <li className={infosLi}>
                <span>
                  {verifyTitle[state]}
                </span>
                <span>
                  {value}
                </span>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => {
            setShowForm(false);
            dispatch(sendUserInfo(userInfo));
          }}
          type="button"
        >
          Entrar
        </button>
      </section>
    </article>
  );

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
      {showForm ? renderForm() : renderLogin()}
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
