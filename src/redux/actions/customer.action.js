import { db, auth } from "../../firebase";

import {
  UNVERIFIED_USERS_FAIL,
  UNVERIFIED_USERS_SUCCESS,
  UNVERIFIED_USERS_REQUEST,
} from "../actionType";

export const getUnverifiedUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: UNVERIFIED_USERS_REQUEST,
    });
    // console.log("From unverified user");
    db.collection("users")
      .where("verified", "==", false)
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("All Package", data);
        dispatch({
          type: UNVERIFIED_USERS_SUCCESS,
          payload: data,
        });
      });
  } catch (error) {
    dispatch({
      type: UNVERIFIED_USERS_FAIL,
      payload: error.message,
    });
    // console.log("error");
  }
};

