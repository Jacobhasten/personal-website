import React from "react";
import linkedinLogo from "../imgs/linkedin-logo.svg";
import gitHubLogo from "../imgs/github-logo.svg";
import { Link } from "react-router-dom";

function DesktopNav() {
    return(
        <div className="desktop-nav-container">
                <div className="desktop-nav-container-left">
                    <h4 className="desktop-nav-name">Jacob Izzy Hasten</h4>
                    <a href="https://www.linkedin.com/in/jacobhasten/" target="_blank" rel="noreferrer" className="desktop-nav-link-container"><img className="desktop-nav-link-linkedin" src={linkedinLogo} alt="linkedin-logo" /></a>
                    <a href="https://github.com/Jacobhasten" target="_blank" rel="noreferrer" className="desktop-nav-link-container"><img className="desktop-nav-link-github" src={gitHubLogo} alt="github-logo" /></a>
                </div>
                <ul className="desktop-nav-container-right">
                <Link to='/home'><li><button className="desktop-nav-options">Home</button></li></Link>
                    <Link to="/projects"><li><button className="desktop-nav-options">Projects</button></li></Link>
                    <Link><li><button className="desktop-nav-options">Bio</button></li></Link>
                    <Link><li><button className="desktop-nav-options">Resume</button></li></Link>
                    <Link> <li><button className="desktop-nav-options">Contact</button></li></Link>
                </ul>
            </div>
    )
}

export default DesktopNav;