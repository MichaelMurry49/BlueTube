import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import CreateSessionContainer from './session/create_session_container';
import CreateUserContainer from './session/create_user_container';
import SplashContainer from './splash_container';
// import AuthRoute from './util/route_util';
import { AuthRoute} from '../util/route_util';

const App = () => (
	<div id="app">
		{/* <header>
			<SplashContainer />
		</header> */}
		<Switch>
			
			<AuthRoute path="/signin" component={CreateSessionContainer} />
			<AuthRoute path="/signup" component={CreateUserContainer} />
			<Route path="/" component={SplashContainer}/>
		</Switch>
	</div>
);

export default App;
