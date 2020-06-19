import React from "react";
import SideVideosContainer from './side_videos_container';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

class SideVideos extends React.Component {

    componentDidMount(){
        this.props.fetchVideos();
    }
    randomVideos(videos, n){
        let randVids = Object.values(videos).slice(0);
        let sideVids = [];
        for(let i = 0; i < videos.length && i < n; i++){
            let rand = Math.floor(Math.random() * randVids.length);
            sideVids.push(randVids[rand]);
            randVids = randVids.slice(0, rand).concat(randVids.slice(rand+1));
        }
        return sideVids;

    }
    render(){
        debugger;
        return <div>
            {this.props.videos ? this.randomVideos(this.props.videos, 5).map(video => {
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
            }): null}
        </div>
    }
}

export default SideVideos;