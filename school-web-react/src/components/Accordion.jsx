import React, { useState, useEffect } from 'react';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const content = document.querySelector('.accordion-content');
    if (content) {
      if (isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0';
      }
    }
  }, [isOpen]);

  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={toggleAccordion}>
        <span className="accordion-title">{title}</span>
        <span className="accordion-icon">▼</span>
      </button>
      <div className="accordion-content">
        <div className="accordion-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
