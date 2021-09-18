import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Filter.module.css';

const AsideCategories = () => {
  const { aside, li, ul } = styles;
  const dispatch = useDispatch();
  const {
    filters, error, items, loading,
  } = useSelector(
    (state) => state.products,
  );

  // pega as chaves correspondentes
  const getFilterKeys = filters.reduce((acc, filter) => {
    const entries = [...Object.keys(filter), ...acc];
    return entries;
  }, []);

  // LINK https://stackoverflow.com/a/16643074
  // o reduce ira retornar somente o filtro que corresponde com a chave valida
  const getFilteredValueFromProducts = getFilterKeys.reduce((arr, condition) => {
    // filtro de itens
    const valueFilters = items
      .map(({ filter }) => filter
        .map((filterValue) => {
          const verifyKey = Object.prototype.hasOwnProperty.call(filterValue, condition);
          if (verifyKey) return filterValue[condition];
          return null;
        }));
    const filter = [...valueFilters, ...arr];
    return filter;
  }, []);

  const renderFilters = () => (
    <ul className={ul}>
      <li className={li}>
        {filters.map((filter) => {
          const values = Object.values(filter);
          const filteredValues = Array.prototype.concat.apply([], getFilteredValueFromProducts);
          const uniqueValues = [...new Set(filteredValues)];
          return (
            <section>
              {values.map((value) => (
                <article>
                  {`Filtar por ${value}`}
                </article>
              ))}
              <select name="" id="">
                {uniqueValues.map((value) => <option>{value}</option>)}
              </select>
            </section>
          );
        })}
      </li>
      {/* {categories.map(({ name, path }) => (
        <li key={path} className={li}>
          <Link to={`/store/${path}`}>{name}</Link>
        </li>
      ))} */}
      <li className={li}>
        <Link to="/contact">Contato</Link>
      </li>
    </ul>
  );

  if (error) return <div>Houve algum erro</div>;

  return (
    <aside className={aside}>
      {loading ? 'Carregando' : renderFilters()}
    </aside>
  );
};

AsideCategories.propTypes = {};

export default AsideCategories;
