import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import Heading from 'components/Heading';
import prerender from 'utils/prerender';
import DecoderText from 'components/DecoderText';
import Text from 'components/Text';
import { useScrollRestore, useRouteTransition } from 'hooks';
import { tokens } from 'components/ThemeProvider/theme';
import Icon from 'components/Icon';
import { msToNum, numToMs } from 'utils/style';
import './index.css';

const initDelay = tokens.base.durationS;

const ArrowIcon = () => (
    <svg display="none">
        <symbol id="arrow">
        <polyline points="7 10,12 15,17 10" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </symbol>
    </svg>
);

const TimelineItem = ({ id, date, title, content }) => (
    <div className="timeline__item">
        <div className="timeline__item-header">
            <button
            className="timeline__arrow"
            type="button"
            id={id}
            aria-labelledby={`${id}-name`}
            aria-expanded="false"
            aria-controls={`${id}-ctrld`}
            aria-haspopup="true"
            data-item={id.replace("item", "")}
            >
            <svg className="timeline__arrow-icon" viewBox="0 0 24 24" width="24px" height="24px">
                <use href="#arrow" />
            </svg>
            </button>
            <span className="timeline__dot"></span>
            <span id={`${id}-name`} className="timeline__meta">
            <time className="timeline__date" dateTime={date}>{date}</time><br />
            <strong className="timeline__title">{title}</strong>
            </span>
        </div>
        <div className="timeline__item-body" id={`${id}-ctrld`} role="region" aria-labelledby={id} aria-hidden="true">
            <div className="timeline__item-body-content">
                <Text secondary as="span">
                    {content}
                </Text>
            </div>
        </div>
    </div>
);

const Button = ({ onClick, action }) => (
    <button className="button" type="button" data-action={action.toLowerCase()} onClick={onClick}>
        {action}
    </button>
);
class CollapsibleTimeline {
    constructor(el) {
        this.el = el;
        this.init();
    }
    
    init() {
        this.el?.addEventListener("click", this.itemAction.bind(this));
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
    var timelineData = require('./timeline.json');

    let title = theme === "education" ? "Education" :"Work Experience";

    useEffect(() => {
        const ctl = new CollapsibleTimeline(timelineRef.current);
        return () => { ctl.el?.removeEventListener("click", ctl.itemAction);};
    }, []);

    return (
        <div className="time-container">
            <div id="timeline" className="timeline" ref={timelineRef}>
                <Heading
                    className={classNames('timeline__title', `timeline__title--${status}`, {'timeline__title--hidden': prerender, })}
                    level={3}
                    as="h1"
                    style={getDelay(tokens.base.durationXS, initDelay, 0.7)}
                >
                    <DecoderText
                        text={title}
                        start={status !== 'exited' && !prerender}
                        delay={1000}
                    />
                </Heading>
                <div className="button-group">
                    <Button onClick={() => {}} action="Expand All" />
                    <Button onClick={() => {}} action="Collapse All" />
                </div>
                <ArrowIcon />
                <Icon icon={'chevronRight'} />
                {timelineData[theme].map((item) => (
                    <TimelineItem
                        key={item.id}
                        id={item.id}
                        date={item.date}
                        title={item.title}
                        content={item.content}
                    />
                ))}
            </div>
        </div>
    );
};

export default Timeline;