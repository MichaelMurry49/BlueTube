import React from "react";
import { Link, Redirect } from 'react-router-dom';

class VideoCategory extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        // debugger
        this.props.fetchVideos()
    }

    render() {
        this.videos = Object.values(this.props.videos)
        return (
            <div className="videoCategories">
                {/* <label>This is a video</label>
                {this.props.category} */}
                {this.videos ? this.videos.map((video) => {
                    // debugger
                    return (<div className="miniVidBox">
                        <Link to={`/watch/${video.id}`}>
                            <img src={video.thumbnail}/>
                            <div className="videoTitle">{video.title}</div>
                        </Link>
                        <br/>
                    </div>
                )}) : ""}
            </div>
        )
    }
}

export default VideoCategory;