import React from "react";
import NavContainer from "../nav/nav_container";
import {Link} from "react-router-dom"

class SingleVideo extends React.Component {
    constructor(props){
        super(props);
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
        this.yes = true;
        
        

        // this.props.fetchVideo("a");
    }

    updateBody(e){
        this.setState({body: e.target.value})
    }

    createComment(parentId){
        if(parentId !== null){
             this.setState({parentId: parentId})
        }
        let comment = this.state;
        this.setState({ body: "" });
        this.props.createComment(comment);
        
    }

    renderComment(comment){
        debugger;
        if(!comment) return null;
        // debugger;
        return(
            <div className="comment">
                {comment.body}
                <button>reply</button>
                {comment.coments ? comment.comments.map(childId => {
                    return renderComment(this.props.fetchComment(childId));
                }) : ""}
            </div>
        )
    }

    render(){
        const {video, author, comments, currentUser, deleteVideo, updateVideo} = this.props;
        if(!video) return null;
        if(this.yes){
            video.viewCount += 1;
            const formData = new FormData();
            formData.append('video[view_count]', video.viewCount);
            formData.append('video[id]', video.id);
            this.yes = false;
            updateVideo(formData);
        } 
        // debugger
        let space = " ";
        return(
            <div className="singleVideoContainer">    
                <video className="singleVideo" controls>
                    <source src={this.props.video.uploadUrl}/>
                    Your browser does not support the video tag.
                </video>
                <div className="titleTag">{video.title}</div>
                <div className="viewsAndLikes">
                    <div>
                        {video.viewCount} views  • {Date(video.createdAt).split(" ").slice(1, 4).join(" ")}
                    </div>
                    <div>
                        Likes will go here
                    </div>
                </div>
                <div>{this.props.users && video && this.props.users[video.authorId] ? this.props.users[video.authorId].username : ""}</div>
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