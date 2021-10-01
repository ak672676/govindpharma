import { db, auth } from "../../firebase";
import { SEARCH_USER_KEY_FAIL, SEARCH_USER_KEY_REQUEST, SEARCH_USER_KEY_SUCCESS } from "../actionType";

// db.collection("books").onSnapshot((snapshot) => {
//   const data = snapshot.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   }));
//   console.log("All data in 'books' collection", data);
// });
export const medicineSearch = (key) => async (dispatch) => {
  try {
    dispatch({
      type: SEARCH_USER_KEY_REQUEST,
    });

    db.collection("items").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("All data in medicine collection", data);
      dispatch({
        type: SEARCH_USER_KEY_SUCCESS,
        payload:data
      });
    });
  } catch (error) {
    dispatch({
      type: SEARCH_USER_KEY_FAIL,
      payload: error.message,
    });
  }
};
