import React, { useEffect, useRef, useState } from "react";
import './index.css';

function ModalCertificate({ showModal, setShowModal, alt, imgSrc }) {
    const [isClosing, setIsClosing] = useState(false);
    const modalRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") closeModal();
        };

        if (showModal) 
            document.addEventListener("keydown", handleKeyDown);
        else 
            document.removeEventListener("keydown", handleKeyDown);
        

        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [showModal]);

    const closeModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            setShowModal(false);
        }, 300); // Match animation duration
    };

    return (
        <div className={`modal-certificate ${isClosing ? "closing" : "visible"}`}>
            {showModal ? (
                <div className={`modal-certificate__container ${isClosing ? "close" : "open"}`}>
                    <a 
                        href="https://www.youtube.com/" 
                        className="close-thick" 
                        onClick={(e) => {
                            e.preventDefault();
                            closeModal();
                        }}
                    >
                        &times; {/* You can use '&times;' for a close 'X' symbol */}
                    </a>
                    <img src={imgSrc} alt={alt} />
                </div>
            ) : null}
        </div>
    );
}

export default ModalCertificate;