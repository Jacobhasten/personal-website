import React, { useState } from "react";
import landingPageCard from "../imgs/landing-page-card.png";
import RejoycePageCard from "../imgs/rejoyce-img.jpg";
import todoAppCard from "../imgs/todoapp.png";
import Modal from "react-modal";
import MediaQuery from 'react-responsive';
import RejoyceModal from './RejoyceModal';

function Projects() {

    const [modalRejoyceIsOpen, setModalRejoyceIsOpen] = useState(false)
    const [modalLandingPageIsOpen, setModalLandingPageIsOpen] = useState(false)
    const [modalTodoAppIsOpen, setModalTodoAppIsOpen] = useState(false)

    const mobileProjectsModalStyle =
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
            height: '100%',
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
        <>
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
            <MediaQuery maxDeviceWidth={900}>
                <Modal style={mobileProjectsModalStyle} isOpen={modalRejoyceIsOpen}>
                    <RejoyceModal updateModal={setModalRejoyceIsOpen}/>
                </Modal>
                <Modal isOpen={modalLandingPageIsOpen}>
                <h1>Hi</h1>
                </Modal>
                <Modal isOpen={modalTodoAppIsOpen}>
                <h1>Hi</h1>
                </Modal>
            </MediaQuery>
            <MediaQuery minDeviceWidth={901}>
            <Modal isOpen={modalRejoyceIsOpen}>
                    <h1>Big Boy</h1>
                </Modal>

            </MediaQuery>
        </>
    )
}

export default Projects;