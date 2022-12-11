import { SignUpForm } from "../../components/sign-up-form/SignUpForm";
import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

export const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <h1>SIGN IN PAGE</h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>

      <SignUpForm/>
    </>
  );
};
