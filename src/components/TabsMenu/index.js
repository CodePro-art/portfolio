import React, { useState } from 'react';
import Tab from 'components/Tab';
import './index.css';
import projectsData from 'assets/jsons/projects.json';
import imageMap from 'assets/imageMap'; // Import the image map

const Project = ({ imgSrc, title, subtitle, description, gitLink, siteLink }) => {
    const image = imageMap[imgSrc] || ''; // Get the image from the map

    return (
        <div className="tile">
            <img src={image} alt={title} />
            <div className="text">
                <h1 className="project-title">{title}</h1>
                <h2 className="subtitle">{subtitle}</h2>
                <p className="description">{description}</p>
                <div className="project-links">
                    <a href={gitLink} className="project-link">to Git</a>
                    <a href={siteLink} className="project-link">to Site</a>
                </div>
                <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

const TabsMenu = () => {
    const [activeTab, setActiveTab] = useState(0);
    
    const categories = ['frontend', 'backend', 'ai', 'hardware'];
    const tabContents = [
        'Frontend content goes here...',
        'Backend content goes here...',
        'AI content goes here...',
        'Hardware content goes here...',
    ];

    // Ensure that projectsData is an object with categories as keys
    const projects = categories.reduce((acc, category) => {
        acc[category] = projectsData[category] || [];
        return acc;
    }, {});

    const activeCategory = categories[activeTab];
    const activeProjects = projects[activeCategory] || [];

    const tabs = [
        { icon: 'code', text: 'Frontend' },
        { icon: 'backend', text: 'Backend' },
        { icon: 'ai', text: 'AI' },
        { icon: 'hardware', text: 'Hardware' },
    ];

    return (
        <div className="tabs-container">
            <nav className="navigation-tab">
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        icon={tab.icon}
                        text={tab.text}
                        active={activeTab === index}
                        onClick={() => setActiveTab(index)}
                    />
                ))}
            </nav>
            <div className="tab-content">
                <div className="projects-container">
                    {activeProjects.map((project, index) => (
                        <React.Fragment key={index}>
                            {index % 3 === 0 && index > 0 && <div className="project-row" />}
                            <Project {...project} />
                        </React.Fragment>
                    ))}
                </div>
                <div className="tab-description">
                    {tabContents[activeTab]}
                </div>
            </div>
        </div>
    );
};

export default TabsMenu;
