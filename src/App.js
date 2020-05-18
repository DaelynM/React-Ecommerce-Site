import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/HomePageComponent.jsx";
import ShopPage from "./pages/shoppage/ShopComponent.jsx";
import Header from "./components/header/HeaderComponent.jsx";
import SignInUp from "./pages/signinuppage/SignInUp.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";

//redux
import { useDispatch, useSelector } from "react-redux";
import CheckoutPage from "./pages/checkoutpage/CheckoutPage";

function App() {
  //redux stuff
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  //firebase stuff
  // const [currentUser, setCurrentUser] = useState(null);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const unsubsribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      userAuth ? console.log("signed in") : console.log("signed out");

      //if signed in
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        console.log("userAuth", userAuth);

        userRef.onSnapshot((e) => {
          dispatch({
            type: "SET_CURRENT_USER",
            payload: {
              id: e.id,
              ...e.data(),
            },
          });
        });
      } else {
        dispatch({ type: "SET_CURRENT_USER", payload: userAuth });
      }
    });

    //unmount equivalent
    return () => unsubsribeFromAuth();
  }, []);

  useEffect(() => {
    console.log("cu", currentUser);
  }, [currentUser]);

  return (
    <div>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route exact path="/shop/checkout" component={CheckoutPage} />
      <Route
        exact
        path="/signin"
        render={() => (currentUser ? <Redirect to="/" /> : <SignInUp />)}
        // component={SignInUp}
      />
    </div>
  );
}

//dispatch: whatever object you pass to it, it will pass to every reducer

export default App;
