import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
	let store;
	if(window.currentUser){
		const preLoadedState = {
			entities: {
				users: window.currentUser
			},
			session: { currentUser: Object.keys(window.currentUser)[0] }
		}
		store = configureStore(preLoadedState);
		delete window.currentUser;
	} else {
		store = configureStore();
	}
	
	const root = document.getElementById("root");
	ReactDOM.render(<Root store={store}/>, root);
})
