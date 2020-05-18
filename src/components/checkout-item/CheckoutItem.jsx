import React from "react";
import "./CheckoutItem.scss";
import { useDispatch, useSelector } from "react-redux";
const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const test = useSelector((state) => state.cart.cartItems);
  console.log("test1", test);

  const clearItems = () => {
    dispatch({ type: "ClEAR_ITEM_FROM_CART", payload: cartItem });
  };

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt="item" />
      </div>
      <span className="name">{cartItem.name}</span>
      <div
        className="arrow"
        onClick={() =>
          dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: cartItem })
        }
      >
        &#10094;
      </div>
      <span className="quantity">
        {cartItem.quantity}
        <div
          className="arrow"
          onClick={() => dispatch({ type: "ADD_ITEM", payload: cartItem })}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{cartItem.price}</span>
      <span onClick={clearItems} className="remove-buttom">
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
