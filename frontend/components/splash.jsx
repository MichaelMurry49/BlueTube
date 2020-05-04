import React from "react";
import Nav from "./nav/nav.jsx";
import NavContainer from "./nav/nav_container"
import VideoStorage from "./videos/video_storage_container"
import VideoStorageContainer from "./videos/video_storage_container"

import {Link, Button} from "react-router-dom";


class Splash extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="splash">
                    {/* {window.currentUser ? window.currentUser : "Test"} */}
                    <NavContainer />
                    <VideoStorageContainer/>
                    {/* <img source="Untiled.png" />
                    <Link to="/signin">
                        <button className="SignInSignOut">Sign In</button>
                    </Link> */}
            </div>
        )
    }
}

export default Splash;