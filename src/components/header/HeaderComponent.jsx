import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils.js";
import CartIcon from "../cart-icon/CartIconComponent.jsx";
import CartDropDown from "../cart-dropdown/CartDropDownComponent.jsx";
//Redux
import { useSelector } from "react-redux";

import "./HeaderComponent.scss";

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const cartHidden = useSelector((state) => state.cart.hidden);
  console.log("test", currentUser);
  if (currentUser) {
    console.log("t");
  } else {
    console.log("f");
  }
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {cartHidden ? null : <CartDropDown />}
    </div>
  );
};

export default Header;
