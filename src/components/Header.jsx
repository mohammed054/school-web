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
        <img src="/images/header/logo.png" alt="Al Hikmah Private School Logo" />
      </div>
      <div className="search-container desktop-search">
        <SearchBar />
      </div>
      <div className="nav-section">
        <button className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} aria-label="Toggle navigation menu" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`} ref={navRef} onClick={handleNavClick}>
          <button
            className="mobile-menu-close"
            onClick={closeMenu}
            aria-label="Close menu"
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
            <li><Link to="/" className="nav-link" onClick={handleNavLinkClick}><img src="/images/header/home.png" alt="Home" className="nav-icon" /> الرئيسية</Link></li>
            <li className={`dropdown ${isDropdownOpen === 'about' ? 'open' : ''}`}
                onMouseEnter={() => !isMobile && toggleDropdown('about')}
                onMouseLeave={() => !isMobile && setIsDropdownOpen(null)}>
              {!isMobile ? (
                <Link to="/goals-values" className="nav-link"><img src="/images/header/school.png" alt="About" className="nav-icon" /> عن المدرسة</Link>
              ) : (
                <button className="nav-link" onClick={(e) => toggleDropdown('about', e)}><img src="/images/header/school.png" alt="About" className="nav-icon" /> عن المدرسة</button>
              )}
              <ul className="dropdown-menu">
                <li><Link to="/goals-values#values" onClick={handleNavLinkClick}>الأهداف والقيم</Link></li>
                <li><Link to="/goals-values#curriculums" onClick={handleNavLinkClick}>المناهج</Link></li>
                <li><Link to="/goals-values#parents-council" onClick={handleNavLinkClick}>مجلس الأمهات</Link></li>
              </ul>
            </li>
            <li className={`dropdown ${isDropdownOpen === 'branches' ? 'open' : ''}`}
                onMouseEnter={() => !isMobile && toggleDropdown('branches')}
                onMouseLeave={() => !isMobile && setIsDropdownOpen(null)}>
              {!isMobile ? (
                <Link to="/branches" className="nav-link"><img src="/images/header/pin.png" alt="Branches" className="nav-icon" /> الفروع</Link>
              ) : (
                <button className="nav-link" onClick={(e) => toggleDropdown('branches', e)}><img src="/images/header/pin.png" alt="Branches" className="nav-icon" /> الفروع</button>
              )}
              <ul className="dropdown-menu">
                <li><Link to="/branches?branch=tala" onClick={handleNavLinkClick}>فرع التلة</Link></li>
                <li><Link to="/branches?branch=masfout" onClick={handleNavLinkClick}>فرع مصفوت</Link></li>
                <li><Link to="/branches?branch=naaimiyah" onClick={handleNavLinkClick}>فرع النعيمية</Link></li>
                <li><Link to="/branches?branch=jarf" onClick={handleNavLinkClick}>فرع الجرف</Link></li>
              </ul>
            </li>
            <li className={`dropdown ${isDropdownOpen === 'jobs' ? 'open' : ''}`}
                onMouseEnter={() => !isMobile && toggleDropdown('jobs')}
                onMouseLeave={() => !isMobile && setIsDropdownOpen(null)}>
              {!isMobile ? (
                <Link to="/careers" className="nav-link"><img src="/images/header/job.png" alt="Jobs" className="nav-icon" /> فرص العمل</Link>
              ) : (
                <button className="nav-link" onClick={(e) => toggleDropdown('jobs', e)}><img src="/images/header/job.png" alt="Jobs" className="nav-icon" /> فرص العمل</button>
              )}
              <ul className="dropdown-menu">
                <li><Link to="/careers#job-openings" onClick={handleNavLinkClick}>الوظائف الشاغرة</Link></li>
                <li><Link to="/careers#track-application" onClick={handleNavLinkClick}>تتبع طلبك</Link></li>
                <li><Link to="/careers#submit-cv" onClick={handleNavLinkClick}>تقديم السيرة الذاتية</Link></li>
              </ul>
            </li>
            <li><a href="/#contact" className="nav-link" onClick={handleNavLinkClick}><img src="/images/header/email.png" alt="Contact" className="nav-icon" /> اتصل بنا</a></li>
          </ul>

          {!isMobile ? (
            <div className={`apply-dropdown ${isDropdownOpen === 'apply' ? 'open' : ''}`}
                  onMouseEnter={() => !isMobile && toggleDropdown('apply')}
                  onMouseLeave={() => !isMobile && setIsDropdownOpen(null)}>
                  <Link to="/admissions" className="btn btn-primary apply-btn">التسجيل</Link>
              <ul className="apply-dropdown-menu">
                <li><Link to="/admissions#documents">الوثائق المطلوبة</Link></li>
                <li><Link to="/admissions#fees">الرسوم الدراسية</Link></li>
                <li><Link to="/admissions#uniform">الزي المدرسي</Link></li>
                <li><Link to="/admissions">تتبع القبول</Link></li>
              </ul>
            </div>
          ) : (
            <>
              <li className={`dropdown ${isDropdownOpen === 'apply' ? 'open' : ''}`}>
                <button className="nav-link apply-toggle-mobile" onClick={(e) => toggleDropdown('apply', e)}><img src="/images/header/register.png" alt="Register" className="nav-icon" /> التسجيل</button>
                <ul className="dropdown-menu">
                  <li><Link to="/admissions#documents" onClick={handleNavLinkClick}>الوثائق المطلوبة</Link></li>
                  <li><Link to="/admissions#fees" onClick={handleNavLinkClick}>الرسوم الدراسية</Link></li>
                  <li><Link to="/admissions#uniform" onClick={handleNavLinkClick}>الزي المدرسي</Link></li>
                  <li><Link to="/admissions" onClick={handleNavLinkClick}>تتبع القبول</Link></li>
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
