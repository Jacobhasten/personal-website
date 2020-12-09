import React from "react";
import close from "../imgs/close_24px_outlined.svg";
import { Link } from "react-router-dom";



function Nav() {
    return (
        <div className="nav-container">
            < div className="home-container-hamburger">
               {/* Go back option on close */}
               <Link to="/"><img className="nav-close-tab" src={close} alt="close-tab" /></Link>
            </div>
        <ul className="nav-container-options">
            <Link><li><h3 className="nav-options">Projects</h3></li></Link>
            <Link><li><h3 className="nav-options">Bio</h3></li></Link>
            <Link><li><h3 className="nav-options">Resume</h3></li></Link>
            <Link> <li><h3 className="nav-options">Contact</h3></li></Link>

        </ul>
        </div>
    )

}

export default Nav;