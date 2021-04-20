import { SET_CURRENT_USER, LOGOUT_USER } from "../constants";
import setAuthHeader from '../utils/setAuthHeader';

const initialState = JSON.parse(localStorage.getItem('auth')) || {
  isAuthenticated: false,
  token: null,
  user: null,
};

if (initialState.token) {
  setAuthHeader(initialState.token);
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      const { token, user } = action.payload;
      const newState = {
        isAuthenticated: true,
        token,
        user,
      };
      localStorage.setItem('auth', JSON.stringify(newState))
      return {
        ...state,
        ...newState,
      };
    case LOGOUT_USER:
      localStorage.removeItem('auth')
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
      }

    default:
      return state;
  }
}
