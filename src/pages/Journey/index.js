import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import Section from 'components/Section';
import { useScrollRestore, useRouteTransition } from 'hooks';
import Heading from 'components/Heading';
import DecoderText from 'components/DecoderText';
import prerender from 'utils/prerender';
import { tokens } from 'components/ThemeProvider/theme';
import { msToNum, numToMs } from 'utils/style';
import Timeline from 'components/Timeline';
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
