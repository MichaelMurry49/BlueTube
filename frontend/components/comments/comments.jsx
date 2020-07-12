import React from "react";
import { Link } from "react-router-dom";
import LikesContainer from "../likes/like_container";
import Time from "../time";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


class Comments extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            arrBody: {},
            childComments: new Proxy({}, {
                get: function (object, property) {
                    return object.hasOwnProperty(property) ?
                        object[property] : true;
                }
            }),
            arrHidden: new Proxy({}, {
                get: function(object, property) {
                    return object.hasOwnProperty(property) ?
                        object[property] : true;
                }
            }),
            hidden: true,
            body: "",
            video_id: props.videoId,
            author_id: parseInt(props.currentUser, 10),
        }
        this.proxyReset = new Proxy({}, {
            get: function (object, property) {
                return object.hasOwnProperty(property) ?
                    object[property] : true;
            }
        })
        // this.hidden = true;
    }

    componentDidMount(){
        this.props.fetchComments(this.state.videoId);
    }

    updateBody(e, commentId = null) {
        // this.setState({ hidden: false })
        if (commentId === null) {
            this.setState({ hidden: false })
            this.setState({ arrHiden: this.proxyReset })
            this.setState({ arrBody: {} });
            this.setState({ body: e.target.value })
        } else {
            let temp = {};
            temp[commentId] = e.target.value;
            this.setState({ body: "" });
            this.setState({ arrBody: temp });
            temp = this.proxyReset;
            temp[commentId] = false;
            this.setState({ hidden: true });
            this.setState({ arrHidden: temp })
        }

    }

    toggleComments(commentId){
        this.state.childComments[commentId] = !this.state.childComments[commentId];
        this.setState({childComments: this.state.childComments})
    }

    unHide(commentId){
        if(commentId === null){
            this.setState({arrHiden: this.proxyReset})
            this.setState({hidden: false})
        } else {
            let temp = this.proxyReset;
            temp[commentId] = false;
            this.setState({hidden: true});
            this.setState({arrHidden: temp})
        }
    }

    cancel(commentId){
        if(commentId === null){
            this.setState({hidden: true})
            this.setState({ body: "" });
        } else {
            console.log(commentId)
            this.state.arrHidden[commentId] = true;
            console.log(this.state.arrHidden)
            this.setState({arrHidden: this.state.arrHidden});
            this.setState({arrBody: {}})
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
            this.cancel();
        }


    }

    renderComment(comment) {
        if (!comment) return null;
        console.log(this.state.arrHidden);
        return (
            <div className="comment">
                <Link to={`/channel/${comment.authorId}`} className="username">{this.props.users[comment.authorId] ? this.props.users[comment.authorId].username : ""}</Link> <Time start={comment.createdAt}/>
                <div>{comment.body}</div>
                <div className="likeReply">
                    <LikesContainer likes={this.props.likes} likeable="Comment" likeableId={comment.id} currentUser={this.props.currentUser} />
                    <span onClick={() => this.unHide(comment.id)}>REPLY</span>
                </div>
                
                
            
                <div className="reply">
                    <input hidden={this.state.arrHidden[comment.id]} className="chatText" placeHolder="Add a public reply..." value={this.state.arrBody[comment.id] ? this.state.arrBody[comment.id] : ""} onChange={e => this.updateBody(e, comment.id)} />
                    <div>
                        <button hidden={this.state.arrHidden[comment.id]} className="cancel" onClick={() => this.cancel(comment.id)}>Cancel</button>
                        <button hidden={this.state.arrHidden[comment.id]} className="createComment" onClick={() => this.createComment(comment.id)}>REPLY</button>
                    </div>
                        
                </div>

                {comment.comments?.length > 0 ? <button className="toggleComments" onClick={() => this.toggleComments(comment.id)}> {this.state.childComments[comment.id] ? <div><FontAwesomeIcon icon={faArrowDown} /> {`View ${comment.comments.length} replies`}</div> : <div><FontAwesomeIcon icon={faArrowUp} /> {`Hide ${comment.comments.length} replies`}</div>}</button> : ""}
                <div hidden={this.state.childComments[comment.id]}>
                   {comment.comments ? comment.comments.map(childId => {
                        return <div className="childComment">
                            {
                                this.props.comments[childId] && this.props.users ?
                                    <Link to={`/channel/${this.props.comments[childId].authorId}`} className="username">{this.props.users[this.props.comments[childId].authorId] ? this.props.users[this.props.comments[childId].authorId].username : ""}</Link> :
                                    ""
                            }
                            <Time start={this.props.comments[childId].createdAt} />
                            {this.props.comments[childId] ?
                                <div>
                                    <div>{this.props.comments[childId].body}</div>
                                    <div className="likeReply">
                                        <LikesContainer likes={this.props.likes} likeable="Comment" likeableId={childId} currentUser={this.props.currentUser} />
                                        <span onClick={() => this.unHide(comment.id)}>REPLY</span>
                                    </div>
                                </div> : ""}
                        </div>
                    }) : ""} 
                </div>
                
            </div>
        )
    }

    render(){
        const { video, comments } = this.props;
        return(
            <div class="commentBox">
                <div class="main-reply">
                    <input className="chatText" type="text" placeHolder="Add a public comment..." value={this.state.body} onSelect={() => this.unHide(null)} onChange={e => this.updateBody(e)} />
                    <div>
                        <button hidden={this.state.hidden} className="cancel" onClick={() => this.cancel(null)}>Cancel</button>
                        <button className="createComment" hidden={this.state.hidden} onClick={() => this.createComment(null)}>COMMENT</button>
                    </div>
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