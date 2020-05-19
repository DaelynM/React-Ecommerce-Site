import React from "react";
import "./CheckoutPage.scss";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import StripeButton from "../../components/stripe-button/StripeButton";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  // const count = cartItems.reduce((acumilator, e) => acumilator + e.quantity, 0);
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
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${price}</span>
      </div>
      <StripeButton price={price} />

      <div className="test-warning">
        Test Card Info<br></br>4242 4242 4242 4242 - Exp: 12:23 - CVV: 123
      </div>
    </div>
  );
};

export default CheckoutPage;
