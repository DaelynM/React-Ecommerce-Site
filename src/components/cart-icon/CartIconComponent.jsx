import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIconComponent.scss";
import { useSelector, useDispatch } from "react-redux";

const CartIcon = () => {
  const test = useSelector((state) => state.cart.hidden);
  console.log("cart", test);

  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch({
      type: "TOGGLE_CART_DROPDOWN",
    });
  };

  const count = cartItems.reduce((acumilator, e) => acumilator + e.quantity, 0);

  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{count}</span>
    </div>
  );
};

export default CartIcon;
