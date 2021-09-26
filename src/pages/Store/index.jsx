import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Filter, ProductCard } from '../../components';
import styles from './Store.module.css';
import { getAllProducts, getProducts } from '../../redux/actions';

const {
  main, content, footer, list, listContainer, listTitle, productItem,
} = styles;

const Store = () => {
  const { id } = useParams();
  const verifyId = {
    camisetas: 'Camisetas',
    calcas: 'Calças',
    calcados: 'Calçados',
  };
  const dispatch = useDispatch();
  const {
    error, items, loading, selectedFilter,
  } = useSelector((state) => state.products);
  useEffect(() => {
    if (id) dispatch(getProducts(id));
    else dispatch(getAllProducts());
  }, [id]);
  const { key, value } = selectedFilter;
  const filteredItems = items.filter(({ filter }) => filter.some((opt) => opt[key] === value));
  return (
    <section className={content}>
      <Filter />
      <article className={listContainer}>
        <section>
          <h2 className={listTitle}>{verifyId[id]}</h2>
          Ordernar por
        </section>
        <section className={list}>
          {selectedFilter && !(key === '' && value === '')
            ? filteredItems.map((product) => <ProductCard key={product.name} product={product} />)
            : items.map((product) => <ProductCard key={product.name} product={product} />)}
        </section>
      </article>
      <footer className={footer} />
    </section>
  );
};

export default Store;
