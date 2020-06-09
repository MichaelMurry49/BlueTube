import React from "react";
import { Link, Button, Redirect } from "react-router-dom";
import PopupContainer from "./popup_container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faVideo, faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

{/* <PopupContainer task={"Create a new Video"} />  */}

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "",
        }
        this.sbwidth = 200;
        this.sbc = "small"
        this.sideBar = false;
    }

    demoFill(){
        window.fillOut = {username: "Demo", password: "password"}
    }
    noFill(){
        window.fillOut = { username: "", password: "" }
    }
    handleFile(e){
        this.setState({videoURL: e.currentTarget.files[0]});
    }
    changeSearch(e){
        this.setState({filter: e.currentTarget.value})
    }
    render() {
        // debugger;
        // const {openPopup} = this.props
        return (
            <div className="nav">
                <PopupContainer task={"Create a new Video"} /> 
                
                <div className="nav-logo-plus-title">
                    <div className={this.sbc}><Link className="sbl" to="/"><FontAwesomeIcon icon={faHome} />Home</Link> <a className="sbl" href="https://github.com/MichaelMurry49/BlueTube"><FontAwesomeIcon icon={faGithub} />GitHub</a> <a href="https://www.linkedin.com/in/michael-murry-b3746a1a6/" className="sbl"><FontAwesomeIcon icon={faLinkedinIn} />LinkedIn</a></div>
                    <button className="bars"><FontAwesomeIcon icon={faBars} /></button><Link className="nav-logo-plus-title" to={"/"}><img className="nav-logo" src={window.smileURL} alt="BlueTube logo"/>BlueTube</Link>
                    {/* <div className={this.sbc}><Link className="sbl" to="/"><FontAwesomeIcon icon={faHome} /></Link> <a className="sbl" href="https://github.com/MichaelMurry49/BlueTube"><FontAwesomeIcon icon={faGithub} /></a> <a href="https://www.linkedin.com/in/michael-murry-b3746a1a6/" className="sbl"><FontAwesomeIcon icon={faLinkedinIn} /></a></div> */}
                </div>
                <div className="nav-search-bar">
                    <input placeHolder="Search" className="search-bar" value={this.state.filter} type="text" onChange={e => this.changeSearch(e)}/>
                    <Link className="search-button" to={`/result/${this.state.filter}`}><FontAwesomeIcon icon={faSearch} /></Link>
                </div>
                <div className="right-nav">
                    <button className="camera-button" onClick={this.props.currentUser ? this.props.openPopup : () => { }}><FontAwesomeIcon icon={faVideo} /></button>    
                    <img className="nav-grid" src={window.gridURL} alt="Grid logo" />
                    <Link className="SignInSignOut" to={this.props.signedIn ? "/" : "/signin"}>
                        <div className="withDemo">
                            <button onClick={this.props.signedIn ? this.props.signOut : () => this.noFill() }
                                className="SignInSignOut">{this.props.signedIn ? "Sign Out" : "Sign In"}
                            </button>
                            <button hidden={!this.props.signedIn ? "" : "hidden"}
                                onClick={this.demoFill()}>
                                Demo
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Nav;