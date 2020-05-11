import React from "react";
import "./CheckoutItem.scss";
const CheckoutItem = ({ cartItem }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt="item" />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">{cartItem.quantity}</span>
      <span className="price">{cartItem.price}</span>
      <span className="remove-buttom">&#10005;</span>
    </div>
  );
};

export default CheckoutItem;
