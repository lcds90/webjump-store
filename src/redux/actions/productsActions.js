import {
  CART_ADD_PRODUCT,
  CART_DELETE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_FAIL,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  SELECT_FILTER,
} from './types';
import { fetchProductList } from '../../services';

export const addProduct = (payload) => ({
  type: CART_ADD_PRODUCT,
  payload,
});

export const deleteProduct = (payload) => ({
  type: CART_DELETE_PRODUCT,
  payload,
});

const productsFetch = () => ({
  type: GET_PRODUCTS,
});

const productsFetchSuccess = (payload) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload,
});

const productsFetchFail = () => ({
  type: GET_PRODUCTS_FAIL,
});

export const getProducts = (id) => (
  async (dispatch) => {
    dispatch(productsFetch());
    try {
      const { filters, items } = await fetchProductList(id);
      // return setTimeout(() => dispatch(productsFetchSuccess({ filters, items })), 1000);
      return dispatch(productsFetchSuccess({ filters, items }));
    } catch {
      return dispatch(productsFetchFail());
    }
  }
);

const productsAllFetch = () => ({
  type: GET_ALL_PRODUCTS,
});

const productsAllFetchSuccess = (payload) => ({
  type: GET_ALL_PRODUCTS_SUCCESS,
  payload,
});

const productsAllFetchFail = () => ({
  type: GET_ALL_PRODUCTS_FAIL,
});

export const sendSelectedFilter = (payload) => ({
  type: SELECT_FILTER,
  payload,
});

// IMPLEMENTANDO COM BUSCA
export const getAllProducts = () => (
  async (dispatch) => {
    dispatch(productsAllFetch());
    try {
      const filters = [];
      const items = [];
      const verifyId = {
        camisetas: '1',
        calcas: '2',
        calcados: '3',
      };
      Object.values(verifyId).reduce(async (promise, idValue) => {
        await promise;
        const contents = await fetchProductList(idValue);
        // console.log(contents);
      }, Promise.resolve());
      // return setTimeout(() => dispatch(productsFetchSuccess(items)), 1000);
      return dispatch(productsAllFetchSuccess({ filters, items }));
    } catch {
      return dispatch(productsAllFetchFail());
    }
  }
);
