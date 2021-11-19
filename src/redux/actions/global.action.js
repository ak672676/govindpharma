import { db, auth } from "../../firebase";

import {
  ADD_GLOBAL_TYPES_REQUEST,
  ADD_GLOBAL_TYPES_SUCCESS,
  ADD_GLOBAL_TYPES_FAIL,
  ADD_GLOBAL_PACKAGES_REQUEST,
  ADD_GLOBAL_PACKAGES_SUCCESS,
  ADD_GLOBAL_PACKAGES_FAIL,
  UNVERIFIED_USERS_FAIL,
  UNVERIFIED_USERS_SUCCESS,
  UNVERIFIED_USERS_REQUEST,
} from "../actionType";

export const setItemTypes = () => async (dispatch) => {
  try {
    dispatch({
      type: ADD_GLOBAL_TYPES_REQUEST,
    });

    db.collection("itemTypes").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("All Items", data);
      dispatch({
        type: ADD_GLOBAL_TYPES_SUCCESS,
        payload: data,
      });
    });
  } catch (error) {
    dispatch({
      type: ADD_GLOBAL_TYPES_FAIL,
      payload: error.message,
    });
  }
};

export const setPackageTypes = () => async (dispatch) => {
  try {
    dispatch({
      type: ADD_GLOBAL_PACKAGES_REQUEST,
    });

    db.collection("itemPackages").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("All Package", data);
      dispatch({
        type: ADD_GLOBAL_PACKAGES_SUCCESS,
        payload: data,
      });
    });
  } catch (error) {
    dispatch({
      type: ADD_GLOBAL_PACKAGES_FAIL,
      payload: error.message,
    });
  }
};

