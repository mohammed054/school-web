import React, { useState } from 'react';

const Branches = () => {
  const [activeBranch, setActiveBranch] = useState(null);

  const toggleBranch = (branch) => {
    setActiveBranch(activeBranch === branch ? null : branch);
  };

  const branches = [
    {
      id: 'naaimiyah',
      name: 'فرع النعيمية',
      phone: '06-7464040',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.759!2d55.304!3d25.262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sAl%20Naaimiyah%2C%20Sharjah%2C%20UAE!5e0!3m2!1sen!2s!4v1234567890!5m2!1sen!2s',
      googleMapsLink: 'https://maps.app.goo.gl/oZkyoSoSLfyr7TKY8',
      description: 'موقع فرع النعيمية في مدينة الشارقة'
    },
    {
      id: 'jarf',
      name: 'فرع الجرف',
      phone: '06-7415050',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.759!2d55.304!3d25.262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c5c5c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2sAl%20Jarf%2C%20Sharjah%2C%20UAE!5e0!3m2!1sen!2s!4v1234567890!5m2!1sen!2s',
      googleMapsLink: 'https://maps.app.goo.gl/qLAmGeLbihaEzFNT6',
      description: 'موقع فرع الجرف في مدينة الشارقة'
    },
    {
      id: 'masfout',
      name: 'فرع مصفوت',
      phone: '04-8522237',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.759!2d55.304!3d25.262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c5c5c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2sMasfout%2C%20Ajman%2C%20UAE!5e0!3m2!1sen!2s!4v1234567890!5m2!1sen!2s',
      googleMapsLink: 'https://maps.app.goo.gl/nz5MD2EsVvQ8P12P6',
      description: 'موقع فرع مصفوت في إمارة عجمان'
    },
    {
      id: 'tala',
      name: 'فرع التلة',
      phone: '06-7464040',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.759!2d55.304!3d25.262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c5c5c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2sAl%20Tala%2C%20Sharjah%2C%20UAE!5e0!3m2!1sen!2s!4v1234567890!5m2!1sen!2s',
      googleMapsLink: 'https://maps.app.goo.gl/Vs269pcYbHv6mc6c9',
      description: 'موقع فرع التلة في مدينة الشارقة'
    }
  ];

  return (
    <div>
      <main>
        <section className="page-header branches-header">
          <div className="container">
            <div className="header-content">
              <div className="header-icon">📍</div>
              <div className="header-text">
                <h1 className="page-title-animate">فروع المدرسة</h1>
                <div className="page-title-divider"></div>
                <p className="page-subtitle">اكتشف مواقع فروع مدرستنا في المناطق المختلفة</p>
              </div>
            </div>
          </div>
        </section>

        <section className="branches-section">
          <div className="container">
            <div className="branches-grid">
              {branches.map(branch => (
                <div key={branch.id} className={`branch-card ${activeBranch === branch.id ? 'active' : ''}`}>
                  <button className="branch-toggle" onClick={() => toggleBranch(branch.id)}>
                    <div className="branch-header">
                      <h3>{branch.name}</h3>
                      <div className="branch-contact">
                        <span>📞 {branch.phone}</span>
                        <svg className="toggle-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </button>
                  <div className="branch-content" id={`${branch.id}-content`}>
                    <div className="branch-map">
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
                    <div className="branch-info">
                      <p>{branch.description}</p>
                      <a href={branch.googleMapsLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        عرض على خرائط جوجل
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Branches;
