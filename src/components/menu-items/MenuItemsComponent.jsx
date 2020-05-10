import React from "react";
import { withRouter } from "react-router-dom";
import "./MenuItemsComponent.scss";

const MenuItem = (props) => {
  console.log("props", props);
  return (
    <div
      className={`${props.size} menu-item`}
      onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}
    >
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
};

export default withRouter(MenuItem);
