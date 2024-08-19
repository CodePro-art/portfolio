import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import Section from 'components/Section';
import { useScrollRestore, useRouteTransition } from 'hooks';
import Heading from 'components/Heading';
import DecoderText from 'components/DecoderText';
import prerender from 'utils/prerender';
import { tokens } from 'components/ThemeProvider/theme';
import { msToNum, numToPx, numToMs } from 'utils/style';
import './index.css';

const initDelay = tokens.base.durationS;

function getDelay(delayMs, initDelayMs = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return { '--delay': numToMs((msToNum(initDelayMs) + numDelay).toFixed(0)) };
}

// ArrowIcon Component
const ArrowIcon = () => (
  <svg display="none">
    <symbol id="arrow">
      <polyline points="7 10,12 15,17 10" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </symbol>
  </svg>
);

// Button Component
const Button = ({ onClick, action }) => (
  <button className="btn" type="button" data-action={action.toLowerCase()} onClick={onClick}>
    {action}
  </button>
);

// TimelineItem Component
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
        <p className="timeline__item-p">{content}</p>
      </div>
    </div>
  </div>
);

// Timeline Component
const Timeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctl = new CollapsibleTimeline(timelineRef.current);
    return () => { ctl.el?.removeEventListener("click", ctl.itemAction);};
  }, []);

  const timelineData = [
    {
      id: 'item1',
      date: 'January 1, 1970',
      title: 'Unix Epoch',
      content: 'This is the day the Unix clock began (or December 31, 1969 if you live behind UTC 😉).',
    },
    {
      id: 'item2',
      date: 'October 17, 1973',
      title: 'Digits Within ISO 8601 Format',
      content: 'At 6:36:57 PM UTC, the date in ISO 8601 format (1973-10-17) within the time digits (119731017) appeared for the first time.',
    },
    {
      id: 'item3',
      date: 'September 9, 2001',
      title: '1 Billion Seconds',
      content: 'Unix time reached 1,000,000,000 seconds at 1:46:40 AM UTC. The Danish UNIX User Group celebrated this in Copenhagen, Denmark.',
    },
    {
      id: 'item4',
      date: 'February 13, 2009',
      title: '1,234,567,890 Seconds',
      content: 'At 11:31:30 PM UTC, the digits of the time were 1234567890. This was celebrated worldwide, and even Google had a doodle for it.',
    },
    {
      id: 'item5',
      date: 'May 18, 2033',
      title: '2 Billion Seconds',
      content: 'Unix time will reach 2,000,000,000 seconds at 3:33:20 AM UTC.',
    },
    {
      id: 'item6',
      date: 'January 19, 2038',
      title: 'Unix Epochalypse',
      content: 'Also known as the year 2038 problem, clocks running on a 32-bit signed integer will flip from 3:14:08 AM UTC on this day to 8:45:52 PM UTC on December 13, 1901.',
    },
    {
      id: 'item1',
      date: 'January 1, 1970',
      title: 'Unix Epoch',
      content: 'This is the day the Unix clock began (or December 31, 1969 if you live behind UTC 😉).',
    },
    {
      id: 'item2',
      date: 'October 17, 1973',
      title: 'Digits Within ISO 8601 Format',
      content: 'At 6:36:57 PM UTC, the date in ISO 8601 format (1973-10-17) within the time digits (119731017) appeared for the first time.',
    },
    {
      id: 'item3',
      date: 'September 9, 2001',
      title: '1 Billion Seconds',
      content: 'Unix time reached 1,000,000,000 seconds at 1:46:40 AM UTC. The Danish UNIX User Group celebrated this in Copenhagen, Denmark.',
    },
    {
      id: 'item4',
      date: 'February 13, 2009',
      title: '1,234,567,890 Seconds',
      content: 'At 11:31:30 PM UTC, the digits of the time were 1234567890. This was celebrated worldwide, and even Google had a doodle for it.',
    },
    {
      id: 'item5',
      date: 'May 18, 2033',
      title: '2 Billion Seconds',
      content: 'Unix time will reach 2,000,000,000 seconds at 3:33:20 AM UTC.',
    },
    {
      id: 'item6',
      date: 'January 19, 2038',
      title: 'Unix Epochalypse',
      content: 'Also known as the year 2038 problem, clocks running on a 32-bit signed integer will flip from 3:14:08 AM UTC on this day to 8:45:52 PM UTC on December 13, 1901.',
    },
  ];

  return (
    <div id="timeline" className="timeline" ref={timelineRef}>
      <div className="btn-group">
        <Button onClick={() => {}} action="Expand All" />
        <Button onClick={() => {}} action="Collapse All" />
      </div>
      {timelineData.map((item) => (
        <TimelineItem
          key={item.id}
          id={item.id}
          date={item.date}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

// Main Component
const Journey = () => {
  const { status } = useRouteTransition();
  useScrollRestore();

  return (
    <Section className={classNames('contact', `contact--${status}`)}>
      <Helmet>
        <title>MyJourney | Netanel Mazuz</title>
        <meta name="description" content="Find out more about my personal professional journey and lean more about me." />
      </Helmet>
      <Heading
        className={classNames('contact__title', `contact__title--${status}`, {'contact__title--hidden': prerender, })}
        level={3}
        as="h1"
        style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
      >
        <DecoderText
          text="My Journey"
          start={status !== 'exited' && !prerender}
          delay={300}
        />
      </Heading>
      <ArrowIcon />
      
      <Timeline />
      </Section>
  );
};

export default Journey;

// CollapsibleTimeline Class (JavaScript functionality)
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

