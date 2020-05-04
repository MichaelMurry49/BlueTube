import React from "react";
import { Link, Redirect } from 'react-router-dom';

class VideoCategory extends React.Component {
    constructor(props) {
        super(props);
        debugger;
        if(this.props && this.props.videos){
            debugger;
            this.videos = Object.values(this.props.videos)
        } else {
            this.videos = [];
        }
    }

    componentDidMount(){
        debugger
        this.props.fetchVideos()
    }

    render() {
        // if (!this.videos) return null;
        debugger
        this.videos = Object.values(this.props.videos)
        return (
            <div className="videoCategories">
                <label>This is a video</label>
                <br/>
                {this.props.category}
                <br/>
                {this.videos ? this.videos.map((video, id) => {
                    debugger
                    return (<div className="miniVidBox">
                        <Link to={`/watch/${id+1}`}>
                            {`${video.title}`}
                        </Link>
                        <br/>
                    </div>
                )}) : ""}
            </div>
        )
    }
}

export default VideoCategory;