import React, { useState } from 'react';

const Sidebar = ({ activeSection, onSectionClick }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const sections = [
    { id: 'values', label: 'القيم' },
    { id: 'goals-vision-mission', label: 'الأهداف والرسالة' },
    { id: 'curriculums', label: 'المناهج' },
    { id: 'parents-council', label: 'مجلس الأمهات' }
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`page-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <span className="hamburger-icon">☰</span>
        <span className="sidebar-title">القائمة</span>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {sections.map(section => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`sidebar-link ${activeSection === section.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSectionClick(section.id);
                }}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
