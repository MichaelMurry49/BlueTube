import React from "react";
import NavContainer from "../nav/nav_container"

class SingleVideo extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchVideo(this.props.match.params.videoId)
    }

    render(){
        const {video, currentUser, deleteVideo} = this.props;
        if(!this.props.video) return null;
        debugger
        return(
            <div className="singleVideoContainer">
                <NavContainer/>
                <video className="singleVideo" controls>
                    <source src={this.props.video.uploadUrl}/>
                    {/* <source src="movie.ogg" type="video/ogg"> */}
                    Your browser does not support the video tag.
                </video>
                
                <button hidden={video.id === currentUser ? false : true} className="delete" onClick={() => deleteVideo(video.id)}>Delete</button>
            </div>
        )
    }
}

export default SingleVideo;