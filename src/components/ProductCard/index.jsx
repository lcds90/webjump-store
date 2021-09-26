import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import style from './ProductCard.module.css';
import { addProduct, deleteProduct } from '../../redux/actions';

const ProductCard = ({
  product,
}) => {
  const {
    productItem, containerPrice, offer, stylePrice,
  } = style;
  const {
    image, name, price, sku, specialPrice,
  } = product;

  const dispatch = useDispatch();
  const { selected } = useSelector((state) => state.products);
  const isSelected = selected.includes(product);

  return (
    <article className={productItem} key={sku}>
      <div>
        <img src={`/${image}`} alt={`Imagem do produto ${name}`} />
      </div>
      <div>{name}</div>
      <div className={containerPrice}>
        { specialPrice
          ? (
            <>
              <span className={offer}>{`R$ ${specialPrice}`}</span>
              <span className={stylePrice}>{`R$ ${price.toFixed(2)}`}</span>
            </>
          )
          : (<span className={stylePrice}>{`R$ ${price.toFixed(2)}`}</span>)}
      </div>
      <div>
        <button
          onClick={() => (
            isSelected
              ? dispatch(deleteProduct(product))
              : dispatch(addProduct(product))
          )}
          type="button"
        >
          {isSelected ? 'Remover' : 'Comprar'}
        </button>
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
    specialPrice: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
