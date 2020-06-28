import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import LikeContainer from "../likes/like_container";


class Comments extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            arrBody: {},
            body: "",
            video_id: props.videoId,
            author_id: parseInt(props.currentUser, 10),
        }
    }

    componentDidMount(){
        this.props.fetchComments(this.state.videoId)
        this.props.fetchLikes()
    }

    updateBody(e, commentId = null) {
        if (commentId === null) {
            this.setState({ arrBody: {} });
            this.setState({ body: e.target.value })
        } else {
            let temp = {};
            temp[commentId] = e.target.value;
            this.setState({ body: "" });
            this.setState({ arrBody: temp });
        }
    }

    createComment(parentId) {
        if (parentId !== null) {
            let comment = {
                body: this.state.arrBody[parentId], video_id: this.state.video_id,
                author_id: this.state.author_id, parent_id: parentId
            }
            this.setState({ arrBody: {} });
            this.setState({ body: "" })
            this.props.createComment(comment).then(() => this.props.fetchComments(this.props.match.params.videoId)).then(() => this.props.fetchVideo(this.props.match.params.videoId));
        } else {
            delete this.state.arrBody;
            let comment = this.state;
            this.setState({ arrBody: {} });
            this.setState({ body: "" });
            this.props.createComment(comment).then(() => this.props.fetchComments(this.props.match.params.videoId)).then(() => this.props.fetchVideo(this.props.match.params.videoId));
        }
    }

    renderComment(comment) {
        if (!comment) return null;
        return (
            <div className="comment">
                <Link to={`/channel/${comment.authorId}`} className="username">{this.props.users[comment.authorId] ? this.props.users[comment.authorId].username : ""}</Link>
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
                            this.props.comments[childId] && this.props.users ?
                                <Link to={`/channel/${this.props.comments[childId].authorId}`} className="username">{this.props.users[this.props.comments[childId].authorId] ? this.props.users[this.props.comments[childId].authorId].username : ""}</Link> :
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

    createLike(like) {
        this.okay = true;
        let match = Object.values(this.props.likes).filter(el => parseInt(like.liker_id, 10) === el.likerId &&
            like.likeable_id === el.likeableId && like.likeable_type === el.likeableType);
        if (match.length > 0) {
            if (like.positive_like === match[0].positiveLike) {
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

    render(){
        const { video, user, comments, currentUser, deleteVideo, updateVideo, likes } = this.props;
        return(
            <div>
                <input className="chatText" type="text" placeHolder="Add a public comment..." value={this.state.body} onChange={e => this.updateBody(e)} />
                <button className="createComment" onClick={() => this.createComment(null)}>COMMENT</button>
                <div className="comments">
                    {video.comments.map(commentId => {
                        if (!comments[commentId]) return "";
                        return comments[commentId].parentId === null ? this.renderComment(comments[commentId]) : "";
                    })}
                </div>
            </div>
        )
    }

}

export default Comments;