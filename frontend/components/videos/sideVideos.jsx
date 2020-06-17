import React from "react";
import MiniVidBoxContainer from './mini_vidbox_container';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

class SideVideos extends React.Component {
    render(){
        <div>
            {this.props.videos.map(video => {
                return(
                    <div className="under" >
                        <div>
                            <Link className="profilePic" to={`/channel/${video.authorId}`}><FontAwesomeIcon size={32} icon={faUserCircle} /></Link>
                        </div>
                        <div>
                            <div className="videoTitle">{video.title}</div>
                            <Link className="miniUser" to={`/channel/${video.authorId}`}>{this.props.users[this.props.userId] ? this.props.users[this.props.userId].username : ""}</Link>
                            <div className="miniViews">{video.viewCount} Views • {this.getTime(video.createdAt)} </div>
                        </div>
                    </div>
                )
            })}
        </div>
    }
}

export default SideVideos;