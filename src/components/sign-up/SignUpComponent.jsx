import React, { useState } from "react";
import "./SignUpComponent.scss";

import FormInput from "../form-input/FormInputComponent.jsx";
import CustomButton from "../custom-button/CustomButtonComponent.jsx";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const SignUp = () => {
  const [signUpState, setSignUpState] = useState({
    displayName: "",
    email: "",
    password: "",
    comfirmPassword: "",
  });

  const { displayName, email, password, comfirmPassword } = signUpState;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== comfirmPassword) {
      alert("passwords dont match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      //this will clear my form
      setSignUpState({
        displayName: "",
        email: "",
        password: "",
        comfirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateField = (e) => {
    setSignUpState({
      ...signUpState,
      [e.target.name]: e.target.value,
    });

    console.log(e.target.name + " " + e.target.value);
  };

  return (
    <div className="sign-in">
      <h2 className="haveanaccount">I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          value={displayName}
          required
          label="Display Name"
          handleChange={updateField}
        />

        <FormInput
          name="email"
          type="email"
          value={email}
          required
          label="Email"
          handleChange={updateField}
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          required
          label="Password"
          handleChange={updateField}
        />
        <FormInput
          name="comfirmPassword"
          type="password"
          value={comfirmPassword}
          required
          label="Comfirm Password"
          handleChange={updateField}
        />
        <div className="buttons">
          <CustomButton type="submit">Sign Up</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
