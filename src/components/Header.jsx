import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const headerRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDropdown = (dropdown) => {
    setIsDropdownOpen(isDropdownOpen === dropdown ? null : dropdown);
  };

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
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-search">
            <SearchBar />
          </div>
          <ul className="nav-list">
            <li><Link to="/" className="nav-link"><img src="/images/header/home.png" alt="Home" className="nav-icon" /> الرئيسية</Link></li>
            <li className={`dropdown ${isDropdownOpen === 'about' ? 'open' : ''}`}>
              <a href="#about" className="nav-link" onClick={() => toggleDropdown('about')}><img src="/images/header/school.png" alt="About" className="nav-icon" /> عن المدرسة</a>
              <ul className="dropdown-menu">
                <li><Link to="/goals-values#values">الأهداف والقيم</Link></li>
                <li><Link to="/goals-values#curriculums">المناهج</Link></li>
                <li><Link to="/goals-values#parents-council">مجلس الأمهات</Link></li>
              </ul>
            </li>
            <li className={`dropdown ${isDropdownOpen === 'branches' ? 'open' : ''}`}>
              <Link to="/branches" className="nav-link" onClick={() => toggleDropdown('branches')}><img src="/images/header/pin.png" alt="Branches" className="nav-icon" /> الفروع</Link>
              <ul className="dropdown-menu">
                <li><Link to="/branches?branch=tala">فرع التلة</Link></li>
                <li><Link to="/branches?branch=masfout">فرع مصفوت</Link></li>
                <li><Link to="/branches?branch=naaimiyah">فرع النعيمية</Link></li>
                <li><Link to="/branches?branch=jarf">فرع الجرف</Link></li>
              </ul>
            </li>
            <li className={`dropdown ${isDropdownOpen === 'jobs' ? 'open' : ''}`}>
              <a href="#" className="nav-link" onClick={() => toggleDropdown('jobs')}><img src="/images/header/job.png" alt="Jobs" className="nav-icon" /> فرص العمل</a>
              <ul className="dropdown-menu">
                <li><Link to="/careers#job-openings">الوظائف الشاغرة</Link></li>
                <li><Link to="/careers#track-application">تتبع طلبك</Link></li>
                <li><Link to="/careers#submit-cv">تقديم السيرة الذاتية</Link></li>
              </ul>
            </li>
            <li><a href="#contact" className="nav-link"><img src="/images/header/email.png" alt="Contact" className="nav-icon" /> اتصل بنا</a></li>
          </ul>
          <div className={`apply-dropdown ${isDropdownOpen === 'apply' ? 'open' : ''}`}>
                <Link to="/admissions" className="btn btn-primary apply-btn" onClick={(e) => { e.preventDefault(); toggleDropdown('apply'); }}>التسجيل</Link>
            <ul className="apply-dropdown-menu">
              <li><Link to="/admissions#documents">الوثائق المطلوبة</Link></li>
              <li><Link to="/admissions#fees">الرسوم الدراسية</Link></li>
              <li><Link to="/admissions#uniform">الزي المدرسي</Link></li>
              <li><Link to="/admissions">تتبع القبول</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    {isMenuOpen && <div className="mobile-menu-backdrop" onClick={closeMenu}></div>}
    </>
  );
};

export default Header;
