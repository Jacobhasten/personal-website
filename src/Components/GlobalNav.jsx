import React, { useState } from 'react';
import menu from "../imgs/menu_24px_outlined.svg";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Modal from "react-modal";
import {navModalStyle} from "./ModalStyles";

function GlobalNav() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return(
        <>
        <DesktopNav/>
        < div className="home-container-hamburger">
            <button onClick={() => setModalIsOpen(true)}>
                <img src={menu} alt="menu" className="hamburger-menu" />
            </button>
            <Modal style={navModalStyle} isOpen={modalIsOpen}>
                <MobileNav updateModal={setModalIsOpen} />
            </Modal>
        </div>
        </>
    )
}

export default GlobalNav;