import { GET_PRODUCTS, GET_PRODUCTS_FAIL, GET_PRODUCTS_SUCCESS } from '../actions';

const INITIAL_STATE = {
  products: [],
  selected: [],
  loading: false,
  error: false,
};

const userReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload,
      };

    default:
      return state;
  }
};

export default userReducer;