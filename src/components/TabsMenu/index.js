import React, { useState, useEffect, Fragment } from 'react';
import Tab from 'components/Tab';
import projectsData from 'assets/jsons/projects.json';
import { useRouteTransition } from 'hooks';
import imageMap from 'assets/maps/imageMap';
import classNames from 'classnames';
import Heading from 'components/Heading';
import { msToNum, numToMs } from 'utils/style';
import prerender from 'utils/prerender';
import { tokens } from 'components/ThemeProvider/theme';
import DecoderText from 'components/DecoderText';
import Text from 'components/Text';
import Link from 'components/Link';
import './index.css';
import CrumpleEffect from 'components/CrumpleEffect';
import { ReactComponent as ReactSvg } from 'assets/svgs/react.svg';
import { ReactComponent as HtmlJsCssSvg } from 'assets/svgs/js-html-css.svg';
import { ReactComponent as ThreeJsSvg } from 'assets/svgs/three-js.svg';
import Icon from 'components/Icon';

const initDelay = tokens.base.durationS;

function getDelay(delayMs, initDelayMs = numToMs(0), multiplier = 1) {
    const numDelay = msToNum(delayMs) * multiplier;
    return { '--delay': numToMs((msToNum(initDelayMs) + numDelay).toFixed(0)) };
}

const Project = ({ imgSrc, title, id, description, gitLink, siteLink, delay , majorTool }) => {
    const image = imageMap[imgSrc] || '';
    const animationDelay = `${delay}s`;

    return (
        <div className={classNames('tile', `project-${id}`, 'animate-fade-in')} style={{ animationDelay }}>
            <div className="text">
                <div className={classNames('animate-text', "project-links")}>
                    <div className="major-framework">
                        <h3 className="project-title">{title}</h3>
                        <p className="project-tool">{majorTool}</p>
                        {toolUsed(majorTool)}
                    </div>
                    <Link secondary href={gitLink} className="project-link git"> to Git </Link>
                </div>
            </div>
            <a href={siteLink} className="image">
                <img src={image} alt={title} />
                <Text secondary as="span" className={'project-description'}>
                    <strong>{description}</strong>
                </Text>
            </a>
        </div>
    );
};

const toolUsed = (tool) => {
    switch (tool) {
        case 'ThreeJs':
            return <ThreeJsSvg className='platform-icon' />;
        case 'React':
            return <ReactSvg className='platform-icon' />;
        case 'Js HTML Css':
            return <HtmlJsCssSvg className='platform-icon' />;
        case 'Python':
            return <Icon name='python' />;
        case 'C++':
            return <Icon name='cplusplus' />;
        case 'C':
            return <Icon name='c' />;
        case 'Java':
            return <Icon name='java' />;
        case 'Javascript':
            return <Icon name='javascript' />;
        case 'Typescript':
            return <Icon name='typescript' />;
        case 'PHP':
            return <Icon name='php' />;
        case 'Ruby':
            return <Icon name='ruby' />;
        case 'Go':
            return <Icon name='go' />;
        case 'Kotlin':
            return <Icon name='kotlin' />;
        case 'Swift':
            return <Icon name='swift' />;
        case 'Dart':
            return <Icon name='dart' />;
        case 'Rust':
            return <Icon name='rust' />;
        
        default:
            return <Icon name='code' />;
    }
};

const TabsMenu = () => {
    const { status } = useRouteTransition();
    const [activeTab, setActiveTab] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [animationKey, setAnimationKey] = useState(0);

    const projectsPerPage = 6;
    const categories = ['frontend', 'backend', 'ai', 'hardware'];
    const tabContents = ['Frontend', 'Backend', 'AI', 'Hardware'];

    const projects = categories.reduce((acc, category) => {
        acc[category] = projectsData[category] || [];
        return acc;
    }, {});

    const activeCategory = categories[activeTab];
    const activeProjects = projects[activeCategory] || [];
    const totalPages = Math.ceil(activeProjects.length / projectsPerPage);

    const tabs = [
        { icon: 'code', text: 'Frontend' },
        { icon: 'backend', text: 'Backend' },
        { icon: 'ai', text: 'AI' },
        { icon: 'hardware', text: 'Hardware' },
    ];

    const startIndex = (currentPage - 1) * projectsPerPage;
    const displayedProjects = activeProjects.slice(startIndex, startIndex + projectsPerPage);

    useEffect(() => {
        setAnimationKey(prevKey => prevKey + 1);
    }, [activeTab, currentPage]);

    const handlePrevious = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handleTabClick = (index) => {
        setActiveTab(index);
        setCurrentPage(1);
    };

    return (
        <div className="tabs-container">
            <CrumpleEffect />
            <nav className="navigation-tab">
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        icon={tab.icon}
                        text={tab.text}
                        active={activeTab === index}
                        onClick={() => handleTabClick(index)}
                    />
                ))}
            </nav>

            <div className="tab-content">
                <Heading
                    className={classNames('tab_title', `projects__title--${status}`, { 'projects__title--hidden': prerender })}
                    level={2}
                    as="h1"
                    style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
                >
                    <DecoderText
                        text={tabContents[activeTab]}
                        start={status !== 'exited' && !prerender}
                        delay={300}
                        className={'projects__title-text'}
                    />
                </Heading>

                <div className="projects-container">
                    <Icon icon="chevronRight" className="arrow-left" onClick={handlePrevious} />
                    <div className="projects">
                        {displayedProjects.map((project, index) => (
                            <Fragment key={`${project.id}-${animationKey}`}>
                                {index % 3 === 0 && index > 0 && <div key={`${project.id}-row-${index}`} className="project-row" />}
                                <div key={`${project.id}-${index}`} className="project-wrapper">
                                    <Project {...project} delay={index * 0.2} />
                                </div>
                            </Fragment>
                        ))}
                    </div>
                    <Icon icon="chevronRight" className="arrow-right" onClick={handleNext} />
                </div>
            </div>
        </div>
    );
};

export default TabsMenu;
