import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBvCSktu97PTyh424x3Yh_LPEtk6cPZ3A0",
  authDomain: "crwn-db-78533.firebaseapp.com",
  databaseURL: "https://crwn-db-78533.firebaseio.com",
  projectId: "crwn-db-78533",
  storageBucket: "crwn-db-78533.appspot.com",
  messagingSenderId: "1021604817773",
  appId: "1:1021604817773:web:b62afdbfff9579067ac864",
  measurementId: "G-HWRTNKJPSQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
