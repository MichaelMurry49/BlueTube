import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import {signIn, signUp, signOut} from "./util/session_api_util.js"



document.addEventListener("DOMContentLoaded", () => {
	let store;
	if(window.currentUser){
		// debugger
		const preLoadedState = {
			entities: {
				users: { [window.currentUser.id]: window.currentUser }
			},
			// session: { currentUser: window.currentUser.id}
			session: { currentUser: Object.keys(window.currentUser)[0] }
		}
		store = configureStore(preLoadedState);
		delete window.currentUser;
	} else {
		store = configureStore();
	}
	
	const root = document.getElementById("root");
	window.getState = store.getState;
	window.dispatch = store.dispatch;
	window.signIn = signIn;
	window.signUp = signUp;
	window.signOut = signOut;
	// window.currentUser = currentUser;
	ReactDOM.render(<Root store={store}/>, root);
	
})

// import React from "react";
// import ReactDOM from "react-dom";
// import Root from "./components/root";
// import configureStore from "./store/store";
// import { signIn, signUp, signOut } from "./util/session_api_util.js"



// document.addEventListener("DOMContentLoaded", () => {
// 	let store;
// 	if (window.currentUser) {
// 		// debugger
		// const preLoadedState = {
		// 	entities: {
		// 		users: window.currentUser
		// 	},
		// 	session: { currentUser: Object.keys(window.currentUser)[0] }
// 		}
// 		store = configureStore(preLoadedState);
// 		delete window.currentUser;
// 	} else {
// 		store = configureStore();
// 	}

// 	const root = document.getElementById("root");
// 	window.getState = store.getState;
// 	window.dispatch = store.dispatch;
// 	window.signIn = signIn;
// 	window.signUp = signUp;
// 	window.signOut = signOut;
// 	// window.currentUser = currentUser;
// 	ReactDOM.render(<Root store={store} />, root);

// })
