import React from "react";
import MiniVidBoxContainer from "../videos/mini_vidbox_container";
import StudioNavContainer from "../nav/studio_nav_container";
import PopupContainer from "../nav/popup_container";
import { Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


class Studio extends React.Component {
    constructor(props) {
        super(props);
        this.state = 
        { 
            redirect: null,
            task: "Upload Video",
            order: "",
            filter: "",
            rows: 30,
            page: 0,
        };
        this.selectedIds = {};
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchVideos();
        debugger;
        if(`${this.props.currentUser.id}` !== this.props.match.params.userId){
            this.setState(
            {
                redirect: "/",
            })
        } else 
        {
            if (this.props.location.pathname.split("/")[4])
            {
                this.setState(
                {
                    task: "Upload Video",
                })
                debugger;
                this.props.openPopup();
                // <>
                {/* this.props.openModal(popup); */}
            } else 
            {
                this.setState({task: "Update Video",})
            }
            
        }
    }

    updateIds(videoId){
        if(this.selectedIds[videoId]){
            delete this.selectedIds[videoId];
        } else {
            this.selectedIds[videoId] = true;
        }
    }

    editVideos(){
        debugger;
    }

    deleteVideos(){
        for(let i = 0; i < Object.keys(this.selectedIds).length; i++){
            this.props.deleteVideo(Object.keys(this.selectedIds)[i])
        }
        $('#video').val('').trigger("change");
    }

    update(){
        this.setState({ task: "Update Video", });
        this.props.openPopup();
    }

    updateFilter(e){
        this.setState({filter: e.target.value})
    }

    orderBy(value){
        if(value === this.state.filter) value += " asc"
        this.setState({order: value})
    }

    render() {
        let { currentUser } = this.props;
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        debugger;
        return (
            <div>
                {/* <NavContainer /> */}
                <StudioNavContainer />
                <PopupContainer task={this.state.task} />
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
                        <tr>
                            {/* <button onClick={e => this.editVideos()}>Edit</button> */}
                            <button onClick={e => this.deleteVideos()}>Delete</button>
                        </tr>
                        <div className="grid-cells">
                            { Object.values(this.props.videos)?.map(video => {
                                return (<tr>
                                    <input id="video" type="checkbox" onChange={() => this.updateIds(video.id)} />
                                    <img src={video.thumbnail} />
                                    {" | " + video.title}
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
                            <span>{/* will contain button */}</span>
                        </div>
                    </table>
                </div>
            </div>
        )
    }
}

export default Studio;
