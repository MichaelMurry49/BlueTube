import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import LikeContainer from "../likes/like_container";


class CommentTree extends React.Component {
    constructor(props) {
        super(props);
        this.addedComment = false;
        this.commentCount = Object.values(this.props.comments).length
        this.lastCommentCount = this.commentCount;

        this.state = {
            arrBody: {},
            body: "",
            video_id: this.props.video.id,
            author_id: parseInt(this.props.currentUser, 10),
        }

    }

    componentDidMount(){
        let com = this.props.fetchComments(this.props.video.id)
        let use = this.props.fetchUsers()
    }

    updateBody(e, commentId = null) {
        if (commentId === null) {
            this.setState({ body: e.target.value })
        } else {
            let temp = Object.assign({}, this.state.arrBody);
            temp[commentId] = e.target.value;
            this.setState({ arrBody: temp });
        }

    }

    createComment(parentId) {
        this.lastCommentCount = Object.values(this.props.comments).length;
        this.commentCount = this.lastCommentCount + 1;
        // this.commentCount += 1;
        this.props.fetchComments(this.props.video.id);
        if (parentId !== null) {
            // debugger
            let comment = {
                body: this.state.arrBody[parentId], video_id: this.state.video_id,
                author_id: this.state.author_id, parent_id: parentId
            }
            // this.arrBody = {};
            delete this.state.arrBody;
            this.setState({ arrBody: {} });
            this.props.createComment(comment);
        } else {
            delete this.state.arrBody;
            let comment = this.state;
            // this.state.arrBody = {};
            this.setState({ arrBody: {} });
            this.setState({ body: "" });
            this.props.createComment(comment);
        }


    }

    renderComment(comment) {
        // debugger;
        if (!comment) return null;
        // debugger;
        return (
            <div className="comment">
                <div className="username">{this.props.users[comment.authorId] ? this.props.users[comment.authorId].username : ""}</div>
                {comment.body}
                <button className="like" onClick={() => this.createLike({ liker_id: this.props.currentUser, likeable_id: comment.id, likeable_type: "Comment", positive_like: true })}>
                    <FontAwesomeIcon icon={faThumbsUp} />
                </button>
                {comment.likes.filter(like => like).length}
                <button className="like" onClick={() => this.createLike({ liker_id: this.props.currentUser, likeable_id: comment.id, likeable_type: "Comment", positive_like: false })} >
                    <FontAwesomeIcon icon={faThumbsDown} />
                </button>
                {comment.likes.filter(like => !like).length}
                <div className="reply">
                    <input placeHolder="Add a public reply..." value={this.state.arrBody[comment.id]} onChange={e => this.updateBody(e, comment.id)} />
                    <button className="createComment" onClick={() => this.createComment(comment.id)}>REPLY</button>
                </div>
                {comment.comments ? comment.comments.map(childId => {
                    return <div className="childComment">
                        {
                            this.props.comments[childId] && this.props.users ?
                                <div className="username">{this.props.users[this.props.comments[childId].authorId] ? this.props.users[this.props.comments[childId].authorId].username : ""}</div> :
                                ""
                        }
                        {this.props.comments[childId] ?
                            <LikeContainer video={this.props.video} childId={childId}/>
                            // <div>
                            //     <div>{this.props.comments[childId].body}</div>
                            //     <button className="like" onClick={() => this.createLike({ liker_id: this.props.currentUser, likeable_id: childId, likeable_type: "Comment", positive_like: true })}>
                            //         <FontAwesomeIcon icon={faThumbsUp} />
                            //     </button>
                            //     {this.props.comments[childId].likes.filter(like => like).length}
                            //     <button className="dislike" onClick={() => this.createLike({ liker_id: this.props.currentUser, likeable_id: childId, likeable_type: "Comment", positive_like: false })} >
                            //         <FontAwesomeIcon icon={faThumbsDown} />
                            //     </button>
                            //     {this.props.comments[childId].likes.filter(like => !like).length}
                            // </div> 
                            : ""}
                    </div>
                }) : ""}
            </div>
        )
    }

    render() {
        const { video, comments } = this.props;
        // if (this.commentCount > this.lastCommentCount && this.commentCount === Object.values(this.props.comments).length) {
        //     // debugger;
        //     this.props.fetchComments(this.props.video.id);
        //     // this.props.fetchVideo(this.props.match.params.videoId);
        //     this.lastCommentCount += 1;
        // }

        return(
            <div>
                <input type="text" placeHolder="Add a public comment..." value={this.state.body} onChange={e => this.updateBody(e)} />
                <button className="createComment" onClick={() => this.createComment(null)}>COMMENT</button>
                <div className="comments">
                    {video.comments.map(commentId => {
                        if (!comments[commentId]) return "";
                        return comments[commentId].parentId === null ? this.renderComment(comments[commentId]) : "";
                        // return comments[commentId] ? comments[commentId].body : "";
                    })}
                </div>
            </div>
        )

        
            

    }


}

export default CommentTree;