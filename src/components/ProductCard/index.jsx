import React from 'react';
import PropTypes from 'prop-types';
import style from './ProductCard.module.css';

const { productItem } = style;
const ProductCard = ({
  product: {
    image, name, price, sku,
  },
}) => {
  const addItemToCart = () => {};
  return (
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
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    sku: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
