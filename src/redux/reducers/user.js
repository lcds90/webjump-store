import { USER_INFO } from '../actions';

const INITIAL_STATE = {
  email: '',
  name: '',
};

const userReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
  case USER_INFO:
    return {
      email: payload.email,
      name: payload.password,
    };

  default:
    return state;
  }
};

export default userReducer;
