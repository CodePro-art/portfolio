import React from 'react';
import classNames from 'classnames';
import imageMap from 'assets/maps/imageMap';
import { ReactComponent as ReactSvg } from 'assets/svgs/react.svg';
import { ReactComponent as HtmlJsCssSvg } from 'assets/svgs/js-html-css.svg';
import { ReactComponent as ThreeJsSvg } from 'assets/svgs/three-js.svg';
import Text from 'components/Text';
import Link from 'components/Link';
import Icon from 'components/Icon';
import './index.css';

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
            return <Icon name='c++' />;
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

export default Project;