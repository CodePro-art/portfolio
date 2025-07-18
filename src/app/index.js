import { lazy, Suspense, useState, useEffect, createContext, useReducer, Fragment } from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
// import { Analytics } from "@vercel/analytics/react"
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import Navbar from 'components/Navbar';
import ThemeProvider from 'components/ThemeProvider';
import VisuallyHidden from 'components/VisuallyHidden';
import CursorCanvas from 'components/CursorCanvas';
import { tokens } from 'components/ThemeProvider/theme';
import { msToNum } from 'utils/style';
import { useLocalStorage } from 'hooks';
import { initialState, reducer } from 'app/reducer';
import { reflow } from 'utils/transition';
import prerender from 'utils/prerender';
import './reset.css';
import './index.css';

const Home = lazy(() => import('pages/Home'));
const Contact = lazy(() => import('pages/Contact'));
const Journey = lazy(() => import('pages/Journey'));
const Projects = lazy(() => import('pages/Projects'));
const ProjectSER = lazy(() => import('pages/SER'));
const ProjectDFD = lazy(() => import('pages/DeepFakeDetection'));
const ProjectDM = lazy(() => import('pages/DeviceModels'));
const ProjectDTT = lazy(() => import('pages/DevTechTools'));
const Articles = lazy(() => import('pages/Articles'));
const Uses = lazy(() => import('pages/Uses'));
const Page404 = lazy(() => import('pages/404'));

export const AppContext = createContext();
export const TransitionContext = createContext();

const repoPrompt = `\u00A9 2021-${new Date().getFullYear()} Netanel Mazuz\n\nCheck out the source code: https://github.com/CodePro-art/portfolio`;

const App = () => {
  const [storedTheme] = useLocalStorage('theme', 'dark');
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    if (!prerender) {
      console.info(`${repoPrompt}\n\n`);
    }
    
    window.history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    dispatch({ type: 'setTheme', value: storedTheme });
  }, [storedTheme]);

  useEffect(() => {
    const checkIfMobileOrTablet = () => {
      return /Mobi|Tablet|iPad|iPhone/i.test(navigator.userAgent);
    };
    setIsMobileOrTablet(checkIfMobileOrTablet());
  }, []);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      <ThemeProvider themeId={state.theme}>
        {!isMobileOrTablet && <CursorCanvas />}
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

const AppRoutes = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Fragment>
      <Helmet>
        <link rel="canonical" href={`https://netanel-mazuz.dev${pathname}`} />
      </Helmet>
      <VisuallyHidden showOnFocus as="a" className="skip-to-main" href="#MainContent">
        Skip to main content
      </VisuallyHidden>
      <Navbar location={location} />
      <TransitionGroup component="main" className="app" tabIndex={-1} id="MainContent">
        <Transition
          key={pathname}
          timeout={msToNum(tokens.base.durationS)}
          onEnter={reflow}
        >
          {status => (
            <TransitionContext.Provider value={{ status }}>
              <div className={classNames('app__page', `app__page--${status}`)}>
                <Suspense fallback={<Fragment />}>
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/my_work" component={Projects} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/journey" component={Journey} />
                    <Route path="/projects/speech-emotion-recognition" component={ProjectSER} />
                    <Route path="/projects/deep-fake-detection" component={ProjectDFD} />
                    <Route path="/projects/device-models" component={ProjectDM} />
                    <Route path="/projects/devtech-tools" component={ProjectDTT} />
                    <Route path="/uses" component={Uses} />
                    <Route path="/articles" component={Articles} />
                    <Route component={Page404} />
                  </Switch>
                </Suspense>
              </div>
            </TransitionContext.Provider>
          )}
        </Transition>
      </TransitionGroup>
    </Fragment>
  );
};

export default App;
