import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Filter.module.css';
import useCategories from '../../hooks/useCategories';

const AsideCategories = () => {
  const { aside, li, ul } = styles;
  const {
    categories, loading, error,
  } = useCategories();
  const renderCategories = () => (
    <ul className={ul}>
      <li className={li}>
        <Link to="/">Página Inicial</Link>
      </li>
      {categories.map(({ name, path }) => (
        <li key={path} className={li}>
          <Link to={`/store/${path}`}>{name}</Link>
        </li>
      ))}
      <li className={li}>
        <Link to="/contact">Contato</Link>
      </li>
    </ul>
  );

  if (error) return <div>Houve algum erro</div>;

  return (
    <aside className={aside}>
      {loading ? 'Carregando' : renderCategories()}
    </aside>
  );
};

AsideCategories.propTypes = {

};

export default AsideCategories;
