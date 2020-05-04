import React from "react";

class SingleVideo extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchVideo(this.props.match.params.videoId)
    }

    render(){
        if(!this.props.video) return null;
        return(
            <div>
                "This is a video"
                {this.props.video.id}
                <button onClick={() => this.props.deleteVideo(this.props.video.id)}>Delete</button>
            </div>
        )
    }
}

export default SingleVideo;