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
        };
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
                    <div className="video-grid">
                        <div className="filter">
                            <input type="text" placeHolder="filter" onChange={(e) => this.updateFilter(e)}/>
                        </div>
                        <div className="grid-header">
                            <div>
                                <input id="all-video" type="checkbox"/>
                                Video
                            </div>
                            <div>
                                <span onClick={() => this.orderBy("date")}>Date</span>
                                <span onClick={() => this.orderBy("views")}>Views</span>
                                <span onClick={() => this.orderBy("comments")}>Comments</span>
                                <span onClick={() => this.orderBy("likes")}>Like(vs. dislikes)</span>
                            </div>
                        </div>
                        <div className="grid-cells">
                            { this.props.videos ? Object.values(this.props.videos).map(video => {
                                return (<div>
                                    <input id="video" type="checkbox" />
                                    <img src={video.thumbnail} />
                                </div>)
                            }) : ""}
                        </div>
                        <div className="grid-footer">
                            <span>Rows per page: </span>
                            <span>{this.state.rows}</span>
                            <span>{/* will contain button */}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Studio;
