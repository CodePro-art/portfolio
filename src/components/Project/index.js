import React, { useEffect, useRef, useState} from "react";
import classNames from "classnames";
import imageMap from "assets/maps/imageMap";
import Text from "components/Text";
import Link from "components/Link";
import "./index.css";

const Project = ({ imgSrc, title, id, description, gitLink, siteLink, delay, majorTool, tool }) => {
    const image = imageMap[imgSrc] || "";
    const mt = imageMap[tool] || null;
    const animationDelay = `${delay}s`;
    const titleRef = useRef(null);

    useEffect(() => {
        const adjustFontSize = () => {
            const titleElement = titleRef.current;
            if (!titleElement) return;

            const containerWidth = titleElement.scrollWidth;
            let fontSize = 20;
            titleElement.style.fontSize = `${fontSize}px`;

            while (fontSize * title.length - 150 > containerWidth && fontSize > 12) {
                fontSize -= 0.1;
                titleElement.style.fontSize = `${fontSize}px`;
            }
        };

        adjustFontSize();
        window.addEventListener("resize", adjustFontSize);
        return () => window.removeEventListener("resize", adjustFontSize);
    }, [title]);

    return (
        <div className={classNames("tile", `project-${id}`, "animate-fade-in")} style={{ animationDelay }}>
            <div className="text">
                <div className={classNames("animate-text", "project-links")}>
                    <div className="major-framework">
                        <h3 ref={titleRef} className="project-title">{title}</h3>
                        <p className="project-tool">{majorTool}</p>
                        <img className="platform-icon" src={mt} />
                    </div>
                    <Link secondary href={gitLink} className="project-link git"> to Git </Link>
                </div>
            </div>
            <a href={siteLink} className="image">
                <img src={image} alt={title} className="project-preview"/>
                <Text secondary as="span" className={"project-description"}>
                    <strong>{description}</strong>
                </Text>
            </a>
        </div>
    );
};

export default React.memo(Project);
