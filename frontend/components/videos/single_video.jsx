import React from "react";
import NavContainer from "../nav/nav_container";
import SideVideosContainer from "../videos/side_videos_container";
import LikesContainer from "../likes/like_container";
import CommentsContainer from "../comments/comments_container";
import {Link} from "react-router-dom";

class SingleVideo extends React.Component {
    constructor(props){
        super(props);
        this.okay = false;
        this.state = {
            arrBody: {},
            body: "",
            video_id: parseInt(this.props.match.params.videoId),
            author_id: parseInt(this.props.currentUser, 10),
        }
    }

    componentDidMount(){
        this.props.fetchVideo(this.props.match.params.videoId)
        this.props.fetchUsers()
        this.updateViewCount = true;
    }

    render(){
        const {video, user, comments, currentUser, deleteVideo, updateVideo, likes} = this.props;
        if(!video) return null;
        if(this.updateViewCount){
            video.viewCount += 1;
            const formData = new FormData();
            formData.append('video[view_count]', video.viewCount);
            formData.append('video[id]', video.id);
            this.updateViewCount = false;
            updateVideo(formData);
        } 
        if(video && !user) this.props.fetchUser(video.authorId);
        return(
            <div className="singleVideoPage">
                <div className="singleVideoContainer">    
                    <video className="singleVideo" controls>
                        <source src={this.props.video.uploadUrl}/>
                        Your browser does not support the video tag.
                    </video>
                    <div className="titleTag">{video.title}</div>
                    <div className="viewsAndLikes">
                        <div>
                            {video.viewCount} views  • {video.createdAt.slice(0,10)}
                        </div>
                        <div>
                            <LikesContainer likeable="Video" likeableId={video.id} currentUser={this.props.currentUser}/>
                        </div>
                    </div>
                    <Link to={this.props.user ? `/channel/${this.props.user.id}` : ""}>
                        {this.props.user ? this.props.user.username : ""}
                    </Link>
                    <div className="descTag">{video.description} </div>
                    <Link to="/"><button hidden={video.authorId.toString(10) === currentUser ? false : true} className="delete" onClick={() => deleteVideo(video.id)}>Delete</button></Link>
                    <CommentsContainer videoId={video.id} currentUser={currentUser} video={video} likes={likes}/>
                    <NavContainer/>
                </div>
                <div className="sideVids"><SideVideosContainer video={video}/></div>
                
            </div>
        )
    }
}

export default SingleVideo;