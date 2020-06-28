import React from "react";
import NavContainer from "./nav/nav_container";
import VideoStorage from "./videos/video_storage";

class Splash extends React.Component {
    render(){
        return (
            <div className="splash">
                    <NavContainer />
                    <VideoStorage />
            </div>
        )
    }
}

export default Splash;