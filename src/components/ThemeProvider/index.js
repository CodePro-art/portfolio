import { createContext, Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';
import useTheme from './useTheme';
import { theme, tokens } from './theme';
import { media } from 'utils/style';
import GothamBook from 'assets/fonts/gotham-book.woff2';
import GothamMedium from 'assets/fonts/gotham-medium.woff2';

export const fontStyles = `
  @font-face {
    font-family: "Gotham";
    font-weight: 400;
    src: url(${GothamBook}) format("woff");
    font-display: swap;
  }

  @font-face {
    font-family: "Gotham";
    font-weight: 500;
    src: url(${GothamMedium}) format("woff2");
    font-display: swap;
  }
`;

const ThemeContext = createContext({});

const ThemeProvider = ({
  themeId = 'dark',
  theme: themeOverrides,
  children,
  className,
  as: Component = 'div',
}) => {
  const currentTheme = { ...theme[themeId], ...themeOverrides };
  const parentTheme = useTheme();
  const isRootProvider = !parentTheme.themeId;

  const toggle = document.getElementsByClassName('theme-toggle')[0];
  if (toggle) {
    const position = toggle.getBoundingClientRect();
    const x = position.x + (position.width / 2); 
    const y = position.y + (position.height / 2); 
    document.styleSheets[0].insertRule(`@keyframes grow 
    { 0% { clip-path: circle(0% at ${x}px ${y}px); }
    100% { clip-path: circle(100%); }}`, document.styleSheets[0].cssRules.length);
  }

  // Save root theme id to local storage and apply class to body
  useEffect(() => {
    if (isRootProvider) {
      window.localStorage.setItem('theme', JSON.stringify(themeId));
      document.body.classList.remove('light', 'dark');
      document.body.classList.add(themeId);
    }
  }, [themeId, isRootProvider]);

  return (
    <ThemeContext.Provider value={currentTheme}>
      {/* Add fonts and base tokens for the root provider */}
      {isRootProvider && (
        <Fragment>
          <Helmet>
            <link rel="preload" href={GothamMedium} as="font" crossorigin="" />
            <link rel="preload" href={GothamBook} as="font" crossorigin="" />
            <style>{fontStyles}</style>
            <style>{tokenStyles}</style>
          </Helmet>
          {children}
        </Fragment>
      )}
      {/* Nested providers need a div to override theme tokens */}
      {!isRootProvider && (
        <Component
          className={classNames('theme-provider', className)}
          style={createThemeStyleObject(currentTheme)}
        >
          {children}
        </Component>
      )}
    </ThemeContext.Provider>
  );
};

/**
 * Transform theme token objects into CSS custom property strings
 */
function createThemeProperties(theme) {
  return Object.keys(theme)
    .filter(key => key !== 'themeId')
    .map(key => `--${key}: ${theme[key]};`)
    .join('\n');
}

/**
 * Transform theme tokens into a React CSSProperties object
 */
function createThemeStyleObject(theme) {
  let style = {};

  for (const key of Object.keys(theme)) {
    if (key !== 'themeId') {
      style[`--${key}`] = theme[key];
    }
  }

  return style;
}

/**
 * Generate media queries for tokens
 */
function createMediaTokenProperties() {
  const mediaEntries = Object.entries(media);
  
  return mediaEntries
    .map(([key, breakpoint]) => {
      // Skip ultra-wide and wide as they use min-width
      if (key === 'ultraWide') {
        return `
          @media (min-width: ${breakpoint}px) {
            :root {
              ${createThemeProperties(tokens[key])}
            }
          }
        `;
      }
      
      if (key === 'wide') {
        return `
          @media (min-width: 1921px) and (max-width: 2560px) {
            :root {
              ${createThemeProperties(tokens[key])}
            }
          }
        `;
      }
      
      // Standard max-width queries for other breakpoints
      if (tokens[key]) {
        return `
          @media (max-width: ${breakpoint}px) {
            :root {
              ${createThemeProperties(tokens[key])}
            }
          }
        `;
      }
      
      return '';
    })
    .filter(Boolean)
    .join('\n');
}

export const tokenStyles = `
  :root {
    ${createThemeProperties(tokens.base)}
  }

  ${createMediaTokenProperties()}

  .dark {
    ${createThemeProperties(theme.dark)}
  }

  .light {
    ${createThemeProperties(theme.light)}
  }
`;

export {
  theme,
  useTheme,
  ThemeContext,
  createThemeProperties,
  createThemeStyleObject,
  createMediaTokenProperties,
};

export default ThemeProvider;
