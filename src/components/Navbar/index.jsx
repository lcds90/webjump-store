import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import styles from './Navbar.module.css';
import useCategories from '../../hooks/useCategories';

const { article, nav, selected } = styles;

const Navbar = () => {
  const { location: { pathname } } = useHistory();
  const { id } = useParams();
  const {
    categories, loading, error,
  } = useCategories();

  const renderCategories = () => (
    <>
      <article className={!id && pathname === '/' ? selected : article}>
        <Link to="/">Página Inicial</Link>
      </article>
      {categories.map(({ name, path }) => (
        <article key={path} className={id === path ? selected : article}>
          <Link to={`/store/${path}`}>{name}</Link>
        </article>
      ))}
      <article className={!id && pathname === '/contact' ? selected : article}>
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

export default Navbar;
