import React, { useState, useEffect, Fragment } from 'react';
import Tab from 'components/Tab';
import projectsData from 'assets/jsons/projects.json';
import Project from 'components/Project';
import './index.css';

const TabsMenu = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [animationKey, setAnimationKey] = useState(0);
    const projectsPerPage = 100;
    const categories = Object.keys(projectsData);

    const projects = categories.reduce((acc, category) => {
        acc[category] = projectsData[category] || [];
        return acc;
    }, {});

    const activeCategory = categories[activeTab];
    const activeProjects = projects[activeCategory] || [];

    const startIndex = (currentPage - 1) * projectsPerPage;
    const displayedProjects = activeProjects.slice(startIndex, startIndex + projectsPerPage);

    useEffect(() => {
        setAnimationKey(prevKey => prevKey + 1);
    }, [activeTab, currentPage]);

    const handleTabClick = (index) => {
        setActiveTab(index);
        setCurrentPage(1);
    };

    return (
        <div className="tabs-container">
            <nav className="navigation-tab">
                {categories.map((tab, index) => (
                    <Tab key={index} text={tab} active={activeTab === index} onClick={() => handleTabClick(index)}/>
                ))}
            </nav>

            <div className="tab-content">
                <div className="projects-container">
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
                </div>
            </div>
        </div>
    );
};

export default TabsMenu;
