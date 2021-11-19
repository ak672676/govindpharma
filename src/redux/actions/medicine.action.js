import { db, auth } from "../../firebase";
import {
  ADD_NEW_ITEM_FAIL,
  ADD_NEW_ITEM_CLEANLOADERROR,
  ADD_NEW_ITEM_REQUEST,
  ADD_NEW_ITEM_SUCCESS,
  SEARCH_USER_KEY_FAIL,
  SEARCH_USER_KEY_REQUEST,
  SEARCH_USER_KEY_SUCCESS,
} from "../actionType";

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
        payload: data,
      });
    });
  } catch (error) {
    dispatch({
      type: SEARCH_USER_KEY_FAIL,
      payload: error.message,
    });
  }
};

export const addItem = (item) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_NEW_ITEM_REQUEST,
    });

    console.log("item-> ", item);
    // setTimeout(() => {
    //   dispatch({
    //     type: ADD_NEW_ITEM_SUCCESS,
    //     payload: "Item Added",
    //   });
    // }, 3000);

    db.collection("items")
      .add(item)
      .then((ref) => {
        dispatch({
          type: ADD_NEW_ITEM_SUCCESS,
          payload: "Item added it id " + ref.id,
        });
      });
      
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: ADD_NEW_ITEM_FAIL,
      payload: "Error: " + err.message,
    });
  }
};

export const cleanItemMsgError = (item) => async (dispatch) => {
  dispatch({
    type: ADD_NEW_ITEM_CLEANLOADERROR,
  });
};
