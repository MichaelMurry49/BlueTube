import React from "react";
import VideoSearchIndexContainer from "./video_search_index_container";
import MiniVidBoxContainer from "../videos/mini_vidbox_container";
import NavContainer from "../nav/nav_container";
import SideBarContainer from "../nav/sidebar_container";
import { Link, Redirect } from 'react-router-dom';
import MiniVidBox from "./mini_vidbox";

class VideoSearchIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        // debugger
        this.props.fetchVideos()
    }

    render(){
        let {videos, filter} = this.props;
        this.videos = Object.values(videos);
        this.videos = this.videos.filter(video => 
            (video.title && video.title.toLowerCase().includes(filter.toLowerCase())) || 
            (video.description && video.description.toLowerCase().includes(filter.toLowerCase())))
        // debugger;
        // videos = video.filter(video =>)
        return (
            <div className="videoSearch">
                
                {/* <label>This is a video</label>
                {this.props.category} */}
                {this.videos ? this.videos.map((video) => {
                    // debugger
                    return <MiniVidBoxContainer video={video}/>;
                }) : "No Videos Found"}
                {/* <SideBarContainer /> */}
                <NavContainer />
            </div>
        )
    }
}

export default VideoSearchIndex;
