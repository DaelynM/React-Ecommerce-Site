import React from "react";
import CustomButton from "../custom-button/CustomButtonComponent";

import "./CollectionItem.scss";
import { useSelector, useDispatch } from "react-redux";

const CollectionItem = (props) => {
  const test = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  const addItem = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: props.item,
    });
    console.log(test);
  };

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      />
      <div className="collection-footer">
        <span className="name">{props.name}</span>
        <span className="price">{props.price}</span>
      </div>
      <CustomButton method={addItem} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
