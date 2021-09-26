import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendUserInfo } from '../../redux/actions';
import styles from './Form.module.css';
import Input from '../Input';

const Form = ({
  setShowForm,
  showTitles,
}) => {
  const {
    article, form, infos, infosLi, wrapper,
  } = styles;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState({
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    email: user.email || '',
    password: user.password || '',
    phone: user.phone || '',
    address: user.address || '',
    zipcode: user.zipcode || '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // NOTE Dispatch de userActions.js no onClick
  return (
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
                {showTitles
                  ? (
                    <>
                      <span>
                        {verifyTitle[state]}
                      </span>
                      <span>
                        {value}
                      </span>
                    </>
                  )
                  : value}
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
          Confirmar
        </button>
      </section>
    </article>
  );
};

Form.defaultProps = {
  showTitles: true,
  setShowForm: null,
};

Form.propTypes = {
  setShowForm: PropTypes.func,
  showTitles: PropTypes.bool,
};

export default Form;
