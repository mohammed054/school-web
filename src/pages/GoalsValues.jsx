import React, { useState, useEffect } from 'react';
import CurriculumArticle from '../components/CurriculumArticle';

const GoalsValues = () => {
  const [activeSection, setActiveSection] = useState('values');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState('values');
  const [activeInnerAccordion, setActiveInnerAccordion] = useState(null);

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
    handleScroll(); // Initialize

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleAccordionHover = (accordionId) => {
    setExpandedAccordion(accordionId);
  };

  const handleAccordionLeave = () => {
    // Optionally keep it expanded, or collapse all
    // setExpandedAccordion(null);
  };

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

  const toggleInnerAccordion = (accordionId) => {
    setActiveInnerAccordion(activeInnerAccordion === accordionId ? null : accordionId);
  };

  return (
    <main>
      <div className="container">
        <div className="page-layout">
          {/* Right Sidebar */}
          <aside className={`page-sidebar ${isSidebarOpen ? 'show' : ''}`}>
            <div className="sidebar-toggle" onClick={toggleSidebar}>
              <span className="hamburger-icon">☰</span>
              <span className="sidebar-title">القائمة</span>
            </div>
            <nav className="sidebar-nav">
              <ul>
                <li><a href="#values" className={`sidebar-link ${activeSection === 'values' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('values'); }}>القيم</a></li>
                <li><a href="#goals-vision-mission" className={`sidebar-link ${activeSection === 'goals-vision-mission' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('goals-vision-mission'); }}>الأهداف والرسالة</a></li>
                <li><a href="#curriculums" className={`sidebar-link ${activeSection === 'curriculums' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('curriculums'); }}>المناهج</a></li>
                <li><a href="#parents-council" className={`sidebar-link ${activeSection === 'parents-council' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('parents-council'); }}>مجلس الأمهات</a></li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="main-content">
            {/* Values Section (Accordion) */}
            <section id="values" className="content-section">
              <div className="main-accordion-item active">
                <button className="main-accordion-header active">
                  <h2>قيمنا الأساسية</h2>
                  <span className="accordion-icon">▼</span>
                </button>
                <p className="values-intro-text">نلتزم في مدرسة الحكمة بتعزيز المبادئ والقيم التي تبني شخصيات طلابنا وتعدهم لمستقبل مشرق.</p>
                <div className="main-accordion-content expanded" style={{maxHeight: 'none'}}>
                  {/* Inner Content (Sub-accordions) */}
                  <div className="accordion">
                    <div className={`accordion-item ${activeInnerAccordion === 'citizenship' ? 'active' : ''}`}>
                      <button className="accordion-header" onClick={() => toggleInnerAccordion('citizenship')}>
                        <span className="accordion-title">المواطنة والمسؤولية</span>
                        <span className="accordion-icon">▼</span>
                      </button>
                      <div className="accordion-content">
                        <div className="accordion-body">
                          تعزيز الهوية الوطنية والمسؤولية الاجتماعية.
                        </div>
                      </div>
                    </div>
                    <div className={`accordion-item ${activeInnerAccordion === 'islamic-values' ? 'active' : ''}`}>
                      <button className="accordion-header" onClick={() => toggleInnerAccordion('islamic-values')}>
                        <span className="accordion-title">مبادئ وقيم الإسلام</span>
                        <span className="accordion-icon">▼</span>
                      </button>
                      <div className="accordion-content">
                        <div className="accordion-body">
                          التأكيد على القيم الإنسانية في الحوار والتسامح والاعتدال والسلام والعمل التطوعي.
                        </div>
                      </div>
                    </div>
                    <div className={`accordion-item ${activeInnerAccordion === 'commitment' ? 'active' : ''}`}>
                      <button className="accordion-header" onClick={() => toggleInnerAccordion('commitment')}>
                        <span className="accordion-title">الالتزام والشفافية</span>
                        <span className="accordion-icon">▼</span>
                      </button>
                      <div className="accordion-content">
                        <div className="accordion-body">
                          الالتزام بالمهنية والشفافية في الأداء.
                        </div>
                      </div>
                    </div>
                    <div className={`accordion-item ${activeInnerAccordion === 'participation' ? 'active' : ''}`}>
                      <button className="accordion-header" onClick={() => toggleInnerAccordion('participation')}>
                        <span className="accordion-title">المشاركة والمساءلة</span>
                        <span className="accordion-icon">▼</span>
                      </button>
                      <div className="accordion-content">
                        <div className="accordion-body">
                          الالتزام بالشراكة المجتمعية في العملية التربوية والمساءلة.
                        </div>
                      </div>
                    </div>
                    <div className={`accordion-item ${activeInnerAccordion === 'equality' ? 'active' : ''}`}>
                      <button className="accordion-header" onClick={() => toggleInnerAccordion('equality')}>
                        <span className="accordion-title">التكافؤ والعدالة</span>
                        <span className="accordion-icon">▼</span>
                      </button>
                      <div className="accordion-content">
                        <div className="accordion-body">
                          تكافؤ الفرص التعليمية للجميع.
                        </div>
                      </div>
                    </div>
                    <div className={`accordion-item ${activeInnerAccordion === 'innovation' ? 'active' : ''}`}>
                      <button className="accordion-header" onClick={() => toggleInnerAccordion('innovation')}>
                        <span className="accordion-title">العلم والتكنولوجيا والابتكار</span>
                        <span className="accordion-icon">▼</span>
                      </button>
                      <div className="accordion-content">
                        <div className="accordion-body">
                          تحفيز الطاقات البشرية والمؤسسية باتجاه العلوم والتكنولوجيا والابتكار.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Goals / Vision & Mission Section (Accordion) */}
            <section id="goals-vision-mission" className="content-section">
              <div className={`main-accordion-item ${expandedAccordion === 'goals-vision-mission' ? 'active' : ''}`}>
                <button
                  className={`main-accordion-header ${expandedAccordion === 'goals-vision-mission' ? 'active' : ''}`}
                  onMouseEnter={() => handleAccordionHover('goals-vision-mission')}
                  onMouseLeave={handleAccordionLeave}
                >
                  <h2>الأهداف والرسالة</h2>
                  <span className="accordion-icon">▼</span>
                </button>
                <div className={`main-accordion-content ${expandedAccordion === 'goals-vision-mission' ? 'expanded' : ''}`}>
                  <div className="vision-mission-content" style={{padding: '10px 0'}}>
                    <div className="vm-item">
                      <h3>الرؤية</h3>
                      <p>تعليم ابتكاري لمجتمع معرفي ريادي عالمي.</p>
                    </div>
                    <div className="vm-item">
                      <h3>الرسالة</h3>
                      <p>بناء وإدارة نظام تعليمي ابتكاري لمجتمع معرفي ذي تنافسية عالمية يشمل كافة المراحل العمرية ويلبي احتياجات سوق العمل المستقبلية وذلك من خلال ضمان جودة مخرجات وزارة التربية والتعليم وتقديم خدمات متميزة للمتعاملين الداخليين والخارجيين.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Curriculums Section */}
            <section id="curriculums" className="content-section">
              <h2 className="section-title-animate">المناهج</h2>
              <CurriculumArticle />
            </section>

            {/* Parents Council Section */}
            <section id="parents-council" className="content-section">
              <h2 className="section-title-animate">مجلس الأمهات</h2>
              <div className="parents-council-content">
                <p>مجلس الأمهات هو جهاز استشاري يهدف إلى تعزيز الشراكة بين المدرسة والأسرة في تنمية الطالب تربوياً وتعليمياً واجتماعياً. يتكون المجلس من أمهات الطلاب اللواتي يساهمن في دعم الأنشطة المدرسية والفعاليات التربوية.</p>
                <p>للمزيد من المعلومات حول كيفية الانضمام أو المشاركة، يرجى التواصل مع إدارة المدرسة.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GoalsValues;
