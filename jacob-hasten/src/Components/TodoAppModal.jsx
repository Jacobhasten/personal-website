import React from "react";
import close from "../imgs/close_24px_outlined.svg";

function TodoAppModal(props) {
    return (
        <>
        < div className="projects-modal-close-container">
                <img onClick={() => props.updateModal(false)} className="nav-close-tab" src={close} alt="close-tab" />
            </div>
            
            <div className="projects-modal-container">
            <h3>Todo App</h3>
            <br/>
            <h6>The Todo list application was my first project in React. I designed the application and wrote all the code in order to get 
                the basic understanding of learning various React concepts including: JSX, event handling, state management, routing, lifecycle 
                methods, utilizing Javascript in React, styled components, prop drilling and more. </h6>
                <br/>
                <div className="projects-modal-github-button-container">

                <button> <a href="https://github.com/Jacobhasten/kenzie-collab-team3" target="_blank" rel="noreferrer" className="projects-modal-github-button">Github Repo</a></button>
                </div>
            </div>
            </>
    )
}

export default TodoAppModal;