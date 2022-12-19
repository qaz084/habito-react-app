import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import { Button,BUTTON_TYPE_CLASSES } from "../button/Button";
import { FormInput } from "../form-input/FormInput";
import {SignUpContainer}from "./sign-up-form.styles";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};



export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
  

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        alert("emailalready in use");
      }

    }
  };

  return (
    <SignUpContainer>
      <h2>Don`t have an account?</h2>
      <span>Sign up with your email y password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name: "
          type="text"
          required
          name="displayName"
          id="name"
          value={displayName}
          onChange={handleChange}
        />

        <FormInput
          label="Email: "
          type="email"
          required
          name="displayName"
          id="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password: "
          type="password"
          required
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
        />

        <FormInput
          label="Confirm Password: "
          type="password"
          required
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};
