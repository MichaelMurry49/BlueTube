import React from "react";
import VideoSearchIndexContainer from "./video_search_index_container";
import { Link, Redirect } from 'react-router-dom';

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
            video.title.toLowerCase().includes(filter.toLowerCase()) || 
            video.description.toLowerCase().includes(filter.toLowerCase()))
        // debugger;
        // videos = video.filter(video =>)
        return (
            <div className="videoSearch">
                {/* <label>This is a video</label>
                {this.props.category} */}
                {this.videos ? this.videos.map((video) => {
                    debugger
                    return (<div className="miniVidBox">
                        <Link to={`/watch/${video.id}`}>
                            <img src={video.thumbnail} />
                            <div className="videoTitle">{video.title}</div>
                        </Link>
                        <br />
                    </div>
                    )
                }) : "No Videos Found"}
            </div>
        )
    }
}

export default VideoSearchIndex;
