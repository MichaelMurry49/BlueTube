import React from "react";
import NavContainer from "./nav/nav_container";
import VideoStorageContainer from "./videos/video_storage_container"



class Splash extends React.Component {

    render(){
        return (
            <div className="splash">
                    <NavContainer />
                    <VideoStorageContainer/>
            </div>
        )
    }
}

export default Splash;