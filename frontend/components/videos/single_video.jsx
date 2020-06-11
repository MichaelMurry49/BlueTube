import React from "react";
import NavContainer from "../nav/nav_container";
import SideBarContainer from "../nav/sidebar_container";
import CommentTreeContainer from "../comments/comment_tree_container";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

class SingleVideo extends React.Component {
    constructor(props){
        super(props);
        this.addedComment = false;
        this.commentCount = Object.values(this.props.comments).length
        this.posLikeCount = Object.values(this.props.likes).filter(like => like.positiveLike).length;
        this.negLikeCount = Object.values(this.props.likes).length - this.positiveLikeCount;
        this.lastPosLikeCount = this.posLikeCount;
        this.lastNegLikeCount = this.negLikeCount;
        this.lastCommentCount = this.commentCount;
        this.lastLikeCount = this.likeCount;
        this.okay = false;

        // this.arrBody = {};
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
        // this.props.fetchUser(1)
        this.yes = true;
        
        

        // this.props.fetchVideo("a");
    }

    updateBody(e, commentId=null){
        if(commentId === null){
            this.setState({body: e.target.value})
        } else {
            let temp = Object.assign({}, this.state.arrBody);
            temp[commentId] = e.target.value;
            this.setState({arrBody: temp});
        }
        
    }

    createLike(like){
        // this.props.fetchLikes();
        // this.props.video.likes.filter(l => {
        //     l[likes === ]
        // } )
        // if(cUser && cUser.likes.includes)
        // debugger;
        // if(likes.filter())
        this.okay = true;
        let match = Object.values(this.props.likes).filter(el => parseInt(like.liker_id, 10) === el.likerId &&
            like.likeable_id === el.likeableId && like.likeable_type === el.likeableType);
        if(match.length > 0){
                if(like.positive_like === match[0].positiveLike){
                    // debugger
                    if(like.positive_like) {
                        // debugger
                        this.lastPosLikeCount = Object.values(this.props.likes).filter(like => like.positiveLike).length;
                        this.posLikeCount = this.lastPosLikeCount - 1;
                     } else {
                        this.lastNegLikeCount = Object.values(this.props.likes).filter(like => !like.positiveLike).length;
                        this.negLikeCount = this.lastNegLikeCount - 1;
                     }
                    //  debugger;
                    this.props.deleteLike(match[0].id);
                } else {
                    like.id = match[0].id;
                    like.liker_id = parseInt(like.liker_id, 10);
                    if (like.positive_like) {
                        this.lastPosLikeCount = Object.values(this.props.likes).filter(like => like.positiveLike).length;
                        this.posLikeCount = this.lastPosLikeCount + 1;
                        this.lastNegLikeCount = Object.values(this.props.likes).filter(like => !like.positiveLike).length;
                        this.negLikeCount = this.lastNegLikeCount - 1;
                    } else {
                        this.lastPosLikeCount = Object.values(this.props.likes).filter(like => like.positiveLike).length;
                        this.posLikeCount = this.lastPosLikeCount - 1;
                        this.lastNegLikeCount = Object.values(this.props.likes).filter(like => !like.positiveLike).length;
                        this.negLikeCount = this.lastNegLikeCount + 1;
                    }
                    this.props.updateLike(like);
                }
            } else {
                if (like.positive_like) {
                    this.lastPosLikeCount = Object.values(this.props.likes).filter(like => like.positiveLike).length;
                    this.posLikeCount = this.lastPosLikeCount + 1;
                } else {
                    this.lastNegLikeCount = Object.values(this.props.likes).filter(like => !like.positiveLike).length;
                    this.negLikeCount = this.lastNegLikeCount + 1;
                }
                 this.props.createLike(like);
            }
           
        this.props.fetchLikes();
       
    }

    createComment(parentId){
        this.lastCommentCount = Object.values(this.props.comments).length;
        this.commentCount = this.lastCommentCount + 1;
        // this.commentCount += 1;
        this.props.fetchComments(this.props.match.params.videoId);
        if(parentId !== null){
            // debugger
            let comment = {body: this.state.arrBody[parentId], video_id: this.state.video_id, 
                author_id: this.state.author_id, parent_id: parentId}
            // this.arrBody = {};
            delete this.state.arrBody;
            this.setState({ arrBody: {} });
            this.props.createComment(comment);
        } else {
            delete this.state.arrBody;
            let comment = this.state;
            // this.state.arrBody = {};
            this.setState({arrBody: {}});
            this.setState({ body: "" });
            this.props.createComment(comment);
        }
        
        
    }

