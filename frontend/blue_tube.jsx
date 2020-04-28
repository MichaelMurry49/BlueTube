import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import {signIn, signUp, signOut} from "./util/session_api_util"

document.addEventListener("DOMContentLoaded", () => {
	window.signIn = signIn;
	window.signUp = signUp;
	window.signOut = signOut;
	const store = configureStore();
	const root = document.getElementById("root");
	ReactDOM.render(<Root store={store}/>, root);
})
