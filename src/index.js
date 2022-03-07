import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoFpHfYGfmNSA2W688dLUTZqEuSaeAA_s",
  authDomain: "cart-504fe.firebaseapp.com",
  projectId: "cart-504fe",
  storageBucket: "cart-504fe.appspot.com",
  messagingSenderId: "69928270538",
  appId: "1:69928270538:web:032eed9eeb5b259e6cd233",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
