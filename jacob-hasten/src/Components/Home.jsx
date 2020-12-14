import React from 'react';
import izzyBackground from "../imgs/Izzy-Background.svg";
import menu from "../imgs/menu_24px_outlined.svg";
import { Link } from "react-router-dom";
import linkedinLogo from "../imgs/linkedin-logo.svg";
import gitHubLogo from "../imgs/github-logo.svg";
import DesktopNav from "./DesktopNav";




function Home() {

    return (
        <div className="home-container">
            <DesktopNav/>
            < div className="home-container-hamburger">
                <Link to="/nav">
                    <img src={menu} alt="menu" className="hamburger-menu" />
                </Link>
            </div>
            <div className="home-container-text">
                <h1> Hello.</h1>
                <h1>My name is Izzy.</h1>
                <h6 className="home-summary">I’m a UI Developer that thrives in collaborative environments with a thirst for knowledge, growth, and solving problems.</h6>
            </div>
            <a href="https://www.linkedin.com/in/jacobhasten/" target="_blank" rel="noreferrer" className="home-link-container"><img className="home-link-linkedin" src={linkedinLogo} alt="linkedin-logo" /></a>
            <a href="https://github.com/Jacobhasten" target="_blank" rel="noreferrer" className="home-link-container"><img className="home-link-github" src={gitHubLogo} alt="github-logo" /></a>
            <div className="izzy-background-container">
                <img src={izzyBackground} className="izzy-background-img" alt="izzy-background"></img>
            </div>

        </div>
    )

}

export default Home;