import React, { useState, useEffect, Fragment } from 'react';
import Tab from 'components/Tab';
import projectsData from 'assets/jsons/projects.json';
import Project from 'components/Project';
import './index.css';

const subcategories = {
    'Software': [
        'Frontend',
        'Backend',
        'Mobile',
        'Web',
        'Desktop',
        'Games',
        'Databases',
        'Software Architecture',
        'API & Integration',
        'Full-Stack',
    ],
    'Hardware': [
        'Embedded',
        'IoT',
        'Circuit',
        'PCB',
        'Robotics',
        'Prototyping',
        'Firmware',
        'Sensors ',
        'Microcontrollers',
        'Hardware-Software Interface',
    ],
    'AI & ML': [
        'NLP',
        'Computer Vision',
        'Reinforcement Learning',
        'Deep Learning',
        'Neural Networks',
        'Supervised Learning',
        'Unsupervised Learning',
        'Data Science & Analytics',
        'Predictive Modeling',
        'AI Ethics & Bias',
    ],
    'DevOps': [
        'CI/CD Pipelines',
        'Containerization',
        'IaC',
        'Cloud Services',
        'Automation Scripting',
        'Monitoring & Logging',
        'Configuration Management',
        'Server Management',
        'Virtualization',
        'Security & Compliance',
    ],
    'Personal': [
        'Passion Projects',
        'Side Projects',
        'Hobby Coding',
        'Creative Coding',
        'Exploratory Research',
        'Learning Projects',
        'Portfolio Projects',
        'Freelance Work',
        'Experimentation',
        'Independent Study',
    ],
};

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
    const activeSubcategories = subcategories[activeCategory] || [];

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
                    <Tab key={index} text={tab} active={activeTab === index} onClick={() => handleTabClick(index)} />
                ))}
            </nav>

            <div className="tab-content">
                <div className="projects-container">
                    {/* <div className="projects-header">
                        {activeSubcategories.map((subcategory, index) => (
                            <button
                                key={index}
                                className="subcategory-button"
                                style={{ animationDelay: `${index * 10}s`, opacity: 0, animation: 'fadeIn 0.5s forwards' }}
                            >
                                {subcategory}
                            </button>
                        ))}
                    </div> */}

                    <div className="projects">
                        {displayedProjects.map((project, index) => (
                            <Fragment key={`${project.id}-${animationKey}`}>
                                {index % 3 === 0 && index > 0 && <div key={`${project.id}-row-${index}`} className="project-row" />}
                                <div key={`${project.id}-${index}`} className="project-wrapper">
                                    <Project {...project} delay={index * 0.1} tool={project.majorTool.split(",")[0].trim()} />
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