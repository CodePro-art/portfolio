import { Link as RouterLink } from 'react-router-dom';
import classNames from 'classnames';
import { blurOnMouseUp } from 'utils/focus';
import './index.css';

// File extensions that can be linked to
const VALID_EXT = ['txt', 'png', 'jpg'];

const Link = ({ rel, target, children, secondary, className, href, as, onClick, ...rest }) => {
  const isValidExtension = VALID_EXT.includes(href?.split('.').pop());
  const isAnchor = href?.includes('://') || href?.[0] === '#' || isValidExtension;
  const relValue = rel || (isAnchor ? 'noreferrer noopener' : undefined);
  const targetValue = target || (isAnchor ? '_blank' : undefined);
  const Component = as || (isAnchor ? 'a' : RouterLink);

  const handleClick = (e) => {
    if (href?.startsWith('#')) {
      e.preventDefault(); // Prevent the default anchor link behavior
      const targetElement = document.getElementById(href.slice(1)); // Get the target element by ID
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Smooth scroll to the element
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top if target element is not found
      }
    }
    // Call any custom onClick handler passed as props
    if (onClick) onClick(e);
  };

  return (
    <Component
      className={classNames('link', className, { 'link--secondary': secondary })}
      rel={relValue}
      href={isAnchor ? href : undefined}
      to={!isAnchor ? href : undefined}
      target={targetValue}
      onClick={handleClick} // Attach the click handler
      onMouseUp={blurOnMouseUp}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Link;
