import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/logo-webjump.png';

const {
  container, top, isDarkTop, isLightTop, label, links, searchAndLogo, isDarkSearch, isLightSearch,
} = styles;

const Header = () => (
  <header className={container}>
    <section className={`${top} ${isLightTop}`}>
      <Link className={links} to="/login">
        Acesse sua conta
      </Link>
      ou
      <Link className={links} to="/join">
        Cadastre-se
      </Link>
    </section>
    <section className={`${searchAndLogo} ${isLightSearch}`}>
      <div>
        <img src={logo} alt="Logo Webjump" />
        <span>More than just a platform</span>
      </div>
      <label className={label} htmlFor="search">
        <input type="text" id="search" />
        <button type="submit">BUSCAR</button>
      </label>
    </section>
  </header>
);

export default Header;
