import React from "react";
import MiniVidBoxContainer from './mini_vidbox_container';
import { Link, Redirect } from 'react-router-dom';

class VideoCategory extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        // debugger
        this.props.fetchVideos();
        this.props.fetchUsers();
    }

    render() {
        this.videos = Object.values(this.props.videos)
        return (
            <div className="videoCategories">
                {/* <label>This is a video</label>
                {this.props.category} */}
                {this.videos ? this.videos.map((video) => {
                    // debugger
                    return (
                    <MiniVidBoxContainer userId={video.authorId} video={video}/>
                    // <div className="miniVidBox">
                    //     <Link to={`/watch/${video.id}`}>
                    //         <img src={video.thumbnail}/>
                    //         <div className="videoTitle">{video.title}</div>
                    //         <Link className="miniUser" to={`/channel/${video.authorId}`}>{this.props.users[video.authorId].username}</Link>
                    //         <div className="miniViews">{video.viewCount} Views • {video.createdAt.slice(0, 10)} </div>
                    //     </Link>
                    //     <br/>
                    // </div>
                )}) : ""}
            </div>
        )
    }
}

export default VideoCategory;