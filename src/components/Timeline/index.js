import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import Heading from 'components/Heading';
import prerender from 'utils/prerender';
import DecoderText from 'components/DecoderText';
import Text from 'components/Text';
import { useScrollRestore, useRouteTransition } from 'hooks';
import { tokens } from 'components/ThemeProvider/theme';
import { Button } from 'components/Button';
import Icon from 'components/Icon';
import Link from 'components/Link';
import { msToNum, numToMs } from 'utils/style';
import './index.css';

const initDelay = tokens.base.durationS;

const TimelineItem = ({ id, date, role, company, content, soft_skills, hard_skills }) => {
    return (
        <div className="timeline__item">
            <div className="timeline__item-header">
                <div className="timeline__arrow" type="button" id={id} aria-labelledby={`${id}-name`} aria-expanded="false" aria-controls={`${id}-ctrld`} aria-haspopup="true" data-item={id.replace("item", "")}>
                    <Icon icon={'chevronRight'} className={"timeline__arrow-icon"} />
                </div>
                <span className="timeline__dot"></span>
                <span id={`${id}-name`} className="timeline__meta">
                    <time className="timeline__date" dateTime={date}>{date}</time><br />
                    <strong className="timeline__title">{role}</strong><br />
                    <strong className="timeline__company">{company}</strong><br />
                </span>
            </div>
            <div className="timeline__item-body" id={`${id}-ctrld`} role="region" aria-labelledby={id} aria-hidden="true">
                <div className="timeline__item-body-content">
                    <Text secondary as="span">
                        {content}
                    </Text>
                </div>
                <div className="timeline__item-body-skills">
                    <Text secondary as="span">
                        <strong>Soft Skills:</strong><br />
                        <ul style={{ margin: 0, paddingLeft: '20px' }}>
                            {soft_skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </Text>
                    <Text secondary as="span">
                        <strong>Hard Skills:</strong><br />
                        <ul style={{ margin: 0, paddingLeft: '20px' }}>
                            {Object.keys(hard_skills).map((skill, index) => (
                                <li key={index}>
                                    <Link secondary className="skill__link" href={hard_skills[skill]} target="_blank">
                                        {skill}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Text>
                </div>
            </div>
        </div>
    );
};

class CollapsibleTimeline {
    constructor(el) {
        this.el = el;
        this.init();
    }

    init() {
        this.el?.addEventListener("click", this.itemAction.bind(this));
    }

    collapseAll() {
        const buttons = Array.from(this.el?.querySelectorAll('[aria-expanded="true"]'));
        for (let button of buttons) {
            const item = button.getAttribute("data-item");
            const ctrld = this.el?.querySelector(`#item${item}-ctrld`);
            const contentHeight = ctrld.firstElementChild?.offsetHeight;
            this.animateItemAction(button, ctrld, contentHeight, true);
        }
    }

    expandAll() {
        const buttons = Array.from(this.el?.querySelectorAll('[aria-expanded="false"]'));
        for (let button of buttons) {
            const item = button.getAttribute("data-item");
            const ctrld = this.el?.querySelector(`#item${item}-ctrld`);
            const contentHeight = ctrld.firstElementChild?.offsetHeight;
            this.animateItemAction(button, ctrld, contentHeight, false);
        }
    }

    animateItemAction(button, ctrld, contentHeight, shouldCollapse) {
        const expandedClass = "timeline__item-body--expanded";
        const animOptions = {
            duration: 300,
            easing: "cubic-bezier(0.65,0,0.35,1)"
        };

        if (shouldCollapse) {
            button.ariaExpanded = "false";
            ctrld.ariaHidden = "true";
            ctrld.classList.remove(expandedClass);
            animOptions.duration *= 2;
            this.animation = ctrld.animate([
                { height: `${contentHeight}px` },
                { height: `${contentHeight}px` },
                { height: "0px" }
            ], animOptions);
        } else {
            button.ariaExpanded = "true";
            ctrld.ariaHidden = "false";
            ctrld.classList.add(expandedClass);
            this.animation = ctrld.animate([
                { height: "0px" },
                { height: `${contentHeight}px` }
            ], animOptions);
        }
    }

    itemAction(e) {
        const { target } = e;
        const action = target?.getAttribute("data-action");
        const item = target?.getAttribute("data-item");

        if (action) {
            const targetExpanded = action === "expand" ? "false" : "true";
            const buttons = Array.from(this.el?.querySelectorAll(`[aria-expanded="${targetExpanded}"]`));
            const wasExpanded = action === "collapse";

            for (let button of buttons) {
                const buttonID = button.getAttribute("data-item");
                const ctrld = this.el?.querySelector(`#item${buttonID}-ctrld`);
                const contentHeight = ctrld.firstElementChild?.offsetHeight;

                this.animateItemAction(button, ctrld, contentHeight, wasExpanded);
            }

        } else if (item) {
            const button = this.el?.querySelector(`[data-item="${item}"]`);
            const expanded = button?.getAttribute("aria-expanded");

            if (!expanded) return;

            const wasExpanded = expanded === "true";
            const ctrld = this.el?.querySelector(`#item${item}-ctrld`);
            const contentHeight = ctrld.firstElementChild?.offsetHeight;

            this.animateItemAction(button, ctrld, contentHeight, wasExpanded);
        }
    }
}

function getDelay(delayMs, initDelayMs = numToMs(0), multiplier = 1) {
    const numDelay = msToNum(delayMs) * multiplier;
    return { '--delay': numToMs((msToNum(initDelayMs) + numDelay).toFixed(0)) };
}

const Timeline = ({ theme }) => {
    const { status } = useRouteTransition();
    useScrollRestore();

    const timelineRef = useRef(null);
    const ctlRef = useRef(null);
    var timelineData = require('assets/jsons/timeline.json');

    let title = theme === "education" ? "Education" : "Work Experience";

    useEffect(() => {
        ctlRef.current = new CollapsibleTimeline(timelineRef.current);
        return () => {
            ctlRef.current.el?.removeEventListener("click", ctlRef.current.itemAction);
        };
    }, []);

    return (
        <div className={classNames("time-container", `${theme}`)}>
            <div id="timeline" className="timeline" ref={timelineRef}>
                <Heading
                    className={classNames('timeline__title', `timeline__title--${status}`, { 'timeline__title--hidden': prerender, })}
                    level={3}
                    as="h1"
                    style={getDelay(tokens.base.durationXS, initDelay, 0.7)}
                >
                    <DecoderText
                        text={title}
                        start={status !== 'exited' && !prerender}
                        delay={1000}
                        className="timeline__title-text"
                    />
                </Heading>
                <div className="button-group">
                    <Button onClick={() => ctlRef.current.expandAll()}>Expand All</Button>
                    <Button onClick={() => ctlRef.current.collapseAll()}>Collapse All</Button>
                </div>
                {timelineData[theme].map((item) => (
                    <TimelineItem
                        key={item.id}
                        id={item.id}
                        date={item.date}
                        role={item.role}
                        company={item.company}
                        content={item.content}
                        soft_skills={item.soft_skills}
                        hard_skills={item.hard_skills}
                    />
                ))}
            </div>
        </div>
    );
};

export default Timeline;