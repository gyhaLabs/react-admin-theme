import firebase from "firebase";
import React from "react";
import { Login, LoginForm } from "react-admin";
// @ts-ignore
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import ForgotPasswordButton from "./ForgotPassword";
import { useAlternativeLoginStyle } from "./LoginPage.styles";

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "#/",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

const SignInScreen = () => {
  const classes = useAlternativeLoginStyle();

  return (
    <StyledFirebaseAuth
      uiConfig={uiConfig}
      firebaseAuth={firebase.auth()}
      className={classes.signInPanel}
    />
  );
};

const CustomLoginForm = (props: JSX.IntrinsicAttributes) => (
  <div>
    <LoginForm {...props} />
    <ForgotPasswordButton {...props} />
    <SignInScreen />
  </div>
);

const CustomLoginPage = (props: JSX.IntrinsicAttributes) => (
  <Login {...props}>
    <CustomLoginForm {...props} />
  </Login>
);

export default CustomLoginPage;
