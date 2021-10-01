import { db, auth } from "../../firebase";

import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actionType";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        const userId = user.user.uid;
        db.collection("admins")
          .doc(userId)
          .get()
          .then((admin) => {
            if (!admin.exists) {
              dispatch({
                type: LOGIN_FAIL,
                payload: "Admin doesn't exist in system in system",
              });
              return;
            }

            const currentUser = {
              id: admin.data().id,
              imageUrl: admin.data().imageUrl,
              name: admin.data().name,
            };

            sessionStorage.setItem("admin", JSON.stringify(currentUser));
            dispatch({
              type: LOGIN_SUCCESS,
              payload: currentUser,
            });
          });
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const log_out = () => async (dispatch) => {
  await auth.signOut();
  dispatch({
    type: LOG_OUT,
  });
  sessionStorage.removeItem("admin");
};

export const loadLoginAdmin = () => async (dispatch) => {
  console.log("from login admin load");

  const currentAdmin = auth.currentUser;
  console.log(currentAdmin);
  if (currentAdmin) {
    db.collection("admins")
      .doc(currentAdmin.uid)
      .get()
      .then((admin) => {
        if (!admin.exists) {
          dispatch({
            type: LOGIN_FAIL,
            payload: "Could not load the admin",
          });
          return;
        }

        const currentUser = {
          id: admin.data().id,
          imageUrl: admin.data().imageUrl,
          name: admin.data().name,
        };

        sessionStorage.setItem("admin", JSON.stringify(currentUser));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: currentUser,
        });
      });
  }
  dispatch({
    type: LOGIN_FAIL,
    payload: "Could not load the admin",
  });
};
