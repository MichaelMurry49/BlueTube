import React from "react";
import StudioNavContainer from "../nav/studio_nav_container";
import PopupContainer from "../nav/popup_container";
import { Link, Redirect } from "react-router-dom";


class Studio extends React.Component {
    constructor(props) {
        super(props);
        this.state = 
        { 
            redirect: null,
            order: "",
            filter: "",
            rows: 30,
            page: 0,
        };
        this.selectedIds = {};
        this.videoId = -1;
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchVideos();
        if(`${this.props.currentUser.id}` !== this.props.match.params.userId){
            this.setState({redirect: "/"})
        } else if (this.props.location.pathname.split("/")[4]){
            this.props.openPopup();
        }
    }

    updateIds(videoId){
        if(this.selectedIds[videoId]){
            delete this.selectedIds[videoId];
        } else {
            this.selectedIds[videoId] = true;
        }
    }

    deleteVideos(){
        for(let i = 0; i < Object.keys(this.selectedIds).length; i++){
            this.props.deleteVideo(Object.keys(this.selectedIds)[i])
        }
        $('#video').val('').trigger("change");
    }

    update(videoId){
        this.videoId = videoId;
        this.props.openPopup()
    }

    updateFilter(e){
        this.setState({filter: e.target.value})
    }

    orderBy(value){
        if(value === this.state.filter) value += " asc"
        this.setState({order: value})
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                {/* <NavContainer /> */}
                <StudioNavContainer />
                { this.videoId !== -1 ?
                    <PopupContainer task={"Update Video"} videoId={this.videoId} /> :
                    <PopupContainer task={"Upload Video"} videoId={this.videoId} />
                }
                {this.videoId = -1}
                <div className="channel-videos">
                    <div className="channel-header">Channel videos</div>
                    <div className="upload-header">Uploads</div>
                    <table className="video-grid">
                        <tr className="filter">
                            <input type="text" placeHolder="filter" onChange={(e) => this.updateFilter(e)}/>
                        </tr>
                        <tr className="grid-header">
                            <td>
                                <input id="all-video" type="checkbox"/>
                                Video
                            </td>
                            <td>
                                <td onClick={() => this.orderBy("date")}>Date</td>
                                <td onClick={() => this.orderBy("views")}>Views</td>
                                <td onClick={() => this.orderBy("comments")}>Comments</td>
                                <td onClick={() => this.orderBy("likes")}>Likes/Dislikes</td>
                            </td>
                        </tr>
                        <tr className="deleteRow">
                            <button onClick={e => this.deleteVideos()}>Delete</button>
                        </tr>
                        <div className="grid-cells">
                            { Object.values(this.props.videos)?.map(video => {
                                return (<tr>
                                    <input id="video" type="checkbox" onChange={() => this.updateIds(video.id)} />
                                        <img onClick={() => this.update(video.id)} src={video.thumbnail} />
                                        <span className="studioVidTitle">{video.title}</span>
                                    
                                    <div>
                                        <span>{video.createdAt.slice(0,10)}</span>
                                        <span>{video.viewCount}</span>
                                        <span>{video.comments.length}</span>
                                        <span>{`${video.likes.filter(like => like).length} / ${video.likes.filter(like => !like).length}`}</span>
                                    </div>
                                </tr>)
                            })}
                        </div>
                        <div className="grid-footer">
                            <span>Rows per page: </span>
                            <span>{this.state.rows}</span>
                        </div>
                    </table>
                </div>
            </div>
        )
    }
}

export default Studio;
