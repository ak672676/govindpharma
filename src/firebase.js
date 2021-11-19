import firebase from "firebase/app";
import apiKeys from "./config/key";
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/firebase-storage";

if (!firebase.apps.length) {
  console.log("Connected with Firebase");
  firebase.initializeApp(apiKeys.firebaseConfig);
}

// firebase.initializeApp(apiKey.firebaseConfig);
// console.log("Firebase initialsie");
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
