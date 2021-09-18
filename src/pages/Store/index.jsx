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
  const { error, items, loading } = useSelector((state) => state.products);
  useEffect(() => {
    if (id) dispatch(getProducts(id));
    else dispatch(getAllProducts());
  }, [id]);

  return (
    <section className={content}>
      <Filter />
      <article className={listContainer}>
        <section>
          <h2 className={listTitle}>{verifyId[id]}</h2>
          Ordernar por
        </section>
        <section className={list}>
          {items.map((product) => (
            <ProductCard product={product} />
          ))}
        </section>
      </article>
      <footer className={footer}>footer</footer>
    </section>
  );
};

export default Store;
