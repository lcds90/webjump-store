import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import useCategories from '../../hooks/useCategories';

const { article, nav, selected } = styles;

const Navbar = () => {
  const { pathname } = useLocation();
  const [statePath, verifyPath] = useState('');
  const {
    categories, loading, error,
  } = useCategories();

  useEffect(() => {
    verifyPath(pathname);
  }, [pathname]);

  const renderCategories = () => (
    <>
      <article className={statePath === '/' ? selected : article}>
        <Link to="/">Página Inicial</Link>
      </article>
      {categories.map(({ name, path }) => (
        <article key={path} className={statePath.includes(path) ? selected : article}>
          <Link to={`/store/${path}`}>{name}</Link>
        </article>
      ))}
      <article className={statePath.includes('contact') ? selected : article}>
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
