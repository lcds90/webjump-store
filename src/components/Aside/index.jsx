import React from 'react';
import { Link } from 'react-router-dom';
import useCategories from '../../hooks/useCategories';
import styles from './Aside.module.css';

const Categories = () => {
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
        <li className={li}>
          <Link to={path}>{name}</Link>
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

Categories.propTypes = {

};

export default Categories;
