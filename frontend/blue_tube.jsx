import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import {signIn, signUp, signOut} from "./util/session_api_util.js"



document.addEventListener("DOMContentLoaded", () => {
	const store = configureStore();
	const root = document.getElementById("root");
	window.getState = store.getState;
	window.dispatch = store.dispatch;
	window.signIn = signIn;
	window.signUp = signUp;
	window.signOut = signOut;
	// window.currentUser = currentUser;
	ReactDOM.render(<Root store={store}/>, root);
	
})
