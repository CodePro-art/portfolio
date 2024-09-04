import React from 'react';
import './index.css';

function ModalCertificate({ showModal, setShowModal, alt, imgSrc }) {
    console.log(imgSrc);
    return (
        <div className={`modal-certificate ${showModal ? 'visible' : ''}`}>
            {showModal ? (
                <img src={imgSrc} alt={alt} />
            ) : null}
        </div>
    );
}

export default ModalCertificate;