import React from "react";
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Time from "../time";



class MiniVidBox extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchUsers();
    }

    render() {
        let {video, currentUser} = this.props;
        return (<div className="miniVidBox">
                <Link to={`/watch/${video.id}`}>
                    <img src={video.thumbnail} />
                    <div className ="side">
                        <div>
                            <Link className="profilePic" to={`/channel/${video.authorId}`}><FontAwesomeIcon size={32} icon={faUserCircle} /></Link>
                        </div>
                        <div>
                            <div className="videoTitle">{video.title}</div>
                            <div>
                                <Link className="miniUser" to={`/channel/${video.authorId}`}>{this.props.users[this.props.userId] ? this.props.users[this.props.userId].username : ""}</Link>
                                <div className="miniViews">{video.viewCount} Views • <Time start={video.createdAt}/></div>
                            </div>
                            
                            <div className="miniDesc">{video.description.slice(0,150)}</div>
                        </div>
                    </div>
                </Link>
        </div>
        )
    }
}

export default MiniVidBox;