import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import {signIn, signUp, signOut} from "./util/session_api_util.js"

window.signIn = signIn;
window.signUp = signUp;
window.signOut = signOut;
document.addEventListener("DOMContentLoaded", () => {
	const store = configureStore();
	const root = document.getElementById("root");
	ReactDOM.render(<Root store={store}/>, root);
	
})
