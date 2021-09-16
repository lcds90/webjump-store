/* TODO Thunk com API e Dispatch de login */

import { GET_CATEGORIES, GET_CATEGORIES_FAIL, GET_CATEGORIES_SUCCESS } from './types';
import { fetchCategories } from '../../services';

const categoriesFetch = () => ({
  type: GET_CATEGORIES,
});

const categoriesFetchSuccess = (payload) => ({
  type: GET_CATEGORIES_SUCCESS,
  payload,
});

const categoriesFetchFail = () => ({
  type: GET_CATEGORIES_FAIL,
});

export const getCategories = () => (
  async (dispatch) => {
    dispatch(categoriesFetch());
    try {
      const { items } = await fetchCategories();
      // return setTimeout(() => dispatch(categoriesFetchSuccess(items)), 1000);
      return dispatch(categoriesFetchSuccess(items));
    } catch {
      return dispatch(categoriesFetchFail());
    }
  }
);
