import {
  UNVERIFIED_USERS_FAIL,
  UNVERIFIED_USERS_SUCCESS,
  UNVERIFIED_USERS_REQUEST,
} from "../actionType";

const initialState = {
  unappprovedCustomers: [],
  loading: false,
  error: "",
  message: "",
};

export const customerReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UNVERIFIED_USERS_REQUEST:
      return {
        ...prevState,
      };
    case UNVERIFIED_USERS_SUCCESS:
      return {
        ...prevState,
        unappprovedCustomers: payload,
      };
    case UNVERIFIED_USERS_FAIL:
      return {
        ...prevState,
        error: payload,
      };

    default:
      return prevState;
  }
};
