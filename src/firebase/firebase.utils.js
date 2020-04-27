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

//updates or creates a new user
export const createUserProfileDocument = async (userAuth, addtionalObj) => {
  //if were signed out (it will be null) if userAuth object dosent exist
  if (!userAuth) return;

  //if were logged in this will get the users uid
  const userRef = firestore.doc(`user/${userAuth.uid}`);
  //this is what i use to see if the user already exisits
  const snapShot = await userRef.get();
  // console.log(snapShot);
  console.log(userAuth);

  //if the user doesnt exist, then create that new user in the database
  if (!snapShot.exists) {
    const displayName = userAuth.displayName;
    const email = userAuth.email;
    const lastOnline = null;

    const creationTime = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        creationTime,
        lastOnline,
        ...addtionalObj,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  } else {
    const lastOnline = userAuth.metadata.lastSignInTime;
    await userRef.update({ lastOnline });
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
