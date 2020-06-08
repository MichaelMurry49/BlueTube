import React from "react";
import UserContainer from "../nav/nav_container";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

class User extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
        // this.props.fetchUser(this.props.userId);
        this.props.fetchUser(this.props.userId);
        this.props.fetchVideos();
    }

    render(){
        debugger;
        console.log(this.props.videos)
        if(this.props.videos) console.log(Object.values(this.props.videos).length)
        // while(this.props.videos.length === 0){console.log("hi")}
        if (this.props.videos && Object.values(this.props.videos).length > 0) debugger;
        return (
            <div>
                {this.props.user ? this.props.user.username : ""}
                {this.props.videos ? Object.values(this.props.videos).filter(video => video.authorId === parseInt(this.props.userId, 10)).map(video => {
                    return <Link to={`/watch/${video.id}`}>
                        <img src={video.thumbnail} />
                        <div className="videoTitle">{video.title}</div>
                    </Link>
                }) : ""}
            </div>
        )
    }
}

export default User;
