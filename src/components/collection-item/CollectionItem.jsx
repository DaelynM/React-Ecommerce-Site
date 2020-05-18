import React from "react";
import CustomButton from "../custom-button/CustomButtonComponent";

import "./CollectionItem.scss";
import { useSelector, useDispatch } from "react-redux";

const CollectionItem = (props) => {
  const test = useSelector((state) => state.cart.cartItems);

  console.log("testTitle", props.item);

  const { imageUrl, price, name } = props.item;

  const dispatch = useDispatch();

  const addItem = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: props.item,
    });
    console.log("test adding", test);
  };

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton method={addItem} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
