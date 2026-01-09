import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Branches = () => {
  const [activeBranch, setActiveBranch] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const toggleBranch = (branch) => {
    setActiveBranch(activeBranch === branch ? null : branch);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const branches = [
    {
      id: 'nyiemyah',
      name: 'فرع النعيمية - مدرسة الحكمة الخاصة في عجمان',
      phone: '06-7464040',
      address: 'النعيمية، عجمان، الإمارات العربية المتحدة',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.759!2d55.505!3d25.262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f78c6d8a2fa5:0xe9c460b7a4d45fcb!2sAl%20Nyeimiyah%2C%20Ajman%2C%20UAE!5e0!3m2!1sen!2s!4v1704768000!5m2!1sen!2s',
      googleMapsLink: 'https://www.google.com/maps?sca_esv=11e50d49d5e228fb&output=search&q=%D9%85%D8%AF%D8%B1%D8%B3%D8%A9+%D8%A7%D9%84%D8%AD%D9%83%D9%85%D8%A9+%D8%B9%D8%AC%D9%85%D8%A7%D9%86+%D8%A7%D9%84%D9%86%D8%B9%D9%8A%D9%85%D9%8A%D8%A9&source=lnms&fbs=ADc_l-ZjmiS7ti7q3ZmZMaN1rbbLVf5NByE3nH4pU-O1kQIeoMpywIVzxcGPHyfjhKru8pRiWhip3vVt8jXojvkR7jsAGV88L3WqM52Vt70dYXyHndyDFuYI5m00dRzncf7Ruzv07cests-epD_kR5b2r94afaxf0LulEKpiESwXJLhJcw8cnJm5SmbukYoA5-63le24Mu2OZByWuZUouqKmRkWTB2KxMD6k7PRWYqgf00WwrDjbwmwhPgrzNj2WH2L_CGJHowxO&entry=mc&ved=1t:200715&ictx=111',
      description: 'فرع النعيمية في قلب إمارة عجمان يتميز بموقع استراتيجي يسهل الوصول إليه من جميع مناطق الإمارة. يقدم هذا الفرع برامج تعليمية متكاملة لجميع المراحل (الروضة، الابتدائية، والثانوية للبنين والبنات) مع مرافق حديثة وصوف حديثة ومعلمين مؤهلون.'
    },
    {
      id: 'jarf',
      name: 'فرع الجرف - مدرسة الحكمة الخاصة في عجمان',
      phone: '06-7415050',
      address: 'الجرف، عجمان، الإمارات العربية المتحدة',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.759!2d55.5196734!3d25.4209986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f78c6d8a2fa5:0xe9c460b7a4d45fcb!2sAl%20Jarf%2C%20Ajman%2C%20UAE!5e0!3m2!1sen!2s!4v1704768000!5m2!1sen!2s',
      googleMapsLink: 'https://www.google.com/maps/place/%D9%85%D8%AF%D8%B1%D8%B3%D8%A9+%D8%A7%D9%84%D8%AD%D9%83%D9%85%D8%A9+%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9+-+%D8%A7%D9%84%D8%AC%D8%B1%D9%81%E2%80%AD/@25.4209986,55.5196734,17z/data=!3m1!4b1!4m6!3m5!1s0x3ef5f78c6d8a2fa5:0xe9c460b7a4d45fcb!8m2!3d25.4209986!4d55.5174847!16s%2Fg%2F1q62gclct?entry=ttu',
      description: 'فرع الجرف في عجمان هو أحد فروعنا الرئيسية، يوفر تجربة تعليمية فريدة مع تركيز على التميز الأكاديمي والتنمية الشخصية للطلاب. يتميز الفرع ببيئة تعليمية آمنة ومحفزة ومختبرات حديثة ومرافق رياضية متكاملة.'
    },
    {
      id: 'masfout',
      name: 'فرع مصفوت - مدرسة الحكمة الخاصة في عجمان',
      phone: '04-8522237',
      address: 'مصفوت، عجمان، الإمارات العربية المتحدة',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.759!2d56.0439628!3d24.8347356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef51a1394c73f59:0x92b702cb600df252!2sMasfout%2C%20Ajman%2C%20UAE!5e0!3m2!1sen!2s!4v1704768000!5m2!1sen!2s',
      googleMapsLink: 'https://www.google.com/maps/place/%D9%85%D8%AF%D8%B1%D8%B3%D8%A9+%D8%A7%D9%84%D8%AD%D9%83%D9%85%D8%A9+%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D9%87+-+%D9%85%D8%B5%D9%81%D9%88%D8%AA%E2%80%AD/@24.8347355,56.0439628,17z/data=!3m1!4b1!4m6!3m5!1s0x3ef51a1394c73f59:0x92b702cb600df252!8m2!3d24.8347356!4d56.0393494!16s%2Fg%2F11bbrhyx8c?entry=ttu',
      description: 'فرع مصفوت في إمارة عجمان يمتاز ببيئة تعليمية هادئة ومحفزة بعيداً عن ضوضاء المدينة، تقدم برامج تعليمية متميزة تلتزم بأعلى المعايير الدولية وبمناهج وزارة التربية والتعليم. الفرع يخدم منطقة مصفوت والمناطق المجاورة.'
    },
    {
      id: 'tallah',
      name: 'فرع التلة - مدرسة الحكمة الخاصة في عجمان',
      phone: '06-7464040',
      address: 'التلة، عجمان، الإمارات العربية المتحدة',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.759!2d55.50483!3d25.3670599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f704beb58e99:0xf56d8c09919be893!2sAl%20Tallah%2C%20Ajman%2C%20UAE!5e0!3m2!1sen!2s!4v1704768000!5m2!1sen!2s',
      googleMapsLink: 'https://www.google.com/maps/place/%D9%85%D8%AF%D8%B1%D8%B3%D8%A9+%D8%A7%D9%84%D8%AD%D9%83%D9%85%D8%A9+%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9+-+%D8%A7%D9%84%D8%AA%D9%84%D8%A9%E2%80%AD/@25.3670599,55.50483,17z/data=!3m1!4b1!4m6!3m5!1s0x3ef5f704beb58e99:0xf56d8c09919be893!8m2!3d25.3670599!4d55.5026413!16s%2Fg%2F11v18vcp6r?entry=ttu',
      description: 'فرع التلة في عجمان يجمع بين الحداثة والتقليد، يوفر منشأة تعليمية حديثة مع الحفاظ على القيم التعليمية الراسخة التي تتميز بها مدرسة الحكمة. يتميز الفرع بمختبرات متطورة وصالات رياضية وبيئة تعليمية تشجع على الإبداع.'
    }
  ];

  return (
    <main className="branches-page">
      <section className={`branches-hero ${isVisible ? 'visible' : ''}`}>
        <div className="hero-overlay"></div>
        <div className="hero-pattern"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-breadcrumbs">
              <Link to="/">الرئيسية</Link>
              <span className="separator">/</span>
              <span className="current">فروع مدرسة الحكمة الخاصة</span>
            </div>
            <h1 className="hero-title">فروع مدرسة الحكمة الخاصة في عجمان</h1>
            <p className="hero-description">
              نفتخر بتقديم خدمات تعليمية متميزة في 4 فروع استراتيجية في إمارة عجمان: النعيمية، التلة، الجرف، ومصفوت. كل فرع يوفر بيئة تعليمية متكاملة تجمع بين التميز الأكاديمي والمرافق الحديثة والقيم التربوية الراسخة
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">فروع تعليمية</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">34+</span>
                <span className="stat-label">سنة خبرة</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">1500+</span>
                <span className="stat-label">طالب وطالبة</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="branches-info-section">
        <div className="container">
          <div className="info-content">
            <div className="info-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="info-title">لماذا تختار مدرسة الحكمة الخاصة لأبنائك؟</h2>
            <p className="info-description">
              نؤمن بأن التعليم الجيد هو الأساس لبناء مستقبل مشرق للأجيال القادمة في دولة الإمارات العربية المتحدة. جميع فروع مدرسة الحكمة مزودة بأحدث التقنيات التعليمية، معلمون مؤهلون ومتخصصون في جميع المجالات، ومرافق رياضية وعلمية متطورة، نلتزم بتقديم تجربة تعليمية استثنائية لكل طالب وطالبة.
            </p>
          </div>
        </div>
      </section>

      <section className="branches-list-section">
        <div className="container">
          <div className="branches-list">
            {branches.map((branch, index) => (
              <div 
                key={branch.id} 
                className={`branch-item ${activeBranch === branch.id ? 'active' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <button 
                  className="branch-header"
                  onClick={() => toggleBranch(branch.id)}
                  aria-expanded={activeBranch === branch.id}
                >
                  <div className="branch-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="branch-info">
                    <h3 className="branch-name">{branch.name}</h3>
                    <div className="branch-details">
                      <span className="branch-phone">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 16.92V19.92C22.0011 20.1986 21.9441 20.4742 21.8325 20.7294C21.7209 20.9846 21.5573 21.2137 21.3521 21.4019C21.1468 21.5901 20.9046 21.7336 20.6407 21.8228C20.3769 21.912 20.0974 21.9452 19.82 21.92C16.7428 21.5857 13.787 20.5342 11.19 18.85C8.77382 17.3147 6.72534 15.2662 5.19 12.85C3.49999 10.2412 2.44824 7.271 2.12 4.18C2.09527 3.90353 2.12802 3.62496 2.21648 3.36184C2.30494 3.09871 2.44732 2.85698 2.63423 2.65163C2.82114 2.44627 3.04877 2.282 3.30271 2.16944C3.55665 2.05688 3.83138 1.99875 4.11 2H7.11C7.59563 1.99369 8.066 2.17039 8.42823 2.49741C8.79045 2.82443 9.01709 3.2769 9.06 3.76C9.10039 4.21986 9.18828 4.67465 9.32 5.12C9.41863 5.4716 9.42225 5.84316 9.33054 6.19667C9.23882 6.55019 9.05489 6.87314 8.79678 7.13337L7.41 8.52C8.73746 10.9976 10.8224 13.0825 13.3 14.41L14.69 13.03C14.9502 12.7719 15.2732 12.5879 15.6267 12.4962C15.9802 12.4045 16.3518 12.4081 16.7034 12.5068C17.0499 12.6385 17.3849 12.7263 17.71 12.77C18.1931 12.8129 18.6456 13.0395 18.9726 13.4018C19.2996 13.764 19.4763 14.2344 19.47 14.72L19.5 16.92H22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {branch.phone}
                      </span>
                    </div>
                  </div>
                  <div className="branch-toggle-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                
                <div className="branch-expanded-content">
                  <div className="content-grid">
                    <div className="content-text">
                      <div className="branch-address">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{branch.address}</span>
                      </div>
                      <p className="branch-description">{branch.description}</p>
                      <a 
                        href={branch.googleMapsLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="maps-link"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 19C9 19 5 21 5 21C5 21 3 17 3 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M15 9C15 9 19 7 19 7C19 7 21 11 21 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>عرض على خرائط جوجل</span>
                      </a>
                    </div>
                    <div className="content-map">
                      <iframe
                        src={branch.mapSrc}
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title={`${branch.name} Map`}
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="branches-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">هل أنت جاهز لانضمام أبنائك لمدرسة الحكمة الخاصة؟</h2>
            <p className="cta-description">
              نرحب بك وأسرتك في زيارة أي من فروعنا الأربعة في عجمان للتعرف على برامجنا التعليمية المتميزة والمرافق الحديثة والتحدث مع إدارات الفروع بخصوص التسجيل للعام الدراسي 2025-2026
            </p>
            <Link to="/admissions" className="btn btn-primary btn-large">
              <span>قدم طلب التسجيل الآن</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 5M5 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Branches;
