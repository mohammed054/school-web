import React from 'react';

const Elementary = () => {
  return (
    <div>
      <main>
        <section className="page-header">
          <div className="container">
            <div className="header-content">
              <div className="header-icon">📚</div>
              <div className="header-text">
                <h1 className="page-title-animate">المرحلة الابتدائية</h1>
                <div className="page-title-divider"></div>
                <p className="page-subtitle">الصفوف من الأول إلى السادس - بناء أساس متين للتعلم</p>
              </div>
            </div>
          </div>
        </section>

        <section className="goals-intro-section">
          <div className="container">
            <div className="goals-intro-text">
              <p>في المرحلة الابتدائية، نركز على بناء الأساس التعليمي المتين لطلابنا من خلال مناهج شاملة تغطي جميع المواد الأساسية. نسعى لتنمية مهارات الطلاب الأكاديمية والشخصية والاجتماعية في بيئة داعمة ومحفزة.</p>
            </div>
          </div>
        </section>

        <section className="vision-section">
          <div className="container">
            <div className="vision-content">
              <div className="vision-icon">🎓</div>
              <div className="vision-text">
                <h2>رؤيتنا في المرحلة الابتدائية</h2>
                <p>إعداد الطلاب للمرحلة الإعدادية من خلال تطوير مهارات القراءة والكتابة والحساب، وتعزيز الثقة بالنفس والقدرة على التعلم المستقل.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="objectives-section">
          <div className="container">
            <h2 className="section-title">المناهج الدراسية</h2>
            <div className="objectives-list">
              <li>اللغة العربية والقراءة والكتابة</li>
              <li>الرياضيات والمهارات الحسابية</li>
              <li>العلوم والدراسات الاجتماعية</li>
              <li>اللغة الإنجليزية</li>
              <li>التربية الإسلامية والقيم الأخلاقية</li>
              <li>التربية الفنية والموسيقى</li>
              <li>التربية البدنية والأنشطة الرياضية</li>
              <li>الحاسب الآلي والتكنولوجيا</li>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Elementary;
