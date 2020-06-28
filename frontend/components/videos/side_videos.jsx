import React from "react";
import SideVideosContainer from './side_videos_container';
import MiniVidBoxContainer from './mini_vidbox_container';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

class SideVideos extends React.Component {

    componentDidMount(){
        this.props.fetchVideos();
    }

    randomVideos(videos, n){
        // debugger;
        let randVids = Object.values(videos).slice(0);
        let sideVids = [];
        for(let i = 0; i < Object.values(videos).length && i < n; i++){
            let rand = Math.floor(Math.random() * randVids.length);
            sideVids.push(randVids[rand]);
            randVids = randVids.slice(0, rand).concat(randVids.slice(rand+1));
        }
        return sideVids;

    }
    render(){
        // debugger;
        let {video} = this.props;
        return <div>
            <div>Up Next</div>
            {this.props.videos ? this.randomVideos(this.props.videos,5).map(video => {
                return(
                    <div className="sidepanel videoSearch" >
                        
                        <MiniVidBoxContainer userId={video.authorId} video={video} />
                    </div>
                )
            }): null}
        </div>
    }
}

export default SideVideos;