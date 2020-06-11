import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

class Like extends React.Component {
    constructor(props) {
        super(props);
        this.posLikeCount = Object.values(this.props.likes).filter(like => like.positiveLike).length;
        this.negLikeCount = Object.values(this.props.likes).length - this.positiveLikeCount;
        this.lastPosLikeCount = this.posLikeCount;
        this.lastNegLikeCount = this.negLikeCount;
        // this.lastLikeCount = this.likeCount;
        this.okay = false;
    }

    componentDidMount(){
        this.props.fetchComments(this.props.video.id);
        this.props.fetchLikes();
    }

    createLike(like) {
        this.okay = true;
        let match = Object.values(this.props.likes).filter(el => parseInt(like.liker_id, 10) === el.likerId &&
            like.likeable_id === el.likeableId && like.likeable_type === el.likeableType);
        if (match.length > 0) {
            if (like.positive_like === match[0].positiveLike) {
                // debugger
                if (like.positive_like) {
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

    render(){
        let {childId} = this.props;
        if (((this.posLikeCount !== this.lastPosLikeCount &&
            this.posLikeCount === Object.values(this.props.likes).filter(like => like.positiveLike).length) ||
            (this.negLikeCount !== this.lastNegLikeCount &&
                this.negLikeCount === Object.values(this.props.likes).filter(like => !like.positiveLike).length)) && this.okay) {
            this.props.fetchComments(this.props.likeable.id);
            this.props.fetchLikes();
            // this.props.fetchVideo();
            this.okay = false;
            // this.props.fetchVideo(this.props.match.params.videoId);
            this.lastNegLikeCount = this.negLikeCount;
            this.lastPosLikeCount = this.posLikeCount;
        }
        return(
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
            </div>
        ) 
    }

}

export default Like;