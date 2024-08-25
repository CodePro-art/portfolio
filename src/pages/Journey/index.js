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

const Journey = () => {
  const { status } = useRouteTransition();
  useScrollRestore();

  return (
    <Section className={classNames('journey', `journey--${status}`)}>
      <Helmet>
        <title>Journey | Netanel Mazuz</title>
        <meta name="description" content="Find out more about my personal professional journey and lean more about me." />
      </Helmet>
      
      <div className="journey-wrapper">
          <Heading
            className={classNames('journey__title', `journey__title--${status}`, {'journey__title--hidden': prerender, })}
            level={3}
            as="h1"
            style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
          >
            <DecoderText
              text="My Journey"
              start={status !== 'exited' && !prerender}
              delay={300}
              className={'journey__title-text'}
            />
          </Heading>
        <div className="timeline-container">
          <Timeline theme={"education"}/>
          <Timeline theme={"work-experience"}/>
        </div>

      </div>
      </Section>
  );
};

export default Journey;
