// import firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import * as firebase from "firebase/app";
// import "firebase/auth";

const firebaseConfig = {
  apiKey: "***",
  authDomain: "***",
  projectId: "***",
  storageBucket: "***",
  messagingSenderId: "***",
  appId: "***"
};

firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth() 