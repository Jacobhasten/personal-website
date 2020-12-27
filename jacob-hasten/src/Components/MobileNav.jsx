import React from "react";
import close from "../imgs/close_24px_outlined.svg";
import { Link } from "react-router-dom";



function MobileNav(props) {

    return (
        <div className="nav-container">
            < div className="home-container-hamburger">
               {/* Go back option on close */}
               <button onClick={() => props.updateModal(false)}><img className="nav-close-tab" src={close} alt="close-tab" /></button>
            </div>
        <ul className="nav-container-options">
            <Link to='/'><li><h3 className="nav-options">Home</h3></li></Link>
            <Link to="/projects"><li><h3 className="nav-options">Projects</h3></li></Link>
            <Link to="/bio"><li><h3 className="nav-options">Bio</h3></li></Link>
            <a href="https://docs.google.com/document/d/1deljUmHon3flsljy4q_EFPtmr4p2x7KKELpn8Mq9uus/edit?usp=sharing" target="_blank" rel="noreferrer" ><li><h3 className="nav-options">Resume</h3></li></a>
            <Link> <li><h3 className="nav-options">Contact</h3></li></Link>

        </ul>
        </div>
    )

}

export default MobileNav;