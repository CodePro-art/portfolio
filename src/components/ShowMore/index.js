import './index.css';
import React, { useState, useRef, useEffect } from 'react';

const ShowMore = ({ children, maxHeight = 100 }) => {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null); 

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
        className="show-more-button text"
        onClick={toggle}
      >
        {expanded ? '▲   Hide sources' : '▼   View all sources'}
      </button>
    </div>
  );
};

export default ShowMore;
