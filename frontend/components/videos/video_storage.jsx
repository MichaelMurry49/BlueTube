import React from "react";
import VideoCategoryContainer from "./video_category_container";

class VideoStorage extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <VideoCategoryContainer category={"Short-Vids"}/>
            </div>
        )
    }
}

export default VideoStorage;