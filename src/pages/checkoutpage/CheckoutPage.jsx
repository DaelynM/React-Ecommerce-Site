import React from "react";
import "./CheckoutPage.scss";
import { useSelector, useDispatch } from "react-redux";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const count = cartItems.reduce((acumilator, e) => acumilator + e.quantity, 0);
  const price = cartItems.reduce((acumilator, e) => acumilator + e.price, 0);
  console.log("cartItems", cartItems);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.key} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${price}</span>
      </div>
    </div>
  );
};

export default CheckoutPage;
