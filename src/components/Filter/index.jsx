import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { sendSelectedFilter } from '../../redux/actions';
import styles from './Filter.module.css';

const AsideFilters = () => {
  const { aside, li, ul } = styles;
  const [selectedFilter, setSelectedFilter] = useState('');
  const dispatch = useDispatch();
  const {
    filters, error, items, loading,
  } = useSelector(
    (state) => state.products,
  );

  useEffect(() => {
    dispatch(sendSelectedFilter(selectedFilter));
  }, [selectedFilter]);

  // pega as chaves correspondentes
  const getFilterKeys = filters.reduce((acc, filter) => {
    const entries = [...Object.keys(filter), ...acc];
    return entries;
  }, []);

  // LINK https://stackoverflow.com/a/16643074
  // o reduce ira retornar somente o filtro que corresponde com a chave valida
  const getFilteredValueFromProducts = getFilterKeys.reduce(
    (arr, condition) => {
      // filtro de itens
      const valueFilters = items.map(({ filter }) => filter.map((filterValue) => {
        const verifyKey = Object.prototype.hasOwnProperty.call(
          filterValue,
          condition,
        );
        if (verifyKey) return filterValue[condition];
        return null;
      }));
      const filter = [...valueFilters, ...arr];
      return filter;
    },
    [],
  );

  const renderFilters = () => (
    <ul className={ul}>
      <li className={li}>
        {filters.map((filter) => {
          const values = Object.entries(filter);
          const filteredValues = Array.prototype.concat.apply(
            [],
            getFilteredValueFromProducts,
          );
          const uniqueValues = [...new Set(filteredValues)];
          return (
            <section>
              {values.map((filterValue) => (
                <article>
                  {`Filtar por ${filterValue[1]}`}
                  <select
                    onChange={({ target: { value } }) => setSelectedFilter({ key: filterValue[0], value })}
                  >
                    {uniqueValues.map((value) => (
                      <option>{value}</option>
                    ))}
                  </select>
                </article>
              ))}
            </section>
          );
        })}
      </li>
      <li>
        <button
          type="button"
          onClick={() => setSelectedFilter({ key: '', value: '' })}
        >
          Resetar
        </button>
      </li>
    </ul>
  );

  if (error) return <div>Houve algum erro</div>;

  return (
    <aside className={aside}>{loading ? 'Carregando' : renderFilters()}</aside>
  );
};

AsideFilters.propTypes = {};

export default AsideFilters;
