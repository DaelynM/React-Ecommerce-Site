import React from "react";

import "./CustomButtonComponent.scss";

const CustomButton = (props) => (
  <button
    className={`${props.inverted ? "inverted" : ""} ${
      props.googleBtn ? "google-sign-in" : ""
    } custom-button`}
    onClick={props.method}
    type={props.type}
  >
    {props.children}
  </button>
);

export default CustomButton;
