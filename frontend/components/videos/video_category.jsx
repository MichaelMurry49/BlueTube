import React from "react";
import MiniVidBoxContainer from './mini_vidbox_container';

class VideoCategory extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchVideos();
        this.props.fetchUsers();
    }

    render() {
        this.videos = Object.values(this.props.videos)
        return (
            <div className="videoCategories">
                {this.videos ? this.videos.map((video) => {
                    return (
                        <div><MiniVidBoxContainer userId={video.authorId} video={video}/></div>
                    )}) : ""}
            </div>
        )
    }
}

export default VideoCategory;