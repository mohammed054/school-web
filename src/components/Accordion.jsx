import React, { useState, useEffect, useRef } from 'react';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      if (isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0';
      }
    }
  }, [isOpen]);

  return (
    <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <button className="accordion-header" onClick={toggleAccordion}>
        <span className="accordion-title">{title}</span>
        <span className="accordion-icon">{isOpen ? '▲' : '▼'}</span>
      </button>
      <div className="accordion-content" ref={contentRef}>
        <div className="accordion-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
