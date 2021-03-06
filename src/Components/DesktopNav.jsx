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
                <Link to='/'><li><button className="desktop-nav-options">Home</button></li></Link>
                    <Link to="/projects"><li><button className="desktop-nav-options">Projects</button></li></Link>
                    <Link to="/bio"><li><button className="desktop-nav-options">Bio</button></li></Link>
                    <a href="https://docs.google.com/document/d/1deljUmHon3flsljy4q_EFPtmr4p2x7KKELpn8Mq9uus/edit?usp=sharing" target="_blank" rel="noreferrer"><li><button className="desktop-nav-options">Resume</button></li></a>
                    <Link to="/contact"> <li><button className="desktop-nav-options">Contact</button></li></Link>
                </ul>
            </div>
    )
}

export default DesktopNav;