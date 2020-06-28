import React from "react";
import { Link } from "react-router-dom";
import LikesContainer from "../likes/like_container";


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
        this.props.fetchComments(this.state.videoId);
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
            this.props.createComment(comment).then(() => this.props.fetchComments(this.props.videoId)).then(() => this.props.fetchVideo(this.props.videoId));
        } else {
            delete this.state.arrBody;
            let comment = this.state;
            this.setState({ arrBody: {} });
            this.setState({ body: "" });
            this.props.createComment(comment).then(() => this.props.fetchComments(this.props.videoId)).then(() => this.props.fetchVideo(this.props.videoId));
        }


    }

    renderComment(comment) {
        if (!comment) return null;
        return (
            <div className="comment">
                <Link to={`/channel/${comment.authorId}`} className="username">{this.props.users[comment.authorId] ? this.props.users[comment.authorId].username : ""}</Link>
                <div>{comment.body}</div>
                <LikesContainer likeable="Comment" likeableId={comment.id} currentUser={this.props.currentUser} />
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
                                <LikesContainer likeable="Comment" likeableId={childId} currentUser={this.props.currentUser} />
                            </div> : ""}
                    </div>
                }) : ""}
            </div>
        )
    }

    render(){
        const { video, comments } = this.props;
        return(
            <div class="commentBox">
                <div class="main-reply">
                    <input className="chatText" type="text" placeHolder="Add a public comment..." value={this.state.body} onChange={e => this.updateBody(e)} />
                    <button className="createComment" onClick={() => this.createComment(null)}>COMMENT</button>
                </div>
                
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