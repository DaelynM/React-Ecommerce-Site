import React, { useState } from "react";
import "./SignInComponent.scss";
import FormInput from "../form-input/FormInputComponent.jsx";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
  };

  //   const handleChange = (event) => {
  //       console.log("working")
  //   };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          required
          label="email"
          handleChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          name="email"
          type="password"
          value={password}
          required
          label="password"
          handleChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Submit From" />
      </form>
    </div>
  );
};

export default SignIn;
