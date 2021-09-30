import firebase from "firebase/app";
import apiKey from "./config/key";
import "firebase/auth";

firebase.initializeApp(apiKey.firebaseConfig);

export default firebase.auth();
