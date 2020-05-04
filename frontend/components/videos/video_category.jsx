import React from "react";

class VideoStorage extends React.Component {
    constructor(props) {
        super(props)
        this.videos = this.props.videos.filter(video => video.description.includes(this.props.category) || video.title.includes(this.props.category))
    }

    render() {
        return (
            <div className="videoCategories">
                {this.props.category}
                {this.videos ? this.videos.filter(video => video.category === this.props.category).map(video => <Link to={`/watch/${video.id}`}>{`${video}`}</Link>) : ""}
            </div>
        )
    }
}

export default VideoStorage;