import {
  ADD_GLOBAL_TYPES_REQUEST,
  ADD_GLOBAL_TYPES_SUCCESS,
  ADD_GLOBAL_TYPES_FAIL,
  ADD_GLOBAL_PACKAGES_REQUEST,
  ADD_GLOBAL_PACKAGES_SUCCESS,
  ADD_GLOBAL_PACKAGES_FAIL,
} from "../actionType";

const initialState = {
  itemPackages: [],
  itemTypes: [],
  error: "",
};

export const globalReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_GLOBAL_TYPES_REQUEST:
      return {
        ...prevState,
      };
    case ADD_GLOBAL_TYPES_SUCCESS:
      return {
        ...prevState,
        itemTypes: payload,
      };
    case ADD_GLOBAL_TYPES_FAIL:
      return {
        ...prevState,
        error: payload,
      };
    case ADD_GLOBAL_PACKAGES_REQUEST:
      return {
        ...prevState,
      };
    case ADD_GLOBAL_PACKAGES_SUCCESS:
      return {
        ...prevState,
        itemPackages: payload,
      };
    case ADD_GLOBAL_PACKAGES_FAIL:
      return {
        ...prevState,
        error: payload,
      };

    default:
      return prevState;
  }
};
