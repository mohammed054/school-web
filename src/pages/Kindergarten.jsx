import React from 'react';

const Kindergarten = () => {
  return (
    <div>
      <main>
        <section className="page-header">
          <div className="container">
            <div className="header-content">
              <div className="header-icon">🧸</div>
              <div className="header-text">
                <h1 className="page-title-animate">الروضة</h1>
                <div className="page-title-divider"></div>
                <p className="page-subtitle">مرحلة التعليم المبكر للأطفال من 4-6 سنوات</p>
              </div>
            </div>
          </div>
        </section>

        <section className="goals-intro-section">
          <div className="container">
            <div className="goals-intro-text">
              <p>نقدم برنامج تعليمي شامل للأطفال في مرحلة الروضة يركز على التطور الشامل للمهارات الجسدية والعقلية والاجتماعية والعاطفية. نسعى لخلق بيئة تعليمية ممتعة وآمنة تساعد الأطفال على اكتشاف إمكانياتهم وتطوير ثقتهم بأنفسهم.</p>
            </div>
          </div>
        </section>

        <section className="vision-section">
          <div className="container">
            <div className="vision-content">
              <div className="vision-icon">🌟</div>
              <div className="vision-text">
                <h2>رؤيتنا في الروضة</h2>
                <p>إعداد الأطفال للمرحلة الدراسية التالية من خلال برامج تعليمية متكاملة تركز على التعلم من خلال اللعب والأنشطة التفاعلية.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="objectives-section">
          <div className="container">
            <h2 className="section-title">أهدافنا في مرحلة الروضة</h2>
            <div className="objectives-list">
              <li>تطوير المهارات اللغوية والتواصلية باللغتين العربية والإنجليزية</li>
              <li>تعزيز المهارات الحركية الدقيقة والكبرى من خلال الأنشطة العملية</li>
              <li>تنمية المهارات الاجتماعية والعاطفية</li>
              <li>تشجيع الإبداع والتعبير الفني</li>
              <li>تعليم المفاهيم الأساسية في الرياضيات والعلوم</li>
              <li>غرس القيم الإسلامية والأخلاقية</li>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Kindergarten;
