import { LOAD_PROFILE, GET_PROFILE, GET_PROFILES } from "../constants";

const initialState = {
  loading: false,
  user: null,
  list: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFILE:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case GET_PROFILES:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    default:
      return state;
  }
}
