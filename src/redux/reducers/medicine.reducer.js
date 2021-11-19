import {
  SEARCH_USER_KEY_FAIL,
  SEARCH_USER_KEY_REQUEST,
  SEARCH_USER_KEY_SUCCESS,
  ADD_NEW_ITEM_REQUEST,
  ADD_NEW_ITEM_SUCCESS,
  ADD_NEW_ITEM_FAIL,
  ADD_NEW_ITEM_CLEANLOADERROR,
} from "../actionType";

const initialState = {
  medicine: [],
  loading: false,
  error: "",
  message: "",
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
    case ADD_NEW_ITEM_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case ADD_NEW_ITEM_SUCCESS:
      return {
        ...prevState,
        loading: false,
        message: payload,
      };
    case ADD_NEW_ITEM_FAIL:
      return {
        ...prevState,
        loading: false,
        error: payload,
      };
    case ADD_NEW_ITEM_CLEANLOADERROR:
      return {
        ...prevState,
        error: "",
        message: "",
        loading: false,
      };
    default:
      return prevState;
  }
};
