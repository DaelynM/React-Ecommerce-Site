import React from "react";
import "./CartDropDownComponent.scss";
import CustomButton from "../custom-button/CustomButtonComponent.jsx";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>Checkout</CustomButton>
    </div>
  );
};

export default CartDropDown;
