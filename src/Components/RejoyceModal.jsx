import React from "react";
import close from "../imgs/close_24px_outlined.svg";

function RejoyceModal(props) {
    return (
        <>
            < div className="projects-modal-close-container">
                <img onClick={() => props.updateModal(false)} className="nav-close-tab" src={close} alt="close-tab" />
            </div>
            <div className="projects-modal-container">
                <h3>Rejoyce was a four-week collaboration project with the goal of designing and developing a minimum viable product addressing a specific problem:</h3>
                <br />
                <h4>"In recent events, parents are finding it hard to come up with ideas for keeping their children distracted at home during the day  while trying to work. "</h4>
                <br />
                <h4>

                    Check out a more comprehensive case study <a className="description-link" href="https://beckneruie.wordpress.com/2020/10/22/rejoyce-app-project/" target="_blank" rel="noreferrer">here.</a>
                    <br />
                </h4>
                <br />
                <h4>The App:</h4>
                <p>We decided to create an application that creates a random acitivty generator on a magic ball. It features a finished filtered system that allows parents to filter specific categories of activities before children hit the magic ball, a static timer, and a static design of a rewards system.</p>
                <br />
                <h4>My specific roles in this project were the following:</h4>
                <ul className="projects-modal-list">
                    <li> During the discovery process, I wrote out interview questions for potential 
                        users that were non-leading in order to discover common problems and behavior 
                        patterns among parents being stuck at home with their children.</li>
                    <li> Once we began designing the application, I took a heavy role in the brainstorm
                         sessions, designing low-fidelity wireframes, and creating the architecture of the 
                         application. </li>
                    <li> During the development process I was the product owner. 
                        We used ReactJS to create the minimum viable product. I hosted the project on Github, 
                        which gave me the responsibility to resolve merge conflicts, divide up the coding tasks 
                        among the team, and to constantly communicate and update the team members on new pull requests.
                    I built the state in the application, created the routing, wrote most of the Javascript aside 
                    from the timer component, and deployed the website via netlify.</li>
                    <li> When the project was due for presentation, I led it.</li>

                </ul>
        <div className="projects-modal-github-button-container">
                <button> <a href="https://github.com/Jacobhasten/kenzie-collab-team3" target="_blank" rel="noreferrer" className="projects-modal-github-button">Github Repo</a></button>
                </div>
            </div>
        </>
    )
}

export default RejoyceModal;