import React from "react";
import "./CartDropDownComponent.scss";
import CustomButton from "../custom-button/CustomButtonComponent.jsx";
import CartItem from "../cart-item/CartItem";
import { withRouter } from "react-router";

import { useSelector, useDispatch } from "react-redux";

const CartDropDown = ({ history }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  console.log("cartItems", cartItems);

  const goToCheckout = () => {
    history.push("checkout");
    dispatch({
      type: "TOGGLE_CART_DROPDOWN",
    });
  };

  // const Checker = () => {
  //   dispatch({
  //     type: "TOGGLE_CART_DROPDOWN",
  //   });
  // };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((e) => <CartItem key={e.id} item={e}></CartItem>)
        ) : (
          <span className="empty-message">Cart Is Empty</span>
        )}
      </div>
      <CustomButton method={goToCheckout}>Checkout</CustomButton>
    </div>
  );
};

export default withRouter(CartDropDown);
