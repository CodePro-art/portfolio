import { Suspense, lazy, Fragment } from 'react';
import { Transition } from 'react-transition-group';
import Section from 'components/Section';
import { useTheme } from 'components/ThemeProvider';
import { reflow } from 'utils/transition';
import prerender from 'utils/prerender';
import './index.css';

const DisplacementSphere = lazy(() => import('components/DisplacementSphere'));

function Bg({ id, sectionRef, disciplines, scrollIndicatorHidden, ...rest }) {
    const theme = useTheme();
    const titleId = `${id}-title`;

    return (
        <Section className="bg" as="section" ref={sectionRef} id={id} aria-labelledby={titleId} tabIndex={-1} {...rest} >
        <Transition key={theme.themeId} appear={!prerender} in={!prerender} timeout={3000} onEnter={reflow} >
            {status => (
                <Fragment>
                    {!prerender && (
                    <Suspense fallback={null}>
                        <DisplacementSphere />
                    </Suspense>
                    )}
                </Fragment>
            )}
        </Transition>
        </Section>
    );
}

export default Bg;
