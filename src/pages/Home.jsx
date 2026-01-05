import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [heroMainText, setHeroMainText] = useState('نصنع المستقبل، خطوة بخطوة');
  const [heroSubText, setHeroSubText] = useState('تعليم متميز يؤسس لناجحين غداً');

  const heroRef = useRef(null);

  useEffect(() => {
    const heroSets = [
      { main: 'نصنع المستقبل، خطوة بخطوة', sub: 'تعليم متميز يؤسس لناجحين غداً' },
      { main: 'التميز يبدأ من هنا', sub: 'نهتم بكل طالب، نطور مهاراته، نحقق طموحاته' },
      { main: 'بناء شخصيات قوية', sub: 'تعليم متكامل يجمع بين التميز الأكاديمي والقيم الراسخة' },
      { main: 'مدرسة الحكمة: مسيرة التميز', sub: 'أكثر من 30 عاماً في خدمة التعليم المتميز' },
      { main: 'استثمر في مستقبل أبنائك', sub: 'بيئة تعليمية محفزة تُنمي المواهب وتُطلق الإبداع' }
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % heroSets.length;
      setHeroMainText(heroSets[currentIndex].main);
      setHeroSubText(heroSets[currentIndex].sub);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const countUp = (element, target) => {
      const duration = 2500;
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
      }, 16);
    };

    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          const statNumber = entry.target.querySelector('.stat-number');
          if (statNumber) {
            const target = parseInt(statNumber.getAttribute('data-target'));
            countUp(statNumber, target);
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
      observer.observe(card);
    });

    // Observe school level cards
    const schoolLevelCards = document.querySelectorAll('.school-level-card');
    schoolLevelCards.forEach(card => {
      observer.observe(card);
    });

    // Awards Carousel functionality
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoPlay = null;

    function updateCarousel() {
      slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex);
      });

      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }

    function goToSlide(index) {
      currentIndex = index;
      updateCarousel();
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    }

    if (slides.length > 0) {
      if (nextBtn) nextBtn.addEventListener('click', nextSlide);
      if (prevBtn) prevBtn.addEventListener('click', prevSlide);

      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
      });

      updateCarousel();
      autoPlay = setInterval(nextSlide, 6000);

      // Awards carousel scroll animation
      const awardsSection = document.querySelector('.awards-carousel-section');
      if (awardsSection) {
        const awardsObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
              awardsObserver.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        awardsObserver.observe(awardsSection);
      }

      // Intro Article section animation
      const introArticleText = document.querySelector('.intro-article-text');
      const introArticleImage = document.querySelector('.intro-article-image');
      if (introArticleText) {
        const introObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
              introObserver.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        introObserver.observe(introArticleText);
        if (introArticleImage) {
          introObserver.observe(introArticleImage);
        }
      }
    }

    return () => {
      observer.disconnect();
      if (autoPlay) clearInterval(autoPlay);
      if (nextBtn) nextBtn.removeEventListener('click', nextSlide);
      if (prevBtn) prevBtn.removeEventListener('click', prevSlide);
      dots.forEach((dot, index) => {
        dot.removeEventListener('click', () => goToSlide(index));
      });
    };
  }, []);

  useEffect(() => {
    const animateOnScroll = () => {
      const scrollElements = document.querySelectorAll('.scroll-animate');

      scrollElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
          element.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <main>
        {/* Hero Section */}
        <section id="home" className="hero-section" ref={heroRef}>
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/videos/final_merged.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay"></div>
          <div className="hero-content-wrapper">
            <div className="container">
              <div className="hero-content">
                <h1 className="hero-title animate-fade-in-up">{heroMainText}</h1>
                <p className="hero-subtitle animate-fade-in-up animate-delay-1">{heroSubText}</p>
                <Link to="/admissions" className="btn btn-primary hero-cta animate-fade-in-up animate-delay-2">
                  <span>قدم طلب الالتحاق الآن</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Article Section */}
        <section id="about" className="intro-article-section">
          <div className="container">
            <div className="intro-article-content">
              <div className="intro-article-image scroll-animate">
                <div className="image-wrapper">
                  <img src="/images/body/intro-section.png" alt="مدرسة الحكمة" />
                  <div className="image-decoration"></div>
                </div>
              </div>
              <div className="intro-article-text scroll-animate">
                <p className="intro-subheading">نـبـذة عـنـا</p>
                <h2 className="intro-headline">تميز يرسم ملامح المستقبل</h2>
                <div className="intro-paragraphs">
                  <p>نُقدم تجربة تعليمية فريدة تجمع بين القيم الأصيلة والمعايير العالمية، مع التركيز على تطوير مهارات الطلاب الإبداعية والنقدية.</p>
                  <p>بيئتنا التعليمية محفزة للتميز، نحرص على إعداد جيل واعد قادر على مواجهة تحديات العصر بثقة وكفاءة عالية.</p>
                  <p>منذ تأسيسنا، نؤمن بأن التعليم المتطور والقيم الراسخة هما الأساس لبناء قادة المستقبل وصناع التغيير الإيجابي.</p>
                </div>
                <Link to="/goals-values" className="btn btn-secondary intro-cta">
                  <span>اكتشف المزيد</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats/Achievements Section */}
        <section id="stats" className="stats-section">
          <div className="container">
            <div className="section-header scroll-animate">
              <p className="section-tag">نـقـطـة التميز</p>
              <h2 className="section-title">إنجازات نفتخر بها</h2>
            </div>
            <div className="stats-grid">
              <div className="stat-card scroll-animate">
                <div className="stat-icon"><img src="/images/body/calendar.png" alt="تاريخ التأسيس" /></div>
                <div className="stat-number" data-target="1990">1990</div>
                <h3>تاريخ التأسيس</h3>
                <p>أكثر من ثلاثة عقود من العطاء</p>
              </div>
              <div className="stat-card scroll-animate">
                <div className="stat-icon"><img src="/images/body/student.png" alt="الطلاب" /></div>
                <div className="stat-number" data-target="1500">1500+</div>
                <h3>الطلاب المسجلين</h3>
                <p>في جميع الفروع التعليمية</p>
              </div>
              <div className="stat-card branches-card scroll-animate">
                <div className="stat-icon"><img src="/images/header/pin.png" alt="الفروع" /></div>
                <div className="stat-number" data-target="4">4</div>
                <h3>الفروع التعليمية</h3>
                <p>في مناطق استراتيجية</p>
                <Link to="/branches" className="stat-cta-btn">
                  <span>استكشف الفروع</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Awards / Accreditations Section */}
        <section className="awards-carousel-section scroll-animate">
          <div className="container">
            <div className="section-header">
              <p className="section-tag">الاعتراف بالتميز</p>
              <h2 className="section-title">جوائز واعتمادات دولية</h2>
            </div>
            <div className="carousel">
              <button className="carousel-btn prev" aria-label="Previous">&larr;</button>
              <div className="carousel-container">
                <div className="slide">
                  <div className="slide-content-wrapper">
                    <div className="slide-image">
                      <img src="/images/footer/academic-accreditation.png" alt="Academic Accreditation" />
                    </div>
                    <div className="slide-content">
                      <h3>اعتماد أكاديمي</h3>
                      <p>حصلت مدرستنا على الاعتماد الأكاديمي في عام 2023 مع تقييم جيد، مؤكدة التزامها بأعلى معايير التعليم الدولي وضمان جودة التعليم لجميع المراحل العمرية.</p>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div className="slide-content-wrapper">
                    <div className="slide-image">
                      <img src="/images/body/student.png" alt="Excellence in STEM Education" />
                    </div>
                    <div className="slide-content">
                      <h3>تميّز في التعليم العلمي والتقني</h3>
                      <p>تم تكريم المدرسة في عام 2024 لمبادراتها المتميزة في التعليم العلمي والتقني، حيث تم اعتماد برامج STEM لضمان تطوير مهارات الطلاب في الابتكار والبحث العلمي.</p>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div className="slide-content-wrapper">
                    <div className="slide-image">
                      <img src="/images/body/own-og.png" alt="جائزة عون" />
                    </div>
                    <div className="slide-content">
                      <h3>جائزة عون</h3>
                      <p>فازت مدرستنا بالمركز الأول في جائزة عون لعام 2025، تقديراً للتميز الأكاديمي والمبادرات التعليمية المبتكرة.</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-btn next" aria-label="Next">&rarr;</button>
            </div>
            <div className="carousel-dots">
              <button className="dot active" data-slide="0"></button>
              <button className="dot" data-slide="1"></button>
              <button className="dot" data-slide="2"></button>
            </div>
          </div>
        </section>

        {/* School Levels Section */}
        <section id="programs" className="school-levels-section">
          <div className="container">
            <div className="section-header scroll-animate">
              <p className="section-tag">برامجنا التعليمية</p>
              <h2 className="section-title">المراحل الدراسية</h2>
              <p className="section-subtitle">تعليم متكامل يرافق الطالب من الروضة حتى التخرج</p>
            </div>
            <div className="school-levels-grid">
              <div className="school-level-card">
                <Link to="/kindergarten">
                  <img src="/images/body/kindergarten.jpg" alt="الروضة" />
                  <div className="card-overlay">
                    <span>الروضة</span>
                    <button className="card-button">&rarr;</button>
                  </div>
                </Link>
              </div>
              <div className="school-level-card">
                <Link to="/elementary">
                  <img src="/images/body/first-school.jpeg" alt="المرحلة الابتدائية" />
                  <div className="card-overlay">
                    <span>المرحلة الابتدائية</span>
                    <button className="card-button">&rarr;</button>
                  </div>
                </Link>
              </div>
              <div className="school-level-card">
                <Link to="/highschool-boys">
                  <img src="/images/body/highschool-boys.jpg" alt="الثانوية للبنين" />
                  <div className="card-overlay">
                    <span>الثانوية للبنين</span>
                    <button className="card-button">&rarr;</button>
                  </div>
                </Link>
              </div>
              <div className="school-level-card">
                <Link to="/highschool-girls">
                  <img src="/images/body/highschool-girls.jpg" alt="الثانوية للبنات" />
                  <div className="card-overlay">
                    <span>الثانوية للبنات</span>
                    <button className="card-button">&rarr;</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
};

export default Home;
