import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

class Like extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchLikes();
    }

    createLike(like) {
        let match = Object.values(this.props.likes).filter(el => parseInt(like.liker_id, 10) === parseInt(el.likerId, 10) &&
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
        let {likeable, likeableId, likes, currentUser} = this.props;
        let posLikes = Object.values(likes).filter(like => {
            return (like.likeableId === likeableId &&
                like.likeableType === likeable &&
                like.positiveLike === true)
        })
        let negLikes = Object.values(likes).filter(like => {
            return (like.likeableId === likeableId &&
                like.likeableType === likeable &&
                like.positiveLike === false)
        })
        return(
            <div>
                {posLikes.filter(like => like.likerId === parseInt(currentUser,10)).length > 0 ?
                    <button className={"like " + "blue"} onClick={() => this.createLike({ liker_id: this.props.currentUser, likeable_id: likeableId, likeable_type: likeable, positive_like: true })}>
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </button> :
                    <button className={"like " + "gray"} onClick={() => this.createLike({ liker_id: this.props.currentUser, likeable_id: likeableId, likeable_type: likeable, positive_like: true })}>
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </button>
                }
                {posLikes.length}  
                {negLikes.filter(like => like.likerId === parseInt(currentUser, 10)).length > 0 ? 
                    <button className={"like " + "blue"} onClick={() => this.createLike({ liker_id: this.props.currentUser, likeable_id: likeableId, likeable_type: likeable, positive_like: false })}>
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </button> :
                    <button className={"like " + "gray"} onClick={() => this.createLike({ liker_id: this.props.currentUser, likeable_id: likeableId, likeable_type: likeable, positive_like: false })}>
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </button>
                }
                {negLikes.length}
            </div>
        ) 
    }

}

export default Like;