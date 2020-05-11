import React from "react";

import "./CartItem.scss";
import { useSelector } from "react-redux";

const CartItem = (props) => {
  console.log("props", props);

  return (
    <div className="cart-item">
      <img src={props.item.imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{props.item.name}</span>
        <span className="price">
          {props.item.quantity} x ${props.item.price}
        </span>
      </div>
    </div>
  );
};
export default CartItem;
