import React from "react";
import { Link, Button } from "react-router-dom";

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }


    doNothing(){
        return ""
    }
    render() {
        debugger;
        return (
            <div className="nav">
                <img className="nav-logo" src={window.smileURL} alt="BlueTube logo"/>
                <Link className="SignInSignOut" to={this.props.signedIn ? "/" : "signin"}>
                    <button onClick={this.props.signedIn ? this.props.signOut : () => {}} 
                        className="SignInSignOut">{this.props.signedIn ? "Sign Out" : "Sign In"}
                    </button>
                </Link>
            </div>
        )
    }
}

export default Nav;