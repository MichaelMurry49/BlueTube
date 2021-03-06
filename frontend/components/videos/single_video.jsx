import React from "react";
import NavContainer from "../nav/nav_container";
import SideVideosContainer from "../videos/side_videos_container";
import LikesContainer from "../likes/like_container";
import PopupContainer from "../nav/popup_container";
import CommentsContainer from "../comments/comments_container";
import VideoFrameContainer from "./video_frame_container";
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
                <PopupContainer task={"Update Video"} videoId={video.id}/>
                <div className="singleVideoContainer">
                    <video className="singleVideo" src={video.uploadUrl} controls>
                        {/* <source src={video.uploadUrl}/> */}
    
                        Your browser does not support the video tag.
                    </video>
                    {/* <MiniVidBoxContainer userId={video.authorId} video={video} /> */}
                    {/* <VideoFrameContainer userId={video.authorId} video={video} /> */}
                    <div className="titleTag">{video.title}</div>
                    <div className="viewsAndLikes">
                        <div>
                            {video.viewCount} views  • {video.createdAt.slice(0,10)}
                        </div>
                        <div>
                            <LikesContainer likeable="Video" likeableId={video.id} obj={this.props.video}/>
                        </div>
                    </div>
                    <div className="temp">
                        <span>
                            <Link to={this.props.user ? `/channel/${this.props.user.id}` : ""}>
                                {this.props.user ? this.props.user.username : ""}
                            </Link>
                            <div className="descTag">{video.description} </div>
                        </span>
                        <button hidden={video.authorId.toString(10) === currentUser ? false : true} className="updateVideo" onClick={this.props.openPopup}>Edit</button>
                    </div>
                    <CommentsContainer videoId={video.id} currentUser={currentUser} video={video} likes={likes}/>
                    <NavContainer/>
                </div>
                <div className="sideVids"><SideVideosContainer video={video}/></div>
                
            </div>
        )
    }
}

export default SingleVideo;