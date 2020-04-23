import React from "react";
import "./FormInputComponent.scss";

const FormInput = (props) => (
  <div className="group">
    <input
      className="form-input"
      onChange={props.handleChange}
      name={props.name}
      value={props.value}
      type={props.type}
      required={props.required}
    ></input>
    {props.label ? (
      <label
        className={`${props.value.length ? "shrink" : ""} form-input-label`}
      >
        {props.label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
