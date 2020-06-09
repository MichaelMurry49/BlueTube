import React from "react";
import Nav from "./nav/nav.jsx";
import SideBar from "./nav/sidebar_container"
import NavContainer from "./nav/nav_container";
import SidebarContainer from "./nav/sidebar_container";
import VideoStorage from "./videos/video_storage_container"
import VideoStorageContainer from "./videos/video_storage_container"

import {Link, Button} from "react-router-dom";
import { signIn } from "../actions/session_actions.js";


class Splash extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        // signIn(this.props.users[currentUser]);
    }
    render(){
        return (
            <div className="splash">
                    <NavContainer />
                    {/* <SidebarContainer /> */}
                    <VideoStorageContainer/>
            </div>
        )
    }
}

export default Splash;