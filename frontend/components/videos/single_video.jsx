import React from "react";
import NavContainer from "../nav/nav_container";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

class SingleVideo extends React.Component {
    constructor(props){
        super(props);
        this.addedComment = false;
        this.commentCount = Object.values(this.props.comments).length
        this.lastCommentCount = this.commentCount;

        this.arrBody = {};
        this.state = {
            body: "",
            video_id: parseInt(this.props.match.params.videoId),
            author_id: parseInt(this.props.currentUser, 10),
        }
    }

    componentDidMount(){
        // debugger;
        let vid = this.props.fetchVideo(this.props.match.params.videoId)
        let com = this.props.fetchComments(this.props.match.params.videoId)
        // this.props.fetchUser(1)
        this.yes = true;
        
        

        // this.props.fetchVideo("a");
    }

    updateBody(e, commentId=null){
        if(commentId === null){
            this.setState({body: e.target.value})
        } else {
            this.arrBody[commentId] = e.target.value;
        }
        
    }

    createLike(like){
        // this.props.video.likes.filter(l => {
        //     l[likes === ]
        // } )
        // this.props.createLike(like);
    }

    createComment(parentId){
        this.lastCommentCount = Object.values(this.props.comments).length;
        this.commentCount = this.lastCommentCount + 1;
        // this.commentCount += 1;
        this.props.fetchComments(this.props.match.params.videoId);
        if(parentId !== null){
            let comment = {body: this.arrBody[parentId], video_id: this.state.video_id, 
                author_id: this.state.author_id, parent_id: parentId}
            this.arrBody = {};
            this.props.createComment(comment);
        } else {
            let comment = this.state;
            this.setState({ body: "" });
            this.props.createComment(comment);
        }
        
        
    }

    renderComment(comment){
        // debugger;
        if(!comment) return null;
        // debugger;
        return(
            <div className="comment">
                {comment.body}
                <div className="reply">
                    <input placeHolder="Add a public reply..." value={this.arrBody[comment.id]} onChange={e => this.updateBody(e, comment.id)} />
                    <button onClick={() => this.createComment(comment.id)}>REPLY</button>
                </div>
                
                {comment.comments ? comment.comments.map(childId => {
                    return <div className="childComment">
                        {this.props.comments[childId] ? this.props.comments[childId].body : ""}
                        <div className="reply">
                            <button>REPLY</button>
                            <form>
                                <input placeHolder="Add a public reply..." value={this.arrBody[childId]} onChange={e => this.updateBody(e)} />
                                <button onClick={() => this.createComment(comment.id)}>REPLY</button>
                            </form>
                        </div>
                    </div>
                }) : ""}
            </div>
        )
    }

    render(){
        if (this.commentCount > this.lastCommentCount && this.commentCount === Object.values(this.props.comments).length){
            debugger;
            this.props.fetchComments(this.props.match.params.videoId);
            this.props.fetchVideo(this.props.match.params.videoId);
            this.lastCommentCount += 1;
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
                        <button onClick={this.createLike({liker_id: currentUser, likeable_id: this.videoId, likeable_type: "Video", positive_like: true})}>
                            <FontAwesomeIcon icon={faThumbsUp} />
                        </button> 
                        {video.likes.filter(like => like.positiveLike)}
                        <FontAwesomeIcon icon={faThumbsDown} />
                    </div>
                </div>
                <div>{this.props.user ? this.props.user.username : ""}</div>
                <div className="descTag">{video.description} </div>
                <Link to="/"><button hidden={video.authorId.toString(10) === currentUser ? false : true} className="delete" onClick={() => deleteVideo(video.id)}>Delete</button></Link>
                <input type="text" placeHolder="Add a public comment..." value={this.state.body} onChange={e => this.updateBody(e)}/>
                <button className="createComment" onClick={() => this.createComment(null)}>COMMENT</button>
                <div className="comments">
                    {video.comments.map(commentId => {
                        if(!comments[commentId]) return "";
                        return comments[commentId].parentId === null ? this.renderComment(comments[commentId]) : "";
                        // return comments[commentId] ? comments[commentId].body : "";
                    })}
                </div>
                <NavContainer/>
               
            </div>
        )
    }
}

export default SingleVideo;