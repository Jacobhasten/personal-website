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
            <Link><li><h3 className="nav-options">Resume</h3></li></Link>
            <Link> <li><h3 className="nav-options">Contact</h3></li></Link>

        </ul>
        </div>
    )

}

export default MobileNav;