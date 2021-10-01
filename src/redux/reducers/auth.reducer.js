import {
  LOAD_ADMIN,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actionType";

const initialState = {
  admin: sessionStorage.getItem("admin")
    ? JSON.parse(sessionStorage.getItem("admin"))
    : null,
  loading: false,
  error: null,
};

export const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...prevState,
        admin: payload,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...prevState,
        admin: null,
        loading: false,
        error: payload,
      };
    case LOAD_ADMIN:
      return {
        ...prevState,
        admin: payload,
      };

    case LOG_OUT:
      return {
        ...prevState,
        admin: null,
      };
    default:
      return prevState;
  }
};
