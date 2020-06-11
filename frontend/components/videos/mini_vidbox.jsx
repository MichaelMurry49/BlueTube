import React from "react";
import { Link, Redirect } from 'react-router-dom';


class MiniVidBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {video} = this.props;
        debugger;
        return (<div className="miniVidBox">
            <Link to={`/watch/${video.id}`}>
                <img src={video.thumbnail} />
                <div className="videoTitle">{video.title}</div>
                <Link className="miniUser" to={`/channel/${video.authorId}`}>{this.props.users[video.authorId].username}</Link>
                <div className="miniViews">{video.viewCount} Views • {video.createdAt.slice(0, 10)} </div>
            </Link>
        </div>
        )
    }
}

export default MiniVidBox;