import React from 'react';
import { useEffect, useRef } from "react";
// import CrumpleEffect from 'components/CrumpleEffect';
import './index.css';

function ModalCertificate({ showModal, setShowModal, alt, imgSrc }) {
    const modalRef = useRef(null);

    useEffect(() => {
        // Close modal when pressing the 'Escape' key
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setShowModal(false);
            }
        };

        // Add event listeners when modal is open
        if (showModal) document.addEventListener("keydown", handleKeyDown);
        
        // Cleanup function to remove event listeners
        return () => document.removeEventListener("keydown", handleKeyDown);

    }, [showModal, setShowModal]);

    return (
        <div className={`modal-certificate ${showModal ? 'visible' : ''}`}>
            {/* <CrumpleEffect /> */}
            {showModal ? (
                <div className="modal-certificate__container">
                    {/* Close button that triggers the modal to close */}
                    <a href="https://www.youtube.com/" className="close-thick" onClick={(e) => {
                        e.preventDefault();
                        setShowModal(false);}
                        }>
                        &times; {/* You can use '&times;' for a close 'X' symbol */}
                    </a>
                    <img src={imgSrc} alt={alt} />
                </div>
            ) : null}
        </div>
    );
}

export default ModalCertificate;