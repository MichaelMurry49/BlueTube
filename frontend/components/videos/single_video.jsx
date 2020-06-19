import React from "react";
import NavContainer from "../nav/nav_container";
import SideBarContainer from "../nav/sidebar_container";
import SideVideosContainer from "../videos/side_videos_container";
import CommentTreeContainer from "../comments/comment_tree_container";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faUserCircle } from '@fortawesome/free-solid-svg-icons';

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
        // debugger;
        let vid = this.props.fetchVideo(this.props.match.params.videoId)
        let com = this.props.fetchComments(this.props.match.params.videoId)
        let use = this.props.fetchUsers()
        let lik = this.props.fetchLikes()
        this.yes = true;
    }

    updateBody(e, commentId=null){
        // debugger;
        if(commentId === null){
            this.setState({ arrBody: {} });
            this.setState({body: e.target.value})
        } else {
            let temp = {};
            temp[commentId] = e.target.value;
            this.setState({body: ""});
            this.setState({arrBody: temp});
        }
        
    }

    createLike(like){
        this.okay = true;
        let match = Object.values(this.props.likes).filter(el => parseInt(like.liker_id, 10) === el.likerId &&
            like.likeable_id === el.likeableId && like.likeable_type === el.likeableType);
        if(match.length > 0){
            if(like.positive_like === match[0].positiveLike){
                this.props.deleteLike(match[0].id);
            } else {
                like.id = match[0].id;
                like.liker_id = parseInt(like.liker_id, 10);
                this.props.updateLike(like);
            }
        } else {
                this.props.createLike(like);
        }
    }

    createComment(parentId){
        if(parentId !== null){
            let comment = {body: this.state.arrBody[parentId], video_id: this.state.video_id, 
                author_id: this.state.author_id, parent_id: parentId}
            // delete this.state.arrBody;
            this.setState({ arrBody: {} });
            this.setState({body: ""})
            this.props.createComment(comment).then(() => this.props.fetchComments(this.props.match.params.videoId)).then(() => this.props.fetchVideo(this.props.match.params.videoId));
        } else {
            delete this.state.arrBody;
            let comment = this.state;
            this.setState({arrBody: {}});
            this.setState({ body: "" });
            this.props.createComment(comment).then(() => this.props.fetchComments(this.props.match.params.videoId)).then(() => this.props.fetchVideo(this.props.match.params.videoId));
        }
        
        
    }

    renderComment(comment){
        // debugger;
        if(!comment) return null;
        // debugger;
        return(
            <div className="comment">
                <div className="username">{this.props.users[comment.authorId] ? this.props.users[comment.authorId].username : ""}</div>
                <div>{comment.body}</div>
                <button className="like" onClick={() => this.createLike({ liker_id: this.props.currentUser, likeable_id: comment.id, likeable_type: "Comment", positive_like: true })}>
                    <FontAwesomeIcon icon={faThumbsUp} />
                </button>
                {Object.values(this.props.likes).filter(like => {
                    return (like.likeableId === comment.id &&
                        like.likeableType === "Comment" &&
                        like.positiveLike === true)
                }).length}
                <button className="like" onClick={() => this.createLike({ liker_id: this.props.currentUser, likeable_id: comment.id, likeable_type: "Comment", positive_like: false })} >
                    <FontAwesomeIcon icon={faThumbsDown} />
                </button>
                {Object.values(this.props.likes).filter(like => {
                    return (like.likeableId === comment.id &&
                        like.likeableType === "Comment" &&
                        like.positiveLike === false)
                }).length}
                <div className="reply">
                    <input className="chatText" placeHolder="Add a public reply..." value={this.state.arrBody[comment.id] ? this.state.arrBody[comment.id] : ""} onChange={e => this.updateBody(e, comment.id)} />
                    <button className="createComment" onClick={() => this.createComment(comment.id)}>REPLY</button>
                </div>

                {comment.comments ? comment.comments.map(childId => {
                    return <div className="childComment">
                        {
                            this.props.comments[childId]  && this.props.users ?
                            <div className="username">{this.props.users[this.props.comments[childId].authorId] ? this.props.users[this.props.comments[childId].authorId].username : ""}</div> :
                            ""
                        }
                        {this.props.comments[childId] ? 
                            <div>
                                <div>{this.props.comments[childId].body}</div>
                                <button className="like" onClick={() => this.createLike({ liker_id: this.props.currentUser, likeable_id: childId, likeable_type: "Comment", positive_like: true })}>
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                </button>
                                {Object.values(this.props.likes).filter(like => {
                                    return (like.likeableId === childId &&
                                        like.likeableType === "Comment" &&
                                        like.positiveLike === true)
                                }).length}
                                <button className="like" onClick={() => this.createLike({ liker_id: this.props.currentUser, likeable_id: childId, likeable_type: "Comment", positive_like: false })} >
                                    <FontAwesomeIcon icon={faThumbsDown} />
                                </button>
                                {Object.values(this.props.likes).filter(like => {
                                    return (like.likeableId === childId &&
                                        like.likeableType === "Comment" &&
                                        like.positiveLike === false)
                                }).length}
                            </div> : ""}
                    </div>
                }) : ""}
            </div>
        )
    }

    render(){
        const {video, user, comments, currentUser, deleteVideo, updateVideo, likes} = this.props;
        if(!video) return null;
        if(this.yes){
            video.viewCount += 1;
            const formData = new FormData();
            formData.append('video[view_count]', video.viewCount);
            formData.append('video[id]', video.id);
            this.yes = false;
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
                            <button className="like" onClick={() => this.createLike({liker_id: currentUser, likeable_id: this.props.video.id, likeable_type: "Video", positive_like: true})}>
                                <FontAwesomeIcon icon={faThumbsUp} />
                            </button> 
                            {Object.values(likes).filter(like => {
                                return (like.likeableId === video.id &&
                                    like.likeableType === "Video" &&
                                    like.positiveLike === true)
                            }).length}
                            <button className="like" onClick={() => this.createLike({liker_id: currentUser, likeable_id: this.props.video.id, likeable_type: "Video", positive_like: false})} >
                                <FontAwesomeIcon icon={faThumbsDown} />
                            </button>
                            {Object.values(likes).filter(like => {
                                return (like.likeableId === video.id &&
                                like.likeableType === "Video" &&
                                like.positiveLike === false)
                            }).length}
                        </div>
                    </div>
                    <Link to={this.props.user ? `/channel/${this.props.user.id}` : ""}>
                        {this.props.user ? this.props.user.username : ""}
                    </Link>
                    <div className="descTag">{video.description} </div>
                    <Link to="/"><button hidden={video.authorId.toString(10) === currentUser ? false : true} className="delete" onClick={() => deleteVideo(video.id)}>Delete</button></Link>
                    
                    {/* <CommentTreeContainer video={video}/> */}
                    <input className="chatText" type="text" placeHolder="Add a public comment..." value={this.state.body} onChange={e => this.updateBody(e)}/>
                    <button className="createComment" onClick={() => this.createComment(null)}>COMMENT</button>
                    <div className="comments">
                        {video.comments.map(commentId => {
                            if(!comments[commentId]) return "";
                            return comments[commentId].parentId === null ? this.renderComment(comments[commentId]) : "";
                        })}
                    </div>
                    <NavContainer/>
                
                </div>
                <div className="sideVids"><SideVideosContainer/></div>
                
            </div>
        )
    }
}

export default SingleVideo;