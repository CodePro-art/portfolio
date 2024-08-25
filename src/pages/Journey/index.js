import classNames from 'classnames';
import { Suspense, lazy, Fragment } from 'react';
import { Transition } from 'react-transition-group';
import { reflow } from 'utils/transition';
import { Helmet } from 'react-helmet';
import Section from 'components/Section';
import { useScrollRestore, useRouteTransition } from 'hooks';
import Heading from 'components/Heading';
import DecoderText from 'components/DecoderText';
import prerender from 'utils/prerender';
import { tokens } from 'components/ThemeProvider/theme';
import { useTheme } from 'components/ThemeProvider';
import { msToNum, numToMs } from 'utils/style';
import Timeline from 'components/Timeline';
import './index.css';

const initDelay = tokens.base.durationS;
const DisplacementSphere = lazy(() => import('components/DisplacementSphere'));

function getDelay(delayMs, initDelayMs = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return { '--delay': numToMs((msToNum(initDelayMs) + numDelay).toFixed(0)) };
}

const Journey = () => {
  const { status } = useRouteTransition();
  const theme = useTheme();
  
  useScrollRestore();

  return (
    <Section 
    className={classNames('journey', `journey--${status}`)}
    as="section"
    >
      <Transition
        key={theme.themeId}
        appear={!prerender}
        in={!prerender}
        timeout={3000}
        onEnter={reflow}
      >
        {status => (
          <Fragment>
            {!prerender && (
              <Suspense fallback={null}>
                <DisplacementSphere />
              </Suspense>
            )}
            <Helmet>
              <title>Journey | Netanel Mazuz</title>
              <meta name="description" content="Find out more about my personal professional journey and lean more about me." />
            </Helmet>
            
            <div className="journey-wrapper">
                <Heading
                  className={classNames('journey__title', `journey__title--${status}`, {'journey__title--hidden': prerender, })}
                  level={2}
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
          </Fragment>
        )}
      </Transition>
    </Section>
  );
};

export default Journey;
