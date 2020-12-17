import React, { useState } from 'react';
import izzyBackground from "../imgs/Izzy-Background.svg";
import menu from "../imgs/menu_24px_outlined.svg";
import linkedinLogo from "../imgs/linkedin-logo.svg";
import gitHubLogo from "../imgs/github-logo.svg";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Modal from "react-modal";

Modal.setAppElement('#root')


function Home() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const navModalStyle =
    {
        overlay: {
            position: null,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: null,
        },
        content: {
            position: 'absolute',
            width: '100%',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 200,
            border: null,
            background: '#021642',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: null,
        }
    }

    return (
        <div className="home-container">
            <DesktopNav />
            < div className="home-container-hamburger">
                <button onClick={() => setModalIsOpen(true)}>
                    <img src={menu} alt="menu" className="hamburger-menu" />
                </button>
                <Modal style={navModalStyle} isOpen={modalIsOpen}>
                    <MobileNav updateModal={setModalIsOpen} />
                </Modal>
            </div>
            <div className="home-container-text">
                <h1> Hello.</h1>
                <h1>My name is Izzy.</h1>
                <h6 className="home-summary">A UI Developer that thrives in collaborative environments with a thirst for knowledge, growth, and solving problems.</h6>
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