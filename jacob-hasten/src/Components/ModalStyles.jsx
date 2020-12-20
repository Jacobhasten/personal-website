import React from 'react';

function ModalStyles() {

    const mobileProjectsModalStyle =
{
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: null,
    },
    content: {
        position: 'absolute',
        width: '100%',
        minHeight: '100vh',
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

const desktopProjectsModalStyle =
{
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    content: {
        position: 'absolute',
        width: '50%',
        minHeight: '50%',
        top: '25%',
        left: '25%',
        right: '25%',
        bottom: '25%',
        zIndex: 200,
        border: 'solid 2px #baaa81',
        background: '#021642',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '1rem',
        outline: 'none',
        padding: null,
    }
}
}

export default ModalStyles {desktopProjectsModalStyle , mobileProjectsModalStyle};

