import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateSessionContainer from './session/create_session_container';
import CreateUserContainer from './session/create_user_container';

const App = () => (
	<div>
		<Switch>
			<Route path="/signin" component={CreateSessionContainer} />
			<Route path="/signup" component={CreateUserContainer} />
		</Switch>
	</div>
);

export default App;
