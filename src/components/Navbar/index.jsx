import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './Navbar.module.css';
import useCategories from '../../hooks/useCategories';
import { sendSelectedFilter, toggleNavbar } from '../../redux/actions';

const {
  article, hidden, nav, selected, closeNavbar,
} = styles;

const Navbar = () => {
  const { pathname } = useLocation();
  const { showNavbar } = useSelector((state) => state.user);
  const [statePath, verifyPath] = useState('');
  const [statusNavbar, toggleStatusNavbar] = useState(showNavbar);

  const {
    categories, loading, error,
  } = useCategories();
  const dispatch = useDispatch();

  useEffect(() => {
    verifyPath(pathname);
  }, [pathname]);

  useEffect(() => {
    dispatch(toggleNavbar());
  }, [dispatch, statusNavbar]);

  const resetFilter = () => {
    dispatch(sendSelectedFilter({ key: '', value: '' }));
  };

  const renderNavbar = () => (
    <>
      <AiOutlineClose className={closeNavbar} onClick={() => toggleStatusNavbar(!statusNavbar)} size="2em" />
      <article className={statePath === '/' ? selected : article}>
        <Link onClick={resetFilter} to="/">Página Inicial</Link>
      </article>
      {categories.map(({ name, path }) => (
        <article key={path} className={statePath.includes(path) ? selected : article}>
          <Link onClick={resetFilter} to={`/store/${path}`}>{name}</Link>
        </article>
      ))}
      <article className={statePath.includes('contact') ? selected : article}>
        <Link onClick={resetFilter} to="/contact">Contato</Link>
      </article>
      <article className={statePath.includes('cart') ? selected : article}>
        <Link onClick={resetFilter} to="/cart"> Carrinho </Link>
      </article>
    </>
  );

  if (error) return <div>Houve algum erro</div>;
  return (
    <nav className={showNavbar ? nav : hidden}>
      {loading ? 'Carregando' : renderNavbar()}
    </nav>
  );
};

export default Navbar;
