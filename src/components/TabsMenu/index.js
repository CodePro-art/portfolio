import React, { useState } from 'react';
import Tab from 'components/Tab';
import './index.css';

const TabsMenu = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { icon: 'code', text: 'Frontend' },
        { icon: 'backend', text: 'Backend' },
        { icon: 'ai', text: 'AI' },
        { icon: 'hardware', text: 'Hardware' },
    ];

    return (
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
    );
};

export default TabsMenu;