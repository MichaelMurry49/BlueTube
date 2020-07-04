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

                        </div>
                        <div className="grid-header">

                        </div>
                        <div className="grid-cells">

                        </div>
                        <div className="grid-footer">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Studio;
