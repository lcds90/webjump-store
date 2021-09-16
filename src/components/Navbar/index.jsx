import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import useCategories from '../../hooks/useCategories';

const { article, nav } = styles;

const Navbar = () => {
  const {
    categories, selected, loading, error,
  } = useCategories();

  const renderCategories = () => (
    <>
      <article className={article}>
        <Link to="/">Página Inicial</Link>
      </article>
      {categories.map(({ name, path }) => (
        <article className={article}>
          <Link to={`/store/${path}`}>{name}</Link>
        </article>
      ))}
      <article className={article}>
        <Link to="/contact">Contato</Link>
      </article>
    </>
  );

  if (error) return <div>Houve algum erro</div>;

  return (
    <nav className={nav}>
      {loading ? 'Carregando' : renderCategories()}
    </nav>
  );
};

const { arrayOf, shape, string } = PropTypes;

Navbar.propTypes = {
  className: string.isRequired,
  navItems: arrayOf(shape({ name: string, link: string })).isRequired,
};

export default Navbar;
