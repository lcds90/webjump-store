import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Aside, Header, Navbar } from '../../components';
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
    error, filters, items, loading, selected,
  } = useSelector(
    (state) => state.products,
  );
  useEffect(() => {
    if (id) dispatch(getProducts(id));
    else dispatch(getAllProducts());
  }, [id]);

  return (
    <section className={content}>
      <Aside />
      <article className={listContainer}>
        <h2 className={listTitle}>{verifyId[id]}</h2>
        <section className={list}>
          {items.map(({
            sku, path, name, image, price,
          }) => (
            <article className={productItem} key={sku}>
              <div>
                <img src={`/${image}`} alt={`Imagem do produto ${name}`} />
              </div>
              <div>{name}</div>
              <div>{`R$ ${price.toFixed(2)}`}</div>
              <div>
                <button type="button">Comprar</button>
              </div>
            </article>
          ))}
        </section>
      </article>
      <footer className={footer}>footer</footer>
    </section>
  );
};

export default Store;
