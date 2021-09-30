import firebase from "firebase/app";
import auth from "../../firebase";

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

    // const phoneProvider = new firebase.auth.PhoneAuthProvider();
    // const verificationId = await phoneProvider.verifyPhoneNumber(
    //   "+91" + phoneNumber,
    //   recaptchaVerifier.current
    // );
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("User is 🔦 ", user);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: "aaaa",
        });
      })
      .catch((err) => {
        throw err;
      });
    // const profile = {
    //   name: res.additionalUserInfo.profile.name,
    //   photoURL: res.additionalUserInfo.profile.picture,
    // };

    // sessionStorage.setItem("ytc-access-token", accessToken);
    // sessionStorage.setItem("ytc-user", JSON.stringify(profile));

    // dispatch({
    //   type: LOGIN_SUCCESS,
    //   payload: accessToken,
    // });
    // dispatch({
    //   type: LOAD_PROFILE,
    //   payload: profile,
    // });
    console.log("aa");
  } catch (error) {
    console.log(error.message);
    // dispatch({
    //   type: LOGIN_FAIL,
    //   payload: error.message,
    // });
  }
};

export const log_out = () => async (dispatch) => {
  await auth.signOut();
  dispatch({
    type: LOG_OUT,
  });

  sessionStorage.removeItem("ytc-access-token");
  sessionStorage.removeItem("ytc-user");
};
