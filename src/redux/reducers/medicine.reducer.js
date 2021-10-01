import {
  SEARCH_USER_KEY_FAIL,
  SEARCH_USER_KEY_REQUEST,
  SEARCH_USER_KEY_SUCCESS,
} from "../actionType";

const initialState = {
  medicine: [],
  loading: false,
  error: null,
};

export const medicineReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_USER_KEY_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case SEARCH_USER_KEY_SUCCESS:
      return {
        ...prevState,
        medicine: payload,
        loading: false,
      };
    case SEARCH_USER_KEY_FAIL:
      return {
        ...prevState,
        medicine: null,
        loading: false,
        error: payload,
      };
    default:
      return prevState;
  }
};
