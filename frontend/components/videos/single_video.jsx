import React from "react";
import NavContainer from "../nav/nav_container";
import {Link} from "react-router-dom"

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
                
                
                <video className="singleVideo" controls>
                    <source src={this.props.video.uploadUrl}/>
                    {/* <source src="movie.ogg" type="video/ogg"> */}
                    Your browser does not support the video tag.
                </video>
                <div className="titleTag">Title: {video.title}</div>
                <div className="descTag">Description: {video.description} </div>
                <Link to="/"><button hidden={video.authorId.toString(10) === currentUser ? false : true} className="delete" onClick={() => deleteVideo(video.id)}>Delete</button></Link>
                
                <NavContainer/>
               
            </div>
        )
    }
}

export default SingleVideo;