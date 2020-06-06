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
        this.props.fetchUser(this.props.userId);
        this.props.fetchVideos();
    }

    render(){
        debugger;
        return (
            <div>
                {this.props.user ? this.props.user.username : ""}
                {this.props.videos ? this.props.videos.map(video => {
                    <div>{video.thumbnail}</div>
                }) : ""}
            </div>
        )
    }
}

export default User;
