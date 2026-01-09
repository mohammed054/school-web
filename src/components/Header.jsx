import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    
    // Prevent body scroll when menu is open
    if (newState) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(null);
    document.body.style.overflow = '';
    document.body.style.position = '';
  };

  const toggleDropdown = (dropdown, e) => {
    if (isMobile && e) {
      e.stopPropagation();
      e.preventDefault();
    }
    if (isMobile) {
      setIsDropdownOpen(isDropdownOpen === dropdown ? null : dropdown);
    }
  };

  const handleNavClick = (e) => {
    e.stopPropagation();
  };

  const handleNavLinkClick = () => {
    if (isMobile) {
      closeMenu();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const updateNavbar = () => {
      if (!headerRef.current) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const currentPath = location.pathname;

      if (currentPath === '/' || currentPath === '') {
        if (scrollTop > 50) {
          headerRef.current.classList.add('visible');
          headerRef.current.classList.remove('hidden');
        } else {
          headerRef.current.classList.add('hidden');
          headerRef.current.classList.remove('visible');
        }
      } else {
        headerRef.current.classList.add('visible');
        headerRef.current.classList.remove('hidden');
      }
    };

    window.addEventListener('scroll', updateNavbar);
    updateNavbar();

    return () => window.removeEventListener('scroll', updateNavbar);
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <header ref={headerRef} className="header" id="header">
      <div className="logo">
        <img src={`${import.meta.env.BASE_URL}images/header/logo.png`} alt="شعار مدرسة الحكمة الخاصة - Al Hikmah Private School Logo" loading="lazy" width="180" height="60" />
      </div>
      <div className="search-container desktop-search">
        <SearchBar />
      </div>
      <div className="nav-section">
        <button className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} aria-label="فتح القائمة الرئيسية" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`} ref={navRef} onClick={handleNavClick}>
          <button
            className="mobile-menu-close"
            onClick={closeMenu}
            aria-label="إغلاق القائمة"
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              background: 'none',
              border: 'none',
              fontSize: '32px',
              cursor: 'pointer',
              color: '#333',
              zIndex: '1003',
              padding: '8px',
              lineHeight: '1'
            }}
          >
            ✕
          </button>
          <div className="mobile-search">
            <SearchBar />
          </div>
          <ul className="nav-list">
            <li><Link to="/" className="nav-link" onClick={handleNavLinkClick}><img src={`${import.meta.env.BASE_URL}images/header/home.png`} alt="الصفحة الرئيسية - مدرسة الحكمة الخاصة" className="nav-icon" loading="lazy" width="24" height="24" /> الرئيسية</Link></li>
            <li className={`dropdown ${isDropdownOpen === 'about' ? 'open' : ''}`}
                onMouseEnter={() => !isMobile && toggleDropdown('about')}
                onMouseLeave={() => !isMobile && setIsDropdownOpen(null)}>
              {!isMobile ? (
                <Link to="/goals-values" className="nav-link"><img src={`${import.meta.env.BASE_URL}images/header/school.png`} alt="عن المدرسة - مدرسة الحكمة الخاصة" className="nav-icon" loading="lazy" width="24" height="24" /> عن المدرسة</Link>
              ) : (
                <button className="nav-link" onClick={(e) => toggleDropdown('about', e)}><img src={`${import.meta.env.BASE_URL}images/header/school.png`} alt="عن المدرسة" className="nav-icon" loading="lazy" width="24" height="24" /> عن المدرسة</button>
              )}
              <ul className="dropdown-menu">
                <li><Link to="/goals-values#values" onClick={handleNavLinkClick}>الأهداف والقيم التربوية</Link></li>
                <li><Link to="/goals-values#curriculums" onClick={handleNavLinkClick}>المناهج الدراسية</Link></li>
                <li><Link to="/goals-values#parents-council" onClick={handleNavLinkClick}>مجلس الأمهات</Link></li>
              </ul>
            </li>
            <li className={`dropdown ${isDropdownOpen === 'branches' ? 'open' : ''}`}
                onMouseEnter={() => !isMobile && toggleDropdown('branches')}
                onMouseLeave={() => !isMobile && setIsDropdownOpen(null)}>
              {!isMobile ? (
                <Link to="/branches" className="nav-link"><img src={`${import.meta.env.BASE_URL}images/header/pin.png`} alt="فروع المدرسة - موقع الفروع" className="nav-icon" loading="lazy" width="24" height="24" /> الفروع</Link>
              ) : (
                <button className="nav-link" onClick={(e) => toggleDropdown('branches', e)}><img src={`${import.meta.env.BASE_URL}images/header/pin.png`} alt="فروع المدرسة" className="nav-icon" loading="lazy" width="24" height="24" /> الفروع</button>
              )}
              <ul className="dropdown-menu">
                <li><Link to="/branches?branch=tallah" onClick={handleNavLinkClick}>فرع التلة - عجمان</Link></li>
                <li><Link to="/branches?branch=masfout" onClick={handleNavLinkClick}>فرع مصفوت - عجمان</Link></li>
                <li><Link to="/branches?branch=nyiemyah" onClick={handleNavLinkClick}>فرع النعيمية - عجمان</Link></li>
                <li><Link to="/branches?branch=jarf" onClick={handleNavLinkClick}>فرع الجرف - عجمان</Link></li>
              </ul>
            </li>
            <li className={`dropdown ${isDropdownOpen === 'jobs' ? 'open' : ''}`}
                onMouseEnter={() => !isMobile && toggleDropdown('jobs')}
                onMouseLeave={() => !isMobile && setIsDropdownOpen(null)}>
              {!isMobile ? (
                <Link to="/careers" className="nav-link"><img src={`${import.meta.env.BASE_URL}images/header/job.png`} alt="فرص العمل - الوظائف الشاغرة" className="nav-icon" loading="lazy" width="24" height="24" /> فرص العمل</Link>
              ) : (
                <button className="nav-link" onClick={(e) => toggleDropdown('jobs', e)}><img src={`${import.meta.env.BASE_URL}images/header/job.png`} alt="فرص العمل" className="nav-icon" loading="lazy" width="24" height="24" /> فرص العمل</button>
              )}
              <ul className="dropdown-menu">
                <li><Link to="/careers#job-openings" onClick={handleNavLinkClick}>الوظائف الشاغرة</Link></li>
                <li><Link to="/careers#track-application" onClick={handleNavLinkClick}>تتبع طلب التوظيف</Link></li>
                <li><Link to="/careers#submit-cv" onClick={handleNavLinkClick}>تقديم السيرة الذاتية</Link></li>
              </ul>
            </li>
            <li><a href="/#contact" className="nav-link" onClick={handleNavLinkClick}><img src={`${import.meta.env.BASE_URL}images/header/email.png`} alt="اتصل بنا - معلومات التواصل" className="nav-icon" loading="lazy" width="24" height="24" /> اتصل بنا</a></li>
          </ul>

          {!isMobile ? (
            <div className={`apply-dropdown ${isDropdownOpen === 'apply' ? 'open' : ''}`}
                  onMouseEnter={() => !isMobile && toggleDropdown('apply')}
                  onMouseLeave={() => !isMobile && setIsDropdownOpen(null)}>
                  <Link to="/admissions" className="btn btn-primary apply-btn">التسجيل</Link>
              <ul className="apply-dropdown-menu">
                <li><Link to="/admissions#documents">الوثائق المطلوبة للقبول</Link></li>
                <li><Link to="/admissions#fees">الرسوم الدراسية 2025-2026</Link></li>
                <li><Link to="/admissions#uniform">الزي المدرسي الموحد</Link></li>
                <li><Link to="/admissions">تتبع حالة القبول</Link></li>
              </ul>
            </div>
          ) : (
            <>
              <li className={`dropdown ${isDropdownOpen === 'apply' ? 'open' : ''}`}>
                <button className="nav-link apply-toggle-mobile" onClick={(e) => toggleDropdown('apply', e)}><img src={`${import.meta.env.BASE_URL}images/header/register.png`} alt="التسجيل - التسجيل الدراسي" className="nav-icon" loading="lazy" width="24" height="24" /> التسجيل</button>
                <ul className="dropdown-menu">
                  <li><Link to="/admissions#documents" onClick={handleNavLinkClick}>الوثائق المطلوبة للقبول</Link></li>
                  <li><Link to="/admissions#fees" onClick={handleNavLinkClick}>الرسوم الدراسية 2025-2026</Link></li>
                  <li><Link to="/admissions#uniform" onClick={handleNavLinkClick}>الزي المدرسي الموحد</Link></li>
                  <li><Link to="/admissions" onClick={handleNavLinkClick}>تتبع حالة القبول</Link></li>
                </ul>
              </li>
            </>
          )}
        </nav>
      </div>
    </header>
    {isMenuOpen && <div className={`mobile-menu-backdrop ${isMenuOpen ? 'show' : ''}`}></div>}
    </>
  );
};

export default Header;
