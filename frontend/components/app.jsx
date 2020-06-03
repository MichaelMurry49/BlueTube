import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import CreateSessionContainer from './session/create_session_container';
import CreateUserContainer from './session/create_user_container';
import SplashContainer from './splash_container';
import PopupContainer from './nav/popup_container';
import SingleVideoContainer from './videos/single_video_container';
// import AuthRoute from './util/route_util';
import { AuthRoute} from '../util/route_util';
import VideoSearchIndexContainer from './videos/video_search_index_container';

const App = () => (
	<div id="app">
		
		{/* <header>
			<SplashContainer />
		</header> */}
		<Switch>
			
			<AuthRoute path="/signin" component={CreateSessionContainer} />
			<AuthRoute path="/signup" component={CreateUserContainer} />
			<Route path="/watch/:videoId" component={SingleVideoContainer}/>
			<Route path="/result/:search" component={VideoSearchIndexContainer}/>
			<Route exact path="/" component={SplashContainer}/>
		</Switch>
		{/* <PopupContainer task={"Upload replacement Video"} /> */}
		<PopupContainer task={"Create a new Video"}/> 
		
		
		

	</div>
);

export default App;
