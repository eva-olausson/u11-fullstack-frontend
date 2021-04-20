import axios from "axios";
import { GET_ERRORS, LOGOUT_USER, SET_CURRENT_USER } from "../constants";
import setAuthHeader from "../utils/setAuthHeader";

export const loginUser = (userData) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/users/login", userData)
    .then((res) => {
      const { token, user } = res.data;
      setAuthHeader(token);
      dispatch(setCurrentUser(token, user));
      console.log(token);
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/users/register", userData)
    .then((res) => history.push("/login"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const getCurrentUser = () => (dispatch) => {
  axios
    .get("http://localhost:5000/api/users")
    .then((res) => dispatch(setCurrentUser(res.data)));
};

export const setCurrentUser = (token, user) => {
  return {
    type: SET_CURRENT_USER,
    payload: {
      token,
      user,
    },
  };
};

export const logoutUser = () => (dispatch) => {
  setAuthHeader();
  dispatch(logoutUserAction());
};

export const logoutUserAction = () => {
  return {
    type: LOGOUT_USER,
  };
};
