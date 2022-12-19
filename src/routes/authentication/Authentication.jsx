import { SignUpForm } from "../../components/sign-up-form/SignUpForm";
import { SignInForm } from "../../components/sign-in-form/SignInForm";
import {AuthenticationContainer}from './authentication.styles';

export const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};
