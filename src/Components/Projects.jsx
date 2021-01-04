import React, { useState } from "react";
import landingPageCard from "../imgs/landing-page-card.png";
import RejoycePageCard from "../imgs/rejoyce-img.jpg";
import todoAppCard from "../imgs/todoapp.png";
import Modal from "react-modal";
import MediaQuery from 'react-responsive';
import RejoyceModal from './RejoyceModal';
import LandingPageModal from './LandingPageModal';
import TodoAppModal from './TodoAppModal';
import { desktopProjectsModalStyle, mobileProjectsModalStyle } from './ModalStyles';
import GlobalNav from "./GlobalNav";

function Projects() {

    const [modalRejoyceIsOpen, setModalRejoyceIsOpen] = useState(false)
    const [modalLandingPageIsOpen, setModalLandingPageIsOpen] = useState(false)
    const [modalTodoAppIsOpen, setModalTodoAppIsOpen] = useState(false)

    return (
        <>
        <GlobalNav/>
            <div className="page-title-container">
                <h1 className="page-title">Projects</h1>
            </div>
            <div className="projects-container">
                <div className="projects-container-all-cards">
                    <button onClick={() => setModalRejoyceIsOpen(true)} className="projects-container-card">
                        <button className="projects-card-title">Rejoyce</button>
                        <img className="projects-card-img" src={RejoycePageCard} alt="landing-page-img" />
                    </button>
                    <button onClick={() => setModalLandingPageIsOpen(true)} className="projects-container-card">
                        <button className="projects-card-title">Landing Page</button>
                        <img className="projects-card-img" src={landingPageCard} alt="landing-page-img" />
                    </button>
                    <button onClick={() => setModalTodoAppIsOpen(true)} className="projects-container-card">
                        <button className="projects-card-title">Todo App</button>
                        <img className="projects-card-img" src={todoAppCard} alt="todo-app-img" />
                    </button>

                </div>
            </div>
            <MediaQuery maxWidth={900}>
                <Modal style={mobileProjectsModalStyle} isOpen={modalRejoyceIsOpen} onRequestClose={() => setModalRejoyceIsOpen(false)}>
                    <RejoyceModal updateModal={setModalRejoyceIsOpen} />
                </Modal>
                <Modal isOpen={modalLandingPageIsOpen} style={mobileProjectsModalStyle} onRequestClose={() => setModalLandingPageIsOpen(false)}>
                    <LandingPageModal updateModal={setModalLandingPageIsOpen} />
                </Modal>
                <Modal isOpen={modalTodoAppIsOpen} style={mobileProjectsModalStyle} onRequestClose={() => setModalTodoAppIsOpen(false)}>
                    <TodoAppModal updateModal={setModalTodoAppIsOpen} />
                </Modal>
            </MediaQuery>
            <MediaQuery minWidth={901}>
                <Modal style={desktopProjectsModalStyle} isOpen={modalRejoyceIsOpen} onRequestClose={() => setModalRejoyceIsOpen(false)}>
                    <RejoyceModal updateModal={setModalRejoyceIsOpen} />
                </Modal>
                <Modal isOpen={modalLandingPageIsOpen} style={desktopProjectsModalStyle} onRequestClose={() => setModalLandingPageIsOpen(false)}>
                    <LandingPageModal updateModal={setModalLandingPageIsOpen} />
                </Modal>
                <Modal isOpen={modalTodoAppIsOpen} style={desktopProjectsModalStyle} onRequestClose={() => setModalTodoAppIsOpen(false)}>
                    <TodoAppModal updateModal={setModalTodoAppIsOpen} />
                </Modal>
            </MediaQuery>
        </>
    )
}

export default Projects;