import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/HomePageComponent.jsx";
import ShopPage from "./pages/shoppage/ShopComponent.jsx";
import Header from "./components/header/HeaderComponent.jsx";
import SignInUp from "./pages/signinuppage/SignInUp.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";

const Hats = () => (
  <div>
    <p>hats</p>
  </div>
);

function App() {
  //firebase stuff
  const [currentUser, setCurrentUser] = useState(null);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const unsubsribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      userAuth ? console.log("signed in") : console.log("signed out");

      //if signed in
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        console.log(userAuth);

        userRef.onSnapshot((e) => {
          setCurrentUser({ id: e.id, ...e.data() });
        });
      }
    });

    //unmount equivalent
    return () => unsubsribeFromAuth();
  }, []);

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop/hats" component={Hats} />
      <Route exact path="/shop" component={ShopPage} />
      <Route exact path="/signin" component={SignInUp} />
    </div>
  );
}

export default App;
