import React from "react";
import { Link, Redirect } from 'react-router-dom';

class VideoCategory extends React.Component {
    constructor(props) {
        super(props);
        // debugger;
        if(this.props && this.props.videos){
            // debugger;
            this.videos = Object.values(this.props.videos)
        } else {
            this.videos = [];
        }
    }

    componentDidMount(){
        // debugger
        this.props.fetchVideos()
    }

    render() {
        // if (!this.videos) return null;
        // debugger
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
                        </Link>
                        <br/>
                    </div>
                )}) : ""}
            </div>
        )
    }
}

export default VideoCategory;