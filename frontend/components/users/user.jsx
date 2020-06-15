import React from "react";
import UserContainer from "../nav/nav_container";
import MiniVidBoxContainer from "../videos/mini_vidbox_container";
import NavContainer from "../nav/nav_container";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

class User extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
        // this.props.fetchUser(this.props.userId);
        this.props.fetchUsers();
        this.props.fetchVideos();
    }

    render(){
        // debugger;
        // console.log(this.props.videos)
        // if(this.props.videos) console.log(Object.values(this.props.videos).length)
        // while(this.props.videos.length === 0){console.log("hi")}
        // if (this.props.videos && Object.values(this.props.videos).length > 0) debugger;
        // debugger; { 1: { id: 1 user } } { 1: { id: 1 user } }
        let {currentUser} = this.props;
        // debugger;
        return (
            <div>
                <NavContainer/>
                <div className="userProfile">
                    {Object.keys(this.props.users).includes(this.props.userId) ? this.props.users[this.props.userId].username : ""}
                    <div className="userVideos">
                        {/* {this.props.users ? Object.values(this.props.users)[0]:""} */}
                        {this.props.videos ? Object.values(this.props.videos).filter(video => video.authorId === parseInt(this.props.userId, 10)).map(video => {
                            return (
                                <div>
                                    <MiniVidBoxContainer userId={video.authorId} video={video} />
                                    <Link to="/"><button hidden={video.authorId.toString(10) === currentUser ? false : true} className="delete" onClick={() => this.props.deleteVideo(video.id)}>Delete</button></Link>
                                </div>
                            )
                            

                            // <Link to={`/watch/${video.id}`}>
                            //     <img src={video.thumbnail} />
                            //     <div className="videoTitle">{video.title}</div>
                            // </Link>
                        }) : ""}
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default User;
