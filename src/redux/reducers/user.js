import { USER_INFO, TOGGLE_NAVBAR } from '../actions';

const INITIAL_STATE = {
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  password: undefined,
  phone: undefined,
  address: undefined,
  zipcode: undefined,
  showNavbar: false,
};

const userReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case USER_INFO:
      return {
        ...state,
        ...payload,
      };

    case TOGGLE_NAVBAR:
      return {
        ...state,
        showNavbar: !state.showNavbar,
      };

    default:
      return state;
  }
};

export default userReducer;
