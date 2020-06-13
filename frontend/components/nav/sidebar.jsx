import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faVideo, faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// import SideBarContainer from "./sidebar_container";

class SideBar extends React.Component {
    constructor(props){
        super(props);
        this.sbwidth = 200;
        this.sbc = "small"
        this.sideBar = false;
    }
    render(){
        return(
            <div className={this.sbc}><button className="bars"><FontAwesomeIcon icon={faBars} /></button><Link className="sbl" to="/"><FontAwesomeIcon icon={faHome} /><div className="text">Home</div></Link> <a className="sbl" href="https://github.com/MichaelMurry49/BlueTube"><FontAwesomeIcon icon={faGithub} /><div className="text">GitHub</div></a> <a href="https://www.linkedin.com/in/michael-murry-b3746a1a6/" className="sbl"><FontAwesomeIcon icon={faLinkedinIn} /><div className="text">LinkedIn</div></a></div>
        )
    }
}

export default SideBar;