import { USER_INFO, TOGGLE_NAVBAR } from '../actions';

const INITIAL_STATE = {
  email: '',
  name: '',
  showNavbar: false,
};

const userReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case USER_INFO:
      return {
        ...state,
        email: payload.email,
        name: payload.password,
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
