import React from "react";
import landingPageCard from "../imgs/landing-page-card.png";
import RejoycePageCard from "../imgs/rejoyce-img.jpg"

function Projects() {
    return (
        <>
        <div className="title-container">
        <h1>Projects</h1>
        </div>
        <div className="projects-container">
            <div className="projects-container-all-cards">
                <div className="projects-container-card">
                    <button className="projects-card-title">Rejoyce</button>
                    <img className="projects-card-img" src={RejoycePageCard} alt="landing-page-img" />
                </div>
                <div className="projects-container-card">
                    <button className="projects-card-title">Landing Page</button>
                    <img className="projects-card-img" src={landingPageCard} alt="landing-page-img" />
                </div>
                <div className="projects-container-card">
                    <button className="projects-card-title">Landing Page</button>
                    <img className="projects-card-img" src={landingPageCard} alt="landing-page-img" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects;