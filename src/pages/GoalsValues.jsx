import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CurriculumArticle from '../components/CurriculumArticle';

const GoalsValues = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('values');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hoveredMainSection, setHoveredMainSection] = useState(null);
  const [hoveredSubSection, setHoveredSubSection] = useState(null);
  const [hasInitialized, setHasInitialized] = useState(false);

  const values = [
    { id: 'citizenship', title: 'المواطنة والمسؤولية', content: 'تعزيز الهوية الوطنية والمسؤولية الاجتماعية.' },
    { id: 'islamic-values', title: 'مبادئ وقيم الإسلام', content: 'التأكيد على القيم الإنسانية في الحوار والتسامح والاعتدال والسلام والعمل التطوعي.' },
    { id: 'commitment', title: 'الالتزام والشفافية', content: 'الالتزام بالمهنية والشفافية في الأداء.' },
    { id: 'participation', title: 'المشاركة والمساءلة', content: 'الالتزام بالشراكة المجتمعية في العملية التربوية والمساءلة.' },
    { id: 'equality', title: 'التكافؤ والعدالة', content: 'تكافؤ الفرص التعليمية للجميع.' },
    { id: 'innovation', title: 'العلم والتكنولوجيا والابتكار', content: 'تحفيز الطاقات البشرية والمؤسسية باتجاه العلوم والتكنولوجيا والابتكار.' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.content-section');
      const scrollPosition = window.scrollY + 150;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!hasInitialized && !location.hash) {
      setHoveredMainSection('values');
      setHasInitialized(true);
    }
  }, [location, hasInitialized]);

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, [location.hash]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main>
      <div className="container">
        <div className="page-layout">
          <aside className={`page-sidebar ${isSidebarOpen ? 'show' : ''}`}>
            <div className="sidebar-toggle" onClick={toggleSidebar}>
              <span className="hamburger-icon">☰</span>
              <span className="sidebar-title">القائمة</span>
            </div>
            <nav className="sidebar-nav">
              <ul>
                <li>
                  <a 
                    href="#values" 
                    className={`sidebar-link ${activeSection === 'values' ? 'active' : ''}`} 
                    onClick={(e) => { e.preventDefault(); scrollToSection('values'); }}
                  >
                    القيم والأهداف
                  </a>
                </li>
                <li>
                  <a 
                    href="#curriculums" 
                    className={`sidebar-link ${activeSection === 'curriculums' ? 'active' : ''}`} 
                    onClick={(e) => { e.preventDefault(); scrollToSection('curriculums'); }}
                  >
                    المناهج
                  </a>
                </li>
                <li>
                  <a 
                    href="#parents-council" 
                    className={`sidebar-link ${activeSection === 'parents-council' ? 'active' : ''}`} 
                    onClick={(e) => { e.preventDefault(); scrollToSection('parents-council'); }}
                  >
                    مجلس الأمهات
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          <div className="main-content">
            <section id="values" className="content-section">
              <div className="values-goals-container">
                <div 
                  className="values-main-card"
                  onMouseEnter={() => setHoveredMainSection('values')}
                  onMouseLeave={() => setHoveredMainSection(null)}
                >
                  <div className="values-card-header">
                    <h2>قيمنا الأساسية</h2>
                    <span className="expand-indicator">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                  <div className="values-intro">
                    <p>نلتزم في مدرسة الحكمة بتعزيز المبادئ والقيم التي تبني شخصيات طلابنا وتعدهم لمستقبل مشرق.</p>
                  </div>
                  <div className={`values-grid ${hoveredMainSection === 'values' ? 'expanded' : ''}`}>
                    {values.map((value) => (
                      <div 
                        key={value.id}
                        className="value-item-card"
                        onMouseEnter={() => setHoveredSubSection(value.id)}
                        onMouseLeave={() => setHoveredSubSection(null)}
                      >
                        <div className="value-item-header">
                          <h3>{value.title}</h3>
                          <span className="value-indicator">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        </div>
                        <div className={`value-item-content ${hoveredSubSection === value.id ? 'expanded' : ''}`}>
                          <p>{value.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div 
                  className="goals-mission-main-card"
                  onMouseEnter={() => setHoveredMainSection('goals-mission')}
                  onMouseLeave={() => setHoveredMainSection(null)}
                >
                  <div className="goals-mission-header">
                    <h2>الأهداف والرسالة</h2>
                    <span className="expand-indicator">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                  <div className={`goals-mission-content ${hoveredMainSection === 'goals-mission' ? 'expanded' : ''}`}>
                    <div className="vision-mission-grid">
                      <div className="vm-card">
                        <div className="vm-icon">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <h3>الرؤية</h3>
                        <p>تعليم ابتكاري لمجتمع معرفي ريادي عالمي.</p>
                      </div>
                      <div className="vm-card">
                        <div className="vm-icon">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <h3>الرسالة</h3>
                        <p>بناء وإدارة نظام تعليمي ابتكاري لمجتمع معرفي ذي تنافسية عالمية يشمل كافة المراحل العمرية ويلبي احتياجات سوق العمل المستقبلية وذلك من خلال ضمان جودة مخرجات وزارة التربية والتعليم وتقديم خدمات متميزة للمتعاملين الداخليين والخارجيين.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="curriculums" className="content-section">
              <div className="section-header-animate">
                <h2 className="section-title">المناهج</h2>
              </div>
              <CurriculumArticle />
            </section>

            <section id="parents-council" className="content-section">
              <div className="section-header-animate">
                <h2 className="section-title">مجلس الأمهات</h2>
              </div>
              <div className="parents-council-container">
                <div className="council-card">
                  <div className="council-icon">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="council-content">
                    <h3>الشراكة المدرسية الأسرية</h3>
                    <p>مجلس الأمهات هو جهاز استشاري يهدف إلى تعزيز الشراكة بين المدرسة والأسرة في تنمية الطالب تربوياً وتعليمياً واجتماعياً.</p>
                    <div className="council-features">
                      <div className="council-feature">
                        <span className="feature-icon">✓</span>
                        <span>دعم الأنشطة المدرسية</span>
                      </div>
                      <div className="council-feature">
                        <span className="feature-icon">✓</span>
                        <span>المشاركة في الفعاليات التربوية</span>
                      </div>
                      <div className="council-feature">
                        <span className="feature-icon">✓</span>
                        <span>تعزيز التواصل المدرسي الأسري</span>
                      </div>
                    </div>
                    <p className="council-contact">للمزيد من المعلومات حول كيفية الانضمام أو المشاركة، يرجى التواصل مع إدارة المدرسة.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GoalsValues;
