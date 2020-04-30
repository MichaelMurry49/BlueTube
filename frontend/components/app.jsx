import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import CreateSessionContainer from './session/create_session_container';
import CreateUserContainer from './session/create_user_container';

const App = () => (
	<div id="app">
		<Switch>
			<Route path="/signin" component={CreateSessionContainer} />
			<Route path="/signup" component={CreateUserContainer} />
		</Switch>
	</div>
);

export default App;
