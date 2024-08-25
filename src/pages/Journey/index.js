import classNames from 'classnames';
import { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useScrollRestore, useRouteTransition } from 'hooks';
import Heading from 'components/Heading';
import DecoderText from 'components/DecoderText';
import prerender from 'utils/prerender';
import { tokens } from 'components/ThemeProvider/theme';
import { msToNum, numToMs } from 'utils/style';
import Timeline from 'components/Timeline';
import Footer from 'components/Footer';
import { Button } from 'components/Button';
import Bg from './bg';
import './index.css';

const initDelay = tokens.base.durationS;

function getDelay(delayMs, initDelayMs = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return { '--delay': numToMs((msToNum(initDelayMs) + numDelay).toFixed(0)) };
}

const Journey = () => {
  const { status } = useRouteTransition();
  const FILE_ID = '1vcZ208YZRwB1GZZJfVP4bR58NuOZq5Jn';
  useScrollRestore();

  const intro = useRef();

  return (
    <div className="journey">
      <Helmet>
        <title>Journey | Netanel Mazuz</title>
        <meta name="description" content="Find out more about my personal professional journey and lean more about me." />
      </Helmet>
      <Bg
        id="intro"
        sectionRef={intro}
        disciplines={null}
        scrollIndicatorHidden={null}
      />
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

        <div className="resume-container">
        <Heading
            className={classNames('journey__title', `journey__title--${status}`, {'journey__title--hidden': prerender, })}
            level={2}
            as="h1"
            style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
            <DecoderText
              text="Resume"
              start={status !== 'exited' && !prerender}
              delay={300}
              className={'journey__title-text'}
              />
          </Heading>
          <iframe 
              className="resume-pdf"
              src={`https://drive.google.com/file/d/${FILE_ID}/preview`}
              width="820"
              height="1120" 
              allow="autoplay"
              title="Netanel Mazuz CV PDF"
          />
          <Button className="download-button" onClick={() => {}}>Download</Button>
        </div>
      </div>
      <Footer />
    </div>
      // <Transition
      //   // key={theme.themeId}
      //   appear={!prerender}
      //   in={!prerender}
      //   timeout={3000}
      //   onEnter={reflow}
      // >
      //   {status => (
      //     <Fragment>
      //       {!prerender && (
      //         <Suspense fallback={null}>
      //           <DisplacementSphere />
      //         </Suspense>
      //       )}
      //       <Helmet>
      //         <title>Journey | Netanel Mazuz</title>
      //         <meta name="description" content="Find out more about my personal professional journey and lean more about me." />
      //       </Helmet>
            
            
            // <div className="journey-wrapper">
            //     <Heading
            //       className={classNames('journey__title', `journey__title--${status}`, {'journey__title--hidden': prerender, })}
            //       level={2}
            //       as="h1"
            //       style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            //       >
            //       <DecoderText
            //         text="My Journey"
            //         start={status !== 'exited' && !prerender}
            //         delay={300}
            //         className={'journey__title-text'}
            //         />
            //     </Heading>
            //   <div className="timeline-container">
            //     <Timeline theme={"education"}/>
            //     <Timeline theme={"work-experience"}/>
                
            //   </div>
              
            // </div>
            
      //       <Footer />
            
      //     </Fragment>
      //   )}
      
      // </Transition>
  );
};

export default Journey;
