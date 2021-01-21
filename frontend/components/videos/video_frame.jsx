import React from "react";
import { Link, Redirect } from 'react-router-dom';

class VideoFrame extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchUsers();
        // this.props.fetchVideo(this.props.match.params.videoId)
    }

    render() {
        let {video, currentUser} = this.props;
        return ( video ? <div className="videoFrame">
                <video className="singleVideo" controls>
                    <source src={this.props.video.uploadUrl}/>
                    Your browser does not support the video tag.
                </video>
        </div> : <div className="videoFrame">
                <video className="singleVideo" controls>
                    <source src={this.props.video.uploadUrl}/>
                    Your browser does not support the video tag.
                </video> </div>
        )
    }
}

export default VideoFrame;