    renderVideo(video){

    }

    renderComment(comment){
        // debugger;
        if(!comment) return null;
        // debugger;
        return(
            <div className="comment">
                <div className="username">{this.props.users[comment.authorId] ? this.props.users[comment.authorId].username : ""}</div>
                {comment.body}
                <div className="reply">
                    <input placeHolder="Add a public reply..." value={this.state.arrBody[comment.id]} onChange={e => this.updateBody(e, comment.id)} />
                    <button onClick={() => this.createComment(comment.id)}>REPLY</button>
                </div>
                <button className="like" onClick={() => this.createLike({ liker_id: this.props.currentUser, likeable_id: comment.id, likeable_type: "Comment", positive_like: true })}>
                    <FontAwesomeIcon icon={faThumbsUp} />
                </button>
                {comment.likes.filter(like => like).length}
                <button className="dislike" onClick={() => this.createLike({ liker_id: this.props.currentUser, likeable_id: comment.id, likeable_type: "Comment", positive_like: false })} >
                    <FontAwesomeIcon icon={faThumbsDown} />
                </button>
                {comment.likes.filter(like => !like).length}
                
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
                                {this.props.comments[childId].likes.filter(like => like).length}
                                <button className="dislike" onClick={() => this.createLike({ liker_id: this.props.currentUser, likeable_id: childId, likeable_type: "Comment", positive_like: false })} >
                                    <FontAwesomeIcon icon={faThumbsDown} />
                                </button>
                                {this.props.comments[childId].likes.filter(like => !like).length}
                            </div> : ""}
                        
                        {/* <div className="reply">
                            <button>REPLY</button>
                            <form>
                                <input placeHolder="Add a public reply..." value={this.arrBody[comment.id]} onChange={e => this.updateBody(e)} />
                                <button onClick={() => this.createComment(comment.id)}>REPLY</button>
                            </form>
                        </div> */}
                    </div>
                }) : ""}
            </div>
        )
    }

    render(){
        if (this.commentCount > this.lastCommentCount && this.commentCount === Object.values(this.props.comments).length){
            // debugger;
            this.props.fetchComments(this.props.match.params.videoId);
            this.props.fetchVideo(this.props.match.params.videoId);
            this.lastCommentCount += 1;
        }
        // Fetch likes and likeables if likes have been updated
        // debugger
        if (((this.posLikeCount !== this.lastPosLikeCount &&
             this.posLikeCount === Object.values(this.props.likes).filter(like => like.positiveLike).length)||
            (this.negLikeCount !== this.lastNegLikeCount &&
             this.negLikeCount === Object.values(this.props.likes).filter(like => !like.positiveLike).length)) && this.okay){
                this.props.fetchComments(this.props.match.params.videoId);
                this.props.fetchLikes();
                this.props.fetchVideo();
                this.okay = false;
                // this.props.fetchVideo(this.props.match.params.videoId);
                this.lastNegLikeCount = this.negLikeCount;
                this.lastPosLikeCount = this.posLikeCount;
        } 
        const {video, user, comments, currentUser, deleteVideo, updateVideo} = this.props;
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
                        {video.likes.filter(like => like).length}
                        <button className="dislike" onClick={() => this.createLike({liker_id: currentUser, likeable_id: this.props.video.id, likeable_type: "Video", positive_like: false})} >
                            <FontAwesomeIcon icon={faThumbsDown} />
                        </button>
                        {video.likes.filter(like => !like).length}
                    </div>
                </div>
                <Link to={this.props.user ? `/channel/${this.props.user.id}` : ""}>
                    {this.props.user ? this.props.user.username : ""}
                </Link>
                <div className="descTag">{video.description} </div>
                <Link to="/"><button hidden={video.authorId.toString(10) === currentUser ? false : true} className="delete" onClick={() => deleteVideo(video.id)}>Delete</button></Link>
                
                {/* <CommentTreeContainer video={video}/> */}
                <input type="text" placeHolder="Add a public comment..." value={this.state.body} onChange={e => this.updateBody(e)}/>
                <button className="createComment" onClick={() => this.createComment(null)}>COMMENT</button>
                <div className="comments">
                    {video.comments.map(commentId => {
                        if(!comments[commentId]) return "";
                        return comments[commentId].parentId === null ? this.renderComment(comments[commentId]) : "";
                        // return comments[commentId] ? comments[commentId].body : "";
                    })}
                </div>
                {/* <SideBarContainer/> */}
                <NavContainer/>
               
            </div>
        )
    }
}

export default SingleVideo;