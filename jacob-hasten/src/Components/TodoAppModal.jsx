import React from "react";
import close from "../imgs/close_24px_outlined.svg";

function TodoAppModal(props) {
    return (
        <>
        < div className="projects-modal-close-container">
                <img onClick={() => props.updateModal(false)} className="nav-close-tab" src={close} alt="close-tab" />
            </div>
            </>
    )
}

export default TodoAppModal;