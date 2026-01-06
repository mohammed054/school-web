import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [copiedNumber, setCopiedNumber] = useState(null);

  const copyToClipboard = async (text, numberId) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedNumber(numberId);
      setTimeout(() => setCopiedNumber(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>اتصل بنا</h3>
            <p>
              <span className="contact-item clickable" onClick={() => copyToClipboard('06-7464040', 'nuaimiyah')}>
                📞 النعيمية: 06-7464040
                {copiedNumber === 'nuaimiyah' && <span className="copy-feedback">تم النسخ!</span>}
              </span><br />
              <span className="contact-item clickable" onClick={() => copyToClipboard('06-7415050', 'juruf')}>
                📞 الجرف: 06-7415050
                {copiedNumber === 'juruf' && <span className="copy-feedback">تم النسخ!</span>}
              </span><br />
              <span className="contact-item clickable" onClick={() => copyToClipboard('04-8522237', 'masfout')}>
                📞 مصفوت: 04-8522237
                {copiedNumber === 'masfout' && <span className="copy-feedback">تم النسخ!</span>}
              </span><br />
              <span className="contact-item clickable" onClick={() => copyToClipboard('06-7464040', 'telah')}>
                📞 التلة: 06-7464040
                {copiedNumber === 'telah' && <span className="copy-feedback">تم النسخ!</span>}
              </span><br />
              <span className="contact-item clickable" onClick={() => copyToClipboard('info@alhikmahps.com', 'email')}>
                📧 info@alhikmahps.com
                {copiedNumber === 'email' && <span className="copy-feedback">تم النسخ!</span>}
              </span>
            </p>
          </div>
          <div className="footer-section">
            <h3>روابط سريعة</h3>
            <ul>
              <li><a href="/#about">عن الحكمة</a></li>
              <li><a href="/#programs">برامجنا</a></li>
              <li><Link to="/admissions">التسجيل</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>تابعنا</h3>
            <div className="social-links">
                    <a href="https://www.youtube.com/@alhikmahprivateschoolajman6525" target="_blank" aria-label="تابعنا على يوتيوب">
                        <img src="/images/footer/youtube-logo.png" alt="YouTube" className="social-icon" />
                      </a>
                      <a href="https://www.instagram.com/hikmahps92/" target="_blank" aria-label="تابعنا على إنستغرام">
                        <img src="/images/footer/instagram-logo.png" alt="Instagram" className="social-icon" />
                      </a>
                      <a href="https://www.facebook.com/alhikmahps" target="_blank" aria-label="تابعنا على فيسبوك">
                        <img src="/images/footer/facebook-logo.png" alt="Facebook" className="social-icon" />
                      </a>
                      <a href="https://www.snapchat.com/add/alhikmahps" target="_blank" aria-label="تابعنا على سناب شات">
                        <img src="/images/footer/snapchat-logo.svg" alt="Snapchat" className="social-icon" />
                      </a>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="awards-section">
          <div className="awards-container">
            <img src="/images/footer/hamdan.jpeg" alt="Hamdan Award" className="award-logo" />
            <img src="/images/footer/unesco.png" alt="UNESCO Award" className="award-logo" />
            <img src="/images/footer/khalifa.png" alt="Khalifa Award" className="award-logo" />
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 مدرسة الحكمة الخاصة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
