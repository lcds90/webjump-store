import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const {
  header, isDark, isLight, links,
} = styles;

const Header = () => (
  <header className={`${header} ${isLight}`}>
    <Link className={links} to="/login">Acesse sua conta</Link>
    ou
    <Link className={links} to="/join">Cadastre-se</Link>
  </header>
);

export default Header;
