import {
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  SELECT_FILTER,
} from '../actions';

const INITIAL_STATE = {
  filters: [],
  items: [],
  selected: [],
  loading: false,
  error: false,
  selectedFilter: '',
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
        filters: payload.filters,
        items: payload.items,
      };
    case SELECT_FILTER:
      return {
        ...state,
        selectedFilter: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
