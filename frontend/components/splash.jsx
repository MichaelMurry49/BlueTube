import React from "react";
import {Link} from "react-router-dom";


class Splash extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (<Link to="/signin">Sign In</Link>)      
    }
}

export default Splash;