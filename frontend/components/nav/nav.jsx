import React from "react";
import { Link, Button, Redirect } from "react-router-dom";
import PopupContainer from "./popup_container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

{/* <PopupContainer task={"Create a new Video"} />  */}

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "",
        }
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
                {/* <div><FontAwesomeIcon icon={faBars} /></div> */}
                <div className="nav-logo-plus-title">
                    <Link className="nav-logo-plus-title" to={"/"}><img className="nav-logo" src={window.smileURL} alt="BlueTube logo"/>BlueTube</Link>
                </div>
                <div className="nav-search-bar">
                    <input className="search-bar" value={this.state.filter} type="text" onChange={e => this.changeSearch(e)}/>
                    <Link className="search-button" to={`/result/${this.state.filter}`}><FontAwesomeIcon icon={faSearch} /></Link>
                </div>
                <div className="right-nav">
                    <button className="camera-button" onClick={this.props.openPopup}><img className="nav-camera" src={window.cameraURL} alt="Camera logo" /></button>    
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