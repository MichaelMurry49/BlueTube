import React from "react";
import { Link } from "react-router-dom";
import LikesContainer from "../likes/like_container";
import Time from "../time";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp, faSortAmountUp } from '@fortawesome/free-solid-svg-icons';

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
            hiddenSort: true,
            hiddenCommentOptions: -1,
            selectedSort: "newest",
            body: "",
            editBody: "",
            edit: -1,
            sortOptions: false,
        }
        this.proxyReset = new Proxy({}, {
            get: function (object, property) {
                return object.hasOwnProperty(property) ?
                    object[property] : true;
            }
        })
    }

    sortComments(sortBy){
        this.setState({sortOptions: false})
        if(sortBy === "newest"){
            this.props.video.comments.sort((a,b) => b-a)
        } else {
            this.props.video.comments.sort((a, b) => this.props.comments[b].likes.filter(like => like).length - this.props.comments[a].likes.filter(like => like).length)
        }
        this.setState({selectedSort: sortBy})
    }

    componentDidMount(){
        this.props.fetchComments(this.state.videoId);
    }

    updateBody(e, commentId = null, editBody = false) {
        if (commentId === null) {
            this.setState({ hidden: false })
            this.setState({ arrHiden: this.proxyReset })
            this.setState({ arrBody: {} });
            !editBody ? this.setState({ body: e.target.value }) : this.setState({ editBody: e.target.value})
        } else {
            let temp = {};
            temp[commentId] = e.target.value;
            this.setState({ body: "" });
            this.setState({ editBody: "" });
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

    deleteComment(id) {
        this.props.deleteComment(id).then(() => this.props.fetchComments());

    }

    editComment(comment){
        if (this.state.editBody !== "") {
            console.log("here")
            comment.body = this.state.editBody;
        } else {
            comment.body = "";
        }
        let c = {
            body: comment.body,
            id: comment.id
        }
        this.props.updateComment(c);
        this.setState({editBody: ""})
        this.setState({edit: -1})
        this.setState({hiddenCommentOptions: -1})
    }

    cancelEdit(){
        this.setState({ editBody: "" })
        this.setState({ edit: -1 })
        this.setState({ hiddenCommentOptions: -1 })
    }

    createComment(parentId) {
        if (parentId !== null) {
            let comment = {
                body: this.state.arrBody[parentId], video_id: this.props.videoId,
                author_id: this.state.author_id, parent_id: parentId
            }
            this.setState({ arrBody: {} });
            this.setState({ body: "" })
            this.props.createComment(comment).then(() => this.props.fetchComments(this.props.videoId)).then(() => this.props.fetchVideo(this.props.videoId));
            this.cancel(parentId)
        } else {
            delete this.state.arrBody;
            let comment = {
                body: this.state.body, video_id: this.props.videoId,
                author_id: parseInt(this.props.currentUser, 10), parent_id: null
            }
            this.setState({ arrBody: {} });
            this.setState({ body: "" });
            this.props.createComment(comment).then(() => this.props.fetchComments(this.props.videoId)).then(() => this.props.fetchVideo(this.props.videoId));
            this.cancel(null);
        }


    }

    renderComment(comment) {
        if (!comment) return null;
        console.log(this.state.arrHidden);
        return (
            <div className="commentSection">

            
            <div className="comment">
                {this.state.edit !== comment.id ? 
                    <div>
                        <Link to={`/channel/${comment.authorId}`} className="username">{this.props.users[comment.authorId] ? this.props.users[comment.authorId].username : ""}</Link> <Time start={comment.createdAt}/>
                        <div>{comment.body}</div>
                        <div className="likeReply">
                            <LikesContainer likeable="Comment" likeableId={comment.id} />
                            <span onClick={() => this.unHide(comment.id)}>REPLY</span>
                        </div>
                        <div className="tc">
                            <button className="e-d-comment" onClick={() => this.setState({hiddenCommentOptions: this.state.hiddenCommentOptions === comment.id ? -1 : comment.id})}>⁝</button>
                            <div className="comment-options" hidden={this.state.hiddenCommentOptions !== comment.id}>
                                {parseInt(this.props.currentUser,10) === comment.authorId ? 
                                <div><div className="uphalf-co"><button onClick={() => this.setState({edit: comment.id})}>Edit</button></div>
                                <div className="downhalf-co"><button onClick={() => this.props.deleteComment(comment.id)}>Delete</button></div></div>
                                : <div className="report-co"><button onClick={() => this.setState({hiddenCommentOptions: -1})}>Report</button></div> }
                            </div>
                        </div>
                    </div> :
                    <div className="reply">
                        <input className="chatText" placeHolder={comment.body} value={this.state.editBody } onChange={e => this.updateBody(e, null, true)} />
                        <div>
                            <button className="cancel" onClick={() => this.cancelEdit()}>Cancel</button>
                            <button className="createComment" onClick={() => this.editComment(comment)}>REPLY</button>
                        </div>

                    </div>
                }
                
                
                
            
                <div className="reply">
                    <input hidden={this.state.arrHidden[comment.id] || this.state.edit === comment.id} className="chatText" placeHolder="Add a public reply..." value={this.state.arrBody[comment.id] ? this.state.arrBody[comment.id] : ""} onChange={e => this.updateBody(e, comment.id)} />
                    <div>
                            <button hidden={this.state.arrHidden[comment.id] || this.state.edit === comment.id} className="cancel" onClick={() => this.cancel(comment.id)}>Cancel</button>
                            <button hidden={this.state.arrHidden[comment.id] || this.state.edit === comment.id} className="createComment" onClick={() => this.createComment(comment.id)}>REPLY</button>
                    </div>
                        
                </div>

                {comment.comments?.length > 0 ? <button className="toggleComments" onClick={() => this.toggleComments(comment.id)}> {this.state.childComments[comment.id] ? <div><FontAwesomeIcon icon={faSortDown} /> {`View ${comment.comments.length} replies`}</div> : <div><FontAwesomeIcon icon={faSortUp} /> {`Hide ${comment.comments.length} replies`}</div>}</button> : ""}
                <div  className="childComments" hidden={this.state.childComments[comment.id]}>
                   {comment.comments ? comment.comments.map(childId => {
                        return <div>{this.state.edit && this.props.comments[childId] ? <div className="childComment">
                            {
                                this.props.comments[childId] && this.props.users ?
                                    <Link to={`/channel/${this.props.comments[childId].authorId}`} className="username">{this.props.users[this.props.comments[childId].authorId] ? this.props.users[this.props.comments[childId].authorId].username : ""}</Link> :
                                    ""
                            }
                
                            <Time start={this.props.comments[childId].createdAt} />
                            {this.props.comments[childId] ?
                                this.state.edit !== childId ? <div className="childcommenttemp">
                                    <div>{this.props.comments[childId].body}</div>
                                    <div className="likeReply">
                                        <LikesContainer likeable="Comment" likeableId={childId} />
                                        <span onClick={() => this.unHide(comment.id)}>REPLY</span>
                                    </div>
                                    < div className="tc">
                                        <button className="e-d-comment" onClick={() => this.setState({ hiddenCommentOptions: this.state.hiddenCommentOptions === childId ? -1 : childId })}>⁝</button>
                                        <div className="comment-options" hidden={this.state.hiddenCommentOptions !== childId}>
                                            {parseInt(this.props.currentUser, 10) === this.props.comments[childId].authorId ?
                                                <div><div className="uphalf-co"><button onClick={() => this.setState({ edit: childId })}>Edit</button></div>
                                                    <div className="downhalf-co"><button onClick={() => this.deleteComment(childId)}>Delete</button></div></div>
                                                : <div className="report-co"><button onClick={() => this.setState({ hiddenCommentOptions: -1 })}>Report</button></div>}
                                        </div>
                                    </div>
                                </div> : 
                                <div className="reply">
                                    <input className="chatText" placeHolder={comment.body} value={this.state.editBody} onChange={e => this.updateBody(e, null, true)} />
                                    <div>
                                        <button className="cancel" onClick={() => this.cancelEdit()}>Cancel</button>
                                        <button className="createComment" onClick={() => this.editComment(this.props.comments[childId])}>REPLY</button>
                                    </div>

                                </div> : ""}
                        </div> : ""}</div>
                    }) : ""} 
                </div>
            </div>
            </div>
        )
    }

    render(){
        const { video, comments } = this.props;
        return(
            <div class="commentBox">
                <div class="commentHeader">
                    <span>{video.comments.length} Comments</span>
                    <button onClick={() => this.setState({ hiddenSort: !this.state.hiddenSort })}>
                        <FontAwesomeIcon icon={faSortAmountUp} />
                        <span>SORT BY</span>
                        <br/>
                        <div hidden={this.state.hiddenSort}>
                            <button onClick={() => this.sortComments("most likes")}>Top comments</button>
                            <br/>
                            <button onClick={() => this.sortComments("newest")}>Newest first</button>
                        </div>
                    </button>
                        
                </div>
                <div></div>
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