import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateSessionContainer from './session/create_session_container';
import CreateUserContainer from './session/create_user_container';
import Splash from './splash'
import UserContainer from './users/user_container';
import StudioContainer from './users/studio_container';
import SingleVideoContainer from './videos/single_video_container';
import { AuthRoute } from '../util/route_util';
import { ProtectedRoute } from '../util/route_util';
import VideoSearchIndexContainer from './videos/video_search_index_container';

const App = () => (
	<div id="app">
		<Switch>
			<AuthRoute path="/signin" component={CreateSessionContainer} />
			<AuthRoute path="/signup" component={CreateUserContainer} />
			<ProtectedRoute path="/channel/:userId/studio/" component={StudioContainer} />
			<ProtectedRoute path="/channel/:userId/studio/create" component={StudioContainer} />
			<Route path="/watch/:videoId" component={SingleVideoContainer}/>
			<Route path="/result/:search" component={VideoSearchIndexContainer}/>
			<Route path="/channel/:userId" component={UserContainer}/>
			<Route exact path="/" component={Splash}/>	
		</Switch>
	</div>
);

export default App;
