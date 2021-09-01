import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAu1zgEX1aiNvWT3ZgJW5Te5ZBia9wHyos",
  authDomain: "kngd-ecom.firebaseapp.com",
  projectId: "kngd-ecom",
  storageBucket: "kngd-ecom.appspot.com",
  messagingSenderId: "760814373803",
  appId: "1:760814373803:web:c3cbe63757f67b3f9b20ee",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Authentification via Gmail
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//Authentification via Facebook
/*const providerF = new firebase.auth.FacebookAuthProvider();
export const signInWithFacebook = () => auth.signInWithRedirect(providerF); */
