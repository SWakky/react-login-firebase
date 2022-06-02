// import firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import * as firebase from "firebase/app";
// import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCM6vStPKhYPhsi_9zi8NW6v0v01F-SUU4",
  authDomain: "fir-login-9d49f.firebaseapp.com",
  projectId: "fir-login-9d49f",
  storageBucket: "fir-login-9d49f.appspot.com",
  messagingSenderId: "66691081478",
  appId: "1:66691081478:web:929a3925b193f5f1992a87"
};

firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth() 