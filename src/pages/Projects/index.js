import classNames from 'classnames';
import { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useScrollRestore, useRouteTransition } from 'hooks';
import Heading from 'components/Heading';
import DecoderText from 'components/DecoderText';
import prerender from 'utils/prerender';
import { tokens } from 'components/ThemeProvider/theme';
import { msToNum, numToMs } from 'utils/style';
import TabsMenu from 'components/TabsMenu';
import Footer from 'components/Footer';
import Bg from './bg';
import useInViewport from 'hooks/useInViewport'; // Import your custom hook
import './index.css';

const initDelay = tokens.base.durationS;

function getDelay(delayMs, initDelayMs = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return { '--delay': numToMs((msToNum(initDelayMs) + numDelay).toFixed(0)) };
}

const Projects = () => {
  const { status } = useRouteTransition();
  const menuRef = useRef(null);

  useScrollRestore();

  const intro = useRef();
  const isMenuVisible = useInViewport(menuRef, false, { threshold: 0.1 });

  return (
    <div className="projects-page">
      <Helmet>
          <title>Projects | Netanel Mazuz</title>
          <meta name="description" content="Explore my projects and learn more about my journey in the tech industry." />
      </Helmet>

      <Bg id="intro" sectionRef={intro} disciplines={null} scrollIndicatorHidden={null} />

      <div className="projects-wrapper">
          <Heading
            className={classNames('projects__title', `projects__title--${status}`, {'projects__title--hidden': prerender, })}
            level={2}
            as="h1"
            style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
            <DecoderText
              text="My Projects"
              start={status !== 'exited' && !prerender}
              delay={300}
              className={'projects__title-text'}
              />
          </Heading>
          <div className={classNames('menu-container', { 'menu-container--visible': isMenuVisible })} ref={menuRef}>
            <TabsMenu tabs={['List', 'Tags']} activeTab="List" setActiveTab={null} /> 
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
