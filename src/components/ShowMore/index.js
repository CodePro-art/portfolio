import './index.css';
import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from 'components/ThemeProvider';

const ShowMore = ({ children, maxHeight = 100 }) => {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null); 
  const theme = useTheme();

  const toggle = () => setExpanded(!expanded);
  const contentHeight = contentRef.current ? contentRef.current.scrollHeight : 0;

  return (
    <div className="show-more">
      <div className='show-more__content'
        ref={contentRef}
        style={{
          maxHeight: expanded ? `${contentHeight}px` : `${maxHeight}px`,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        {children}
      </div>
      <button 
        className={`show-more-button show-more-button--${theme.themeId} text ${expanded ? 'expanded' : ''}`}
        onClick={toggle}
      >
        {expanded ? '▲   Hide sources' : '▼   View all sources'}
      </button>
    </div>
  );
};

export default ShowMore;
