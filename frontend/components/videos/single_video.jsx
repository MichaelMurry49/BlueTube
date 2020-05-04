import React from "react";

class SingleVideo extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                "This is a video"
                {this.props.video.id}
                <button onClick={() => this.props.deleteVideo(video.id)}>Delete</button>
            </div>
        )
    }
}

export default SingleVideo;