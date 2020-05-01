import React from "react";
import { Link, Button } from "react-router-dom";

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }


    demoFill(){
        window.fillOut = {username: "Demo", password: "password"}
    }
    noFill(){
        window.fillOut = { username: "", password: "" }
    }
    render() {
        // debugger;
        return (
            <div className="nav">
                <div className="nav-logo-plus-title">
                    <img className="nav-logo" src={window.smileURL} alt="BlueTube logo"/>BlueTube
                </div>
                <div className="right-nav">
                    <img className="nav-camera" src={window.cameraURL} alt="Camera logo" />
                    <img className="nav-grid" src={window.gridURL} alt="Grid logo" />
                    <Link className="SignInSignOut" to={this.props.signedIn ? "/" : "signin"}>
                        <div className="withDemo">
                            <button onClick={this.props.signedIn ? this.props.signOut : () => this.noFill() }
                                className="SignInSignOut">{this.props.signedIn ? "Sign Out" : "Sign In"}
                            </button>
                            <button hidden={!this.props.signedIn ? () => "" : "hidden"}
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