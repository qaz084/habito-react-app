import { useState } from "react";
import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";
import { Button,BUTTON_TYPE_CLASSES } from "../button/Button";
import { FormInput } from "../form-input/FormInput";
import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

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

const signInWithGoogle = async () => {

   await signInWithGooglePopUp();

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
  
      resetFormFields();

    } catch (e) {
      switch (e.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("User is not correct");
          break;
        default:
          console.log(e);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email y password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email: "
          type="email"
          required
          name="sign-in-email"
          id="sign-in-email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password: "
          type="password"
          required
          name="ign-in-password"
          id="sign-in-password"
          value={password}
          onChange={handleChange}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};
