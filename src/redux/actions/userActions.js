import { TOGGLE_NAVBAR, USER_INFO } from './types';

export const sendUserInfo = (payload) => ({
  type: USER_INFO,
  payload,
});

export const toggleNavbar = () => ({
  type: TOGGLE_NAVBAR,
});
