import axios from "axios";
import {
  GET_PROFILE,
  LOAD_PROFILE,
  GET_PROFILES,
  GET_POSTS,
  LOADING_POSTS,
} from "../constants";
import { baseUrl } from "../config.js";

export const getUserProfile = (userId) => (dispatch) => {
  dispatch(loadProfile());
  axios
    .get(`${baseUrl}/users/${userId}`)
    .then((res) =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const getProfiles = () => (dispatch) => {
  dispatch(loadProfile);
  axios
    .get(`${baseUrl}/users`)
    .then((res) =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const getPostsByUserId = (userId) => (dispatch) => {
  dispatch(loadPosts());
  axios
    .get(`${baseUrl}/posts/${userId}`)
    .then((res) =>
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const deleteProfile = (userId) => (dispatch) => {
  axios.delete(`${baseUrl}/users/${userId}`).catch((err) => console.log(err));
};

export const searchUser = (searchData, history) => (dispatch) => {
  axios
    .post(`${baseUrl}/users/search`, searchData)
    .then((res) => {
      history.push(`/profile/${res.data.userId}`);
    })
    .catch((err) => history.push("/search"));
};

export const loadProfile = () => {
  return {
    type: LOAD_PROFILE,
  };
};

export const loadPosts = () => {
  return {
    type: LOADING_POSTS,
  };
};
