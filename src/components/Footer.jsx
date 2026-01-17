import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAdmin, useContent } from '../context/AdminContext';
import EditableText from './EditableText';

const Footer = () => {
  const [copiedNumber, setCopiedNumber] = useState(null);
  const { isAdmin, openLoginModal, logout } = useAdmin();
  const { content } = useContent();

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
            <EditableText section="footer" field="contact_title">
              <h3>اتصل بنا</h3>
            </EditableText>
            <p>
              <EditableText section="footer" field="nuaimiyah_label">
                <span className="contact-item clickable" onClick={() => copyToClipboard(content.footer?.nuaimiyah_phone || '06-7464040', 'nuaimiyah')}>
                  📞 {content.footer?.nuaimiyah_label || 'النعيمية'}: {content.footer?.nuaimiyah_phone || '06-7464040'}
                  {copiedNumber === 'nuaimiyah' && <span className="copy-feedback">تم النسخ!</span>}
                </span>
              </EditableText>
              <br />
              <EditableText section="footer" field="jarf_label">
                <span className="contact-item clickable" onClick={() => copyToClipboard(content.footer?.jarf_phone || '06-7415050', 'juruf')}>
                  📞 {content.footer?.jarf_label || 'الجرف'}: {content.footer?.jarf_phone || '06-7415050'}
                  {copiedNumber === 'juruf' && <span className="copy-feedback">تم النسخ!</span>}
                </span>
              </EditableText>
              <br />
              <EditableText section="footer" field="masfout_label">
                <span className="contact-item clickable" onClick={() => copyToClipboard(content.footer?.masfout_phone || '04-8522237', 'masfout')}>
                  📞 {content.footer?.masfout_label || 'مصفوت'}: {content.footer?.masfout_phone || '04-8522237'}
                  {copiedNumber === 'masfout' && <span className="copy-feedback">تم النسخ!</span>}
                </span>
              </EditableText>
              <br />
              <EditableText section="footer" field="telah_label">
                <span className="contact-item clickable" onClick={() => copyToClipboard(content.footer?.telah_phone || '06-7464040', 'telah')}>
                  📞 {content.footer?.telah_label || 'التلة'}: {content.footer?.telah_phone || '06-7464040'}
                  {copiedNumber === 'telah' && <span className="copy-feedback">تم النسخ!</span>}
                </span>
              </EditableText>
              <br />
              <EditableText section="footer" field="email">
                <span className="contact-item clickable" onClick={() => copyToClipboard(content.footer?.email || 'info@alhikmahps.com', 'email')}>
                  📧 {content.footer?.email || 'info@alhikmahps.com'}
                  {copiedNumber === 'email' && <span className="copy-feedback">تم النسخ!</span>}
                </span>
              </EditableText>
            </p>
          </div>
          <div className="footer-section">
            <EditableText section="footer" field="quick_links">
              <h3>روابط سريعة</h3>
            </EditableText>
            <ul>
              <li><a href="/#about">{content.footer?.quick_about || 'عن الحكمة'}</a></li>
              <li><a href="/#programs">{content.footer?.quick_programs || 'برامجنا'}</a></li>
              <li><Link to="/admissions">{content.footer?.quick_admissions || 'التسجيل'}</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <EditableText section="footer" field="follow_title">
              <h3>تابعنا</h3>
            </EditableText>
            <div className="social-links">
              <a href={content.footer?.youtube_url || 'https://www.youtube.com/@alhikmahprivateschoolajman6525'} target="_blank" aria-label="تابعنا على يوتيوب">
                <img src={`${import.meta.env.BASE_URL}images/footer/youtube-logo.png`} alt="YouTube" className="social-icon" />
              </a>
              <a href={content.footer?.instagram_url || 'https://www.instagram.com/hikmahps92/'} target="_blank" aria-label="تابعنا على إنستغرام">
                <img src={`${import.meta.env.BASE_URL}images/footer/instagram-logo.png`} alt="Instagram" className="social-icon" />
              </a>
              <a href={content.footer?.facebook_url || 'https://www.facebook.com/alhikmahps'} target="_blank" aria-label="تابعنا على فيسبوك">
                <img src={`${import.meta.env.BASE_URL}images/footer/facebook-logo.png`} alt="Facebook" className="social-icon" />
              </a>
              <a href={content.footer?.snapchat_url || 'https://www.snapchat.com/add/alhikmahps'} target="_blank" aria-label="تابعنا على سناب شات">
                <img src={`${import.meta.env.BASE_URL}images/footer/snapchat-logo.svg`} alt="Snapchat" className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="awards-section">
          <div className="awards-container">
            <img src={`${import.meta.env.BASE_URL}images/footer/hamdan.jpeg`} alt="Hamdan Award" className="award-logo" />
            <img src={`${import.meta.env.BASE_URL}images/footer/unesco.png`} alt="UNESCO Award" className="award-logo" />
            <img src={`${import.meta.env.BASE_URL}images/footer/khalifa.png`} alt="Khalifa Award" className="award-logo" />
          </div>
        </div>

        <div className="footer-bottom">
          <EditableText section="footer" field="copyright">
            <p>{content.footer?.copyright || '© 2024 مدرسة الحكمة الخاصة. جميع الحقوق محفوظة.'}</p>
          </EditableText>
          {isAdmin ? (
            <button className="admin-logout-btn" onClick={logout}>تسجيل الخروج</button>
          ) : (
            <button className="admin-login-btn" onClick={openLoginModal}>تسجيل الدخول</button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
