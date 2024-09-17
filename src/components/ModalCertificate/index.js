import React from 'react';
import CrumpleEffect from 'components/CrumpleEffect';
import './index.css';

function ModalCertificate({ showModal, setShowModal, alt, imgSrc }) {
    
    return (
        <div className={`modal-certificate ${showModal ? 'visible' : ''}`}>
            <CrumpleEffect />
            {showModal ? (
                <div className="modal-certificate__container">
                    {/* Close button that triggers the modal to close */}
                    <a href="#" className="close-thick" onClick={(e) => {
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