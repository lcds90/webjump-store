import {
  GET_CATEGORIES,
  GET_CATEGORIES_FAIL,
  GET_CATEGORIES_SUCCESS,
} from '../actions';

const INITIAL_STATE = {
  categories: [],
  loading: false,
  error: false,
};

const userReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case GET_CATEGORIES:
      return {
        ...state,
        loading: true,
      };
    case GET_CATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
