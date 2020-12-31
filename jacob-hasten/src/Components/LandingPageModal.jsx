import React from "react";
import close from "../imgs/close_24px_outlined.svg";

function LandingPageModal(props) {
    return (
        <>
        < div className="projects-modal-close-container">
                <img onClick={() => props.updateModal(false)} className="nav-close-tab" src={close} alt="close-tab" />
            </div>
            
            
            <div className="projects-modal-container">
            <h3>Landing Page</h3>
            <br/>
            <p>The Landing page was a mock project to test my SASS/SCSS and HTML skills at Kenzie Academy. I was give a design both for mobile and desktop development 
                in order to make it responsive in all sizes. I used BEM naming conventions to organize all my class naming. In fact, my instructor at Kenzie Academy was so impressed with my accuracy, 
                attention to detail and organized method of execution, he used my repository to show off to newer cohorts and high school students looking to get into coding. This assignment was an excellent exercise to practive flexbox, form styling, responsive development, gridding, navigation styling, responsive imaging and more.</p>
                <br/>
                <div className="projects-modal-github-button-container">

                <button> <a href="https://github.com/Jacobhasten/kenzie-collab-team3" target="_blank" rel="noreferrer" className="projects-modal-github-button">Github Repo</a></button>
                </div>
            </div>
            </>
    )
}

export default LandingPageModal