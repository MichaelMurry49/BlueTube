import React from "react";
import { Link, Button } from "react-router-dom";

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // debugger;
        return (
            <div className="nav">
                <h1>{}</h1>
                <Link to={this.props.signedIn ? "/" : "signin"}>
                    <button onClick={this.props.signedIn ? this.props.signOut : ""} 
                        className="SignInSignOut">{this.props.signedIn ? "Sign Out" : "Sign In"}
                    </button>
                </Link>
                {/* <Link to="/">
                    <button onClick={this.props.signOut}>Sign Out</button>
                </Link> */}
            </div>
        )
    }
}

export default Nav;