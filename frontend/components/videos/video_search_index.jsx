import React from "react";
import MiniVidBoxContainer from "../videos/mini_vidbox_container";
import NavContainer from "../nav/nav_container";

class VideoSearchIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchVideos()
    }

    render(){
        let {videos, filter} = this.props;
        this.videos = Object.values(videos);
        this.videos = this.videos.filter(video => 
            (video.title && video.title.toLowerCase().includes(filter.toLowerCase())) || 
            (video.description && video.description.toLowerCase().includes(filter.toLowerCase())))
        return (
            <div className="videoSearch">
                {this.videos ? this.videos.map((video) => {
                    return <MiniVidBoxContainer userId={video.authorId} video={video}/>;
                }) : "No Videos Found"}
                <NavContainer />
            </div>
        )
    }
}

export default VideoSearchIndex;
