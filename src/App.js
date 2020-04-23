import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/HomePageComponent.jsx";
import ShopPage from "./pages/shop/ShopComponent.jsx";
import Header from "./components/header/HeaderComponent.jsx";

const Hats = () => (
  <div>
    <p>hats</p>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop/hats" component={Hats} />
      <Route exact path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
