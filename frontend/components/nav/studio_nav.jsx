import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faVideo, faHome, faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

class StudioNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "",
            change: "",
        }
        this.sbc = "small sidebar"
        this.hidden = true;
        this.sideBar = false;
        this.task = "Upload Video"
    }

    switchSize() {
        if (this.sbc === "small sidebar") {
            this.sbc = "large sidebar"
            this.setState({ change: "big" })
        } else {
            this.sbc = "small sidebar"
            this.setState({ change: "small" })
        }
    }

    toggleLogOut() {
        this.hidden = !this.hidden;
        this.setState({ change: this.hidden });
    }

    logOut() {
        this.toggleLogOut();
        this.props.signOut();

    }

    openPopup() {
        this.task = "Upload Videos";
        this.props.openPopup();

    }

    demoFill() {
        window.fillOut = { username: "Demo", password: "password" }
    }
    noFill() {
        window.fillOut = { username: "", password: "" }
    }
    handleFile(e) {
        this.setState({ videoURL: e.currentTarget.files[0] });
    }
    changeSearch(e) {
        this.setState({ filter: e.currentTarget.value })
    }
    render() {
        debugger;
        return (
            <div className="nav">
                <div className="nav-logo-plus-title">
                    <div className={this.sbc}>
                        <Link className="channel-button" to={`/channel/${this.props.currentUser.id}`}>
                            {this.props.currentUser.username[0]}
                        </Link>
                        <div hidden={this.sbc === "large sidebar" ? false : true}>
                            Your Channel
                        </div>
                        <div hidden={this.sbc === "large sidebar" ? false : true}>
                            {this.props.currentUser.username}
                        </div>
                        <Link className="sbl" to="/">
                            <FontAwesomeIcon icon={faHome} size="6x" />
                            <div className="text">Home</div>
                        </Link>
                        <a className="sbl" href="https://github.com/MichaelMurry49/BlueTube">
                            <FontAwesomeIcon icon={faGithub} />
                            <div className="text">GitHub</div>
                        </a>
                        <a href="https://www.linkedin.com/in/michael-murry-b3746a1a6/" className="sbl">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                            <div className="text">LinkedIn</div>
                        </a>
                    </div>
                    <div className="sign-out-toggle" hidden={this.hidden}>
                        <div>
                            <div>
                                {this.props.currentUser ? this.props.currentUser.username : ""}
                            </div>
                            <div>
                                {this.props.currentUser ? this.props.currentUser.email : ""}
                            </div>
                        </div>
                        <div>
                            <Link to={this.props.currentUser ? `/channel/${this.props.currentUser.id}` : ""}>
                                <FontAwesomeIcon icon={faUserCircle} /> <div>Your channel</div>
                            </Link>
                        </div>
                        <div>
                            <button onClick={() => this.logOut()}><FontAwesomeIcon icon={faSignOutAlt} /><div>Sign out</div></button>
                        </div>
                    </div>
                    <button className="bars" onClick={() => this.switchSize()}><FontAwesomeIcon icon={faBars} /></button><Link className="nav-logo-plus-title" to={`/channel/${this.props.currentUser.id}/studio`}><img className="nav-logo" src={window.smileURL} alt="BlueTube logo" />Studio</Link>
                </div>
                <div className="nav-search-bar">
                    <input placeHolder="Search" className="search-bar" value={this.state.filter} type="text" onChange={e => this.changeSearch(e)} />
                    <Link className="search-button" to={`/result/${this.state.filter}`}><FontAwesomeIcon icon={faSearch} /></Link>
                </div>
                <div className="right-nav">
                    <button className="camera-button" onClick={() => this.openPopup()}><FontAwesomeIcon icon={faVideo} />CREATE</button>
                    <img className="nav-grid" src={window.gridURL} alt="Grid logo" />
                    <Link className="SignInSignOut" to={!this.props.signedIn ? "/signin" : false}>
                        <div className="withDemo">
                            <button onClick={this.props.signedIn ? () => this.toggleLogOut() : () => this.noFill()}
                                className={this.props.signedIn ? "LogOut" : "SignInSignOut"}>{this.props.currentUser ? `${this.props.currentUser.username[0]}` : "SIGN IN"}
                            </button>
                            <button hidden={!this.props.signedIn ? "" : "hidden"}
                                onClick={this.demoFill()}>
                                DEMO
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default StudioNav;