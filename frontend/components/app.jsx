import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import CreateSessionContainer from './session/create_session_container';
import CreateUserContainer from './session/create_user_container';
import SplashContainer from './splash_container';

const App = () => (
	<div id="app">
		{/* <header>
			<SplashContainer />
		</header> */}
		<Switch>
			<Route exact path="/" component={SplashContainer}/>
			<Route path="/signin" component={CreateSessionContainer} />
			<Route path="/signup" component={CreateUserContainer} />
		</Switch>
	</div>
);

export default App;
