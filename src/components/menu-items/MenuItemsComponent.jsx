import React from "react";
import "./MenuItemsComponent.scss";

const MenuItem = (props) => (
  <div className={`${props.size} menu-item`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${props.img})` }}
    />
    <div className="content">
      <h1 className="title">{props.title}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);

export default MenuItem;
