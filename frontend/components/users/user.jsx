import React from "react";
import UserContainer from "../nav/nav_container";
import MiniVidBoxContainer from "../videos/mini_vidbox_container";
import NavContainer from "../nav/nav_container";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

class User extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchUsers();
        this.props.fetchVideos();
    }

    render(){
        let {currentUser} = this.props;
        return (
            <div>
                <NavContainer/>
                <div className="userProfile">
                    <FontAwesomeIcon icon={faUserCircle} />
                    {Object.keys(this.props.users).includes(this.props.userId) ? this.props.users[this.props.userId].username : ""}
                    <div className="userVideos">
                        {this.props.videos ? Object.values(this.props.videos).filter(video => video.authorId === parseInt(this.props.userId, 10)).map(video => {
                            return (
                                <div>
                                    <MiniVidBoxContainer userId={video.authorId} video={video} />
                                    <Link to="/">
                                        <button hidden={video.authorId.toString(10)
                                        === currentUser ? false : true} className="delete"
                                        onClick={() => this.props.deleteVideo(video.id)}>
                                            Delete
                                        </button>
                                    </Link>
                                </div>
                            )
                        }) : ""}
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default User;
