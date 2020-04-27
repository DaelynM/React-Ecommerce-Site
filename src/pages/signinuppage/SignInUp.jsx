import React from "react";
import "./SignInUp.scss";
import SignIn from "../../components/sign-in/SignInComponent.jsx";
import SignUp from "../../components/sign-up/SignUpComponent.jsx";

const SignInUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInUp;
