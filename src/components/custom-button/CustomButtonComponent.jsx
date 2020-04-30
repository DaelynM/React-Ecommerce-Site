import React from "react";

import "./CustomButtonComponent.scss";

const CustomButton = (props) => (
  <button
    className={`${props.googleBtn ? "google-sign-in" : ""} custom-button`}
    onClick={props.method}
    type={props.type}
  >
    {props.children}
  </button>
);

export default CustomButton;
