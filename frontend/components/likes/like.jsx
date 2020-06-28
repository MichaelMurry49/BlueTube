import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

class Like extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        // this.props.fetchComments(this.props.video.id);
        this.props.fetchLikes();
        // this.props.fetchUsers();
    }

    createLike(like) {
        // this.okay = true;
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
            debugger;
            this.props.createLike(like);
        }
    }

    render(){
        let {likeable, likeableId, likes} = this.props;
        return(
            <div>
                <button className="like" onClick={() => this.createLike({ liker_id: this.props.currentUser, likeable_id: likeableId, likeable_type: likeable, positive_like: true })}>
                    <FontAwesomeIcon icon={faThumbsUp} />
                </button>
                {Object.values(likes).filter(like => {
                    return (like.likeableId === likeableId &&
                        like.likeableType === likeable &&
                        like.positiveLike === true)
                }).length}
                <button className="like" onClick={() => this.createLike({ liker_id: this.props.currentUser, likeable_id: likeableId, likeable_type: likeable, positive_like: false })} >
                    <FontAwesomeIcon icon={faThumbsDown} />
                </button>
                {Object.values(likes).filter(like => {
                    return (like.likeableId === likeableId &&
                        like.likeableType === likeable &&
                        like.positiveLike === false)
                }).length}
            </div>
        ) 
    }

}

export default Like;