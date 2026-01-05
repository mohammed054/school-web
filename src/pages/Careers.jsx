import React, { useState } from 'react';

const Careers = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [cvFormData, setCVFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cvFile: null,
    coverLetter: ''
  });
  const [cvSubmitted, setCVSubmitted] = useState(false);
  const [trackId, setTrackId] = useState('');
  const [applicationStatus, setApplicationStatus] = useState(null);
  const [cvDragging, setCVDragging] = useState(false);

  const jobOpenings = [
    {
      id: 1,
      title: 'معلم رياضيات للمرحلة الثانوية',
      department: 'المرحلة الثانوية',
      location: 'فرع النعيمية',
      type: 'دوام كامل'
    },
    {
      id: 2,
      title: 'معلمة لغة عربية للمرحلة الابتدائية',
      department: 'المرحلة الابتدائية',
      location: 'فرع التلة',
      type: 'دوام كامل'
    },
    {
      id: 3,
      title: 'أخصائي توجيه طلابي',
      department: 'الخدمات الطلابية',
      location: 'فرع الجرف',
      type: 'دوام جزئي'
    },
    {
      id: 4,
      title: 'معلم لغة إنجليزية للروضة',
      department: 'الروضة',
      location: 'فرع النعيمية',
      type: 'دوام كامل'
    },
    {
      id: 5,
      title: 'منسق الأنشطة الطلابية',
      department: 'الإدارة',
      location: 'فرع مصفوت',
      type: 'دوام كامل'
    },
    {
      id: 6,
      title: 'معلم علوم للمرحلة المتوسطة',
      department: 'المرحلة المتوسطة',
      location: 'فرع التلة',
      type: 'دوام كامل'
    }
  ];

  const filteredJobs = selectedFilter === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.type === selectedFilter);

  const handleCVChange = (e) => {
    const { name, value } = e.target;
    setCVFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCVFileChange = (e) => {
    setCVFormData(prev => ({ ...prev, cvFile: e.target.files[0] }));
  };

  const handleCVSubmit = (e) => {
    e.preventDefault();
    setCVSubmitted(true);
    setTimeout(() => {
      setCVSubmitted(false);
      setCVFormData({
        name: '',
        email: '',
        phone: '',
        cvFile: null,
        coverLetter: ''
      });
    }, 3000);
  };

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    const statuses = ['قيد المراجعة', 'تمت المراجعة', 'تم القبول', 'مرفوض'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    setApplicationStatus(randomStatus);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCVDrop = (e) => {
    e.preventDefault();
    setCVDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setCVFormData(prev => ({ ...prev, cvFile: file }));
    }
  };

  const handleCVDragOver = (e) => {
    e.preventDefault();
    setCVDragging(true);
  };

  const handleCVDragLeave = () => {
    setCVDragging(false);
  };

  return (
    <div>
      <main>
        <section className="careers-hero-section">
          <div className="careers-hero-content">
            <div className="careers-hero-text fade-in-up">
              <h1>فرص العمل في مدرسة الحكمة</h1>
              <p className="careers-hero-subtitle">انضم إلى فريق التميز والريادة</p>
              <div className="careers-hero-cta">
                <button onClick={() => scrollToSection('job-openings')} className="careers-btn-primary">
                  عرض الوظائف الشاغرة
                </button>
                <button onClick={() => scrollToSection('submit-cv')} className="careers-btn-secondary">
                  تقديم السيرة الذاتية
                </button>
              </div>
            </div>
          </div>
          <div className="careers-scroll-indicator">
            <div className="careers-scroll-arrow"></div>
          </div>
        </section>

        <section id="job-openings" className="careers-section">
          <div className="container">
            <div className="careers-section-header">
              <h2 className="careers-section-title">الوظائف الشاغرة</h2>
              <p className="careers-section-subtitle">اكتشف فرص العمل المتاحة حالياً</p>
              <div className="careers-counter">
                <span className="careers-counter-number">{jobOpenings.length}</span>
                <span className="careers-counter-text">وظيفة شاغرة</span>
              </div>
            </div>

            <div className="careers-filter-tabs">
              <button
                className={`careers-filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedFilter('all')}
              >
                الكل
              </button>
              <button
                className={`careers-filter-btn ${selectedFilter === 'دوام كامل' ? 'active' : ''}`}
                onClick={() => setSelectedFilter('دوام كامل')}
              >
                دوام كامل
              </button>
              <button
                className={`careers-filter-btn ${selectedFilter === 'دوام جزئي' ? 'active' : ''}`}
                onClick={() => setSelectedFilter('دوام جزئي')}
              >
                دوام جزئي
              </button>
            </div>

            <div className="careers-jobs-grid">
              {filteredJobs.map((job, index) => (
                <div key={job.id} className="careers-job-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="careers-job-header">
                    <h3 className="careers-job-title">{job.title}</h3>
                    <span className={`careers-job-type ${job.type === 'دوام كامل' ? 'full-time' : 'part-time'}`}>
                      {job.type}
                    </span>
                  </div>
                  <div className="careers-job-details">
                    <div className="careers-job-detail">
                      <span className="careers-job-icon">🏫</span>
                      <span>{job.department}</span>
                    </div>
                    <div className="careers-job-detail">
                      <span className="careers-job-icon">📍</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <button onClick={() => scrollToSection('submit-cv')} className="careers-apply-btn">
                    تقديم الآن
                  </button>
                </div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="careers-no-jobs">
                <p>لا توجد وظائف شاغرة مطابقة للفلاتر المختارة</p>
              </div>
            )}
          </div>
        </section>

        <section id="submit-cv" className="careers-section careers-section-light">
          <div className="container">
            <div className="careers-section-header">
              <h2 className="careers-section-title">تقديم السيرة الذاتية</h2>
              <p className="careers-section-subtitle">شاركنا مؤهلاتك وخبراتك</p>
            </div>

            <div className="careers-form-container">
              <form onSubmit={handleCVSubmit} className="careers-form">
                <div className="careers-form-group">
                  <label htmlFor="name">الاسم الكامل *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={cvFormData.name}
                    onChange={handleCVChange}
                    required
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div className="careers-form-row">
                  <div className="careers-form-group">
                    <label htmlFor="email">البريد الإلكتروني *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={cvFormData.email}
                      onChange={handleCVChange}
                      required
                      placeholder="example@email.com"
                    />
                  </div>

                  <div className="careers-form-group">
                    <label htmlFor="phone">رقم الهاتف *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={cvFormData.phone}
                      onChange={handleCVChange}
                      required
                      placeholder="050 123 4567"
                    />
                  </div>
                </div>

                <div className="careers-form-group">
                  <label htmlFor="cvFile">السيرة الذاتية (PDF/DOC) *</label>
                  <div
                    className={`careers-file-dropzone ${cvDragging ? 'dragging' : ''} ${cvFormData.cvFile ? 'has-file' : ''}`}
                    onDrop={handleCVDrop}
                    onDragOver={handleCVDragOver}
                    onDragLeave={handleCVDragLeave}
                  >
                    <input
                      type="file"
                      id="cvFile"
                      name="cvFile"
                      accept=".pdf,.doc,.docx"
                      onChange={handleCVFileChange}
                      required
                      className="careers-file-input"
                    />
                    <div className="careers-file-label">
                      <span className="careers-file-icon">📁</span>
                      {cvFormData.cvFile ? (
                        <span className="careers-file-name">{cvFormData.cvFile.name}</span>
                      ) : (
                        <div>
                          <p>اسحب الملف وأفلته هنا أو</p>
                          <span className="careers-file-browse">تصفح</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="careers-form-group">
                  <label htmlFor="coverLetter">رسالة التعريف (اختياري)</label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={cvFormData.coverLetter}
                    onChange={handleCVChange}
                    rows="5"
                    placeholder="اكتب رسالة تعريفية عن نفسك وخبراتك..."
                  />
                </div>

                <button type="submit" className="careers-submit-btn">
                  {cvSubmitted ? 'تم الإرسال بنجاح ✓' : 'إرسال الطلب'}
                </button>

                {cvSubmitted && (
                  <div className="careers-success-message">
                    <span className="careers-success-icon">✓</span>
                    <p>تم استلام سيرتك الذاتية بنجاح! سنتواصل معك قريباً.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        <section id="track-application" className="careers-section">
          <div className="container">
            <div className="careers-section-header">
              <h2 className="careers-section-title">تتبع طلبك</h2>
              <p className="careers-section-subtitle">تابع حالة طلبك بسهولة</p>
            </div>

            <div className="careers-track-container">
              <form onSubmit={handleTrackSubmit} className="careers-track-form">
                <div className="careers-form-group">
                  <label htmlFor="trackId">رقم الطلب أو البريد الإلكتروني *</label>
                  <input
                    type="text"
                    id="trackId"
                    value={trackId}
                    onChange={(e) => setTrackId(e.target.value)}
                    required
                    placeholder="أدخل رقم الطلب أو البريد الإلكتروني"
                  />
                </div>
                <button type="submit" className="careers-track-btn">
                  تتبع الطلب
                </button>
              </form>

              {applicationStatus && (
                <div className="careers-status-result fade-in-up">
                  <div className="careers-status-card">
                    <div className="careers-status-icon">
                      {applicationStatus === 'تم القبول' ? '🎉' : 
                       applicationStatus === 'مرفوض' ? '❌' : '📋'}
                    </div>
                    <h3>حالة الطلب</h3>
                    <p className={`careers-status-text ${applicationStatus === 'تم القبول' ? 'accepted' : 
                                              applicationStatus === 'مرفوض' ? 'rejected' : ''}`}>
                      {applicationStatus}
                    </p>
                    <div className="careers-status-timeline">
                      <div className="careers-timeline-item">
                        <div className="careers-timeline-dot active"></div>
                        <span>تم الاستلام</span>
                      </div>
                      <div className="careers-timeline-item">
                        <div className={`careers-timeline-dot ${['قيد المراجعة', 'تمت المراجعة', 'تم القبول', 'مرفوض'].includes(applicationStatus) ? 'active' : ''}`}></div>
                        <span>قيد المراجعة</span>
                      </div>
                      <div className="careers-timeline-item">
                        <div className={`careers-timeline-dot ${['تمت المراجعة', 'تم القبول', 'مرفوض'].includes(applicationStatus) ? 'active' : ''}`}></div>
                        <span>تمت المراجعة</span>
                      </div>
                      <div className="careers-timeline-item">
                        <div className={`careers-timeline-dot ${applicationStatus === 'تم القبول' || applicationStatus === 'مرفوض' ? 'active' : ''}`}></div>
                        <span>القرار النهائي</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Careers;
