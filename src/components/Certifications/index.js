import React, { useRef, useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import classNames from 'classnames';
import Heading from 'components/Heading';
import prerender from 'utils/prerender';
import { tokens } from 'components/ThemeProvider/theme';
import { msToNum, numToMs } from 'utils/style';
import Icon from 'components/Icon';
import certificates from 'assets/jsons/certificates.json';
import ModalCertificate from 'components/ModalCertificate';
import imageMap from 'assets/maps/imageMap';
import './index.css';

AOS.init();

const initDelay = tokens.base.durationS;

function getDelay(delayMs, initDelayMs = numToMs(0), multiplier = 1) {
    const numDelay = msToNum(delayMs) * multiplier;
    return { '--delay': numToMs((msToNum(initDelayMs) + numDelay).toFixed(0)) };
}

const Certificate = ({ cert, index }) => {
    const [show_modal, setShowModal] = useState(false);

    const handleShowModal = (e) => {
        e.preventDefault();
        setShowModal(prev => !prev);
    };

    const image = imageMap[cert.imgSrc] || '';
    if (!image) return null;

    return (
        <div className="certificate-item" style={getDelay(tokens.base.durationXS, initDelay, 0.3)}>
            <ModalCertificate 
                showModal={show_modal} 
                setShowModal={setShowModal} 
                alt={cert.alt} 
                imgSrc={image} 
            />
            <a
                key={index}
                href={cert.href}
                data-title={cert.title}
                data-pswp-width="530"
                data-pswp-height="370"
                className='certificate-link'
                onClick={handleShowModal}
            >
                <img
                    src={image}
                    width={cert.width}
                    height={cert.height}
                    loading="lazy"
                    alt={cert.alt}
                    data-aos="fade-up"
                    data-bs-toggle="modal"
                    className='certificate-img'
                />
            </a>
            <span className="certificate-info">
                {cert.title}
            </span>
        </div>
    );
};

const Certificates = () => {
    const scrollContainerRef = useRef(null);
    // certificates.push(...certificates);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        let isDown = false;
        let startX;
        let scrollLeft;

        const handleMouseDown = (e) => {
            isDown = true;
            scrollContainer.classList.add('active');
            startX = e.pageX - scrollContainer.offsetLeft;
            scrollLeft = scrollContainer.scrollLeft;
        };

        const handleMouseLeave = () => {
            isDown = false;
            scrollContainer.classList.remove('active');
        };

        const handleMouseUp = () => {
            isDown = false;
            scrollContainer.classList.remove('active');
        };

        const handleMouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX); // Scroll speed
            scrollContainer.scrollLeft = scrollLeft - walk;
        };

        const handleWheel = (e) => {
            e.preventDefault();
            scrollContainer.scrollLeft += 5*e.deltaY;
        };

        scrollContainer.addEventListener('mousedown', handleMouseDown);
        scrollContainer.addEventListener('mouseleave', handleMouseLeave);
        scrollContainer.addEventListener('mouseup', handleMouseUp);
        scrollContainer.addEventListener('mousemove', handleMouseMove);
        scrollContainer.addEventListener('wheel', handleWheel);

        return () => {
            scrollContainer.removeEventListener('mousedown', handleMouseDown);
            scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
            scrollContainer.removeEventListener('mouseup', handleMouseUp);
            scrollContainer.removeEventListener('mousemove', handleMouseMove);
            scrollContainer.removeEventListener('wheel', handleWheel);
        };
    }, []);

    const handlePrevious = () => {
        const scrollContainer = scrollContainerRef.current;
        const scrollAmount = 300;
        scrollContainer.scrollLeft -= scrollAmount;
    };

    const handleNext = () => {
        const scrollContainer = scrollContainerRef.current;
        const scrollAmount = 300; 
        scrollContainer.scrollLeft += scrollAmount;
    };
    
    return (
        <div className="certificates-container">
            <div className="certificate-header">
                <Heading
                    className={classNames('certificates__title', { 'certificates__title--hidden': prerender })}
                    level={2}
                    as="h2"
                    data-aos="fade-down"
                    style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
                >
                    Certificates
                </Heading>
                <hr data-aos="fade-down" className='line-separator'/>
                <p className="certificate-scroll" data-aos="fade-right">Use scroll for horizontal scrolling and click the image to open</p>
            </div>
            
            <div className="certificate-carousel" data-aos="fade-up">
                <div className="certificate-carousel-controls">
                    <Icon icon="chevronRight" className="arrow-left" onClick={handlePrevious} />
                </div>
                <div className="certificate-carousel-container" ref={scrollContainerRef}>
                    {certificates.map((cert, index) => <Certificate key={index} index={index} cert={cert} />)}
                </div>
                <div className="certificate-carousel-controls">
                    <Icon icon="chevronRight" className="arrow-right" onClick={handleNext} />
                </div>
            </div>
        </div>
    );
};

export default Certificates;
