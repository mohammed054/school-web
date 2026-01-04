import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [rotatingText, setRotatingText] = useState('نبني أجيالاً متميزة');

  useEffect(() => {
    const rotatingTexts = [
      'نبني أجيالاً متميزة',
      'نطور المهارات القيادية',
      'نعزز الإبداع والابتكار',
      'نركز على التميز الأكاديمي'
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % rotatingTexts.length;
      setRotatingText(rotatingTexts[currentIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const countUp = (element, target) => {
      const duration = 2000;
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
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
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

    if (slides.length > 0) {
      let currentIndex = 0;
      const totalSlides = slides.length;

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

      if (nextBtn) nextBtn.addEventListener('click', nextSlide);
      if (prevBtn) prevBtn.addEventListener('click', prevSlide);

      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
      });

      updateCarousel();
      const autoPlay = setInterval(nextSlide, 6000);

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

      return () => {
        observer.disconnect();
        clearInterval(autoPlay);
        if (nextBtn) nextBtn.removeEventListener('click', nextSlide);
        if (prevBtn) prevBtn.removeEventListener('click', prevSlide);
        dots.forEach((dot, index) => {
          dot.removeEventListener('click', () => goToSlide(index));
        });
      };
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main>
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/videos/final_merged.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay">
            <div className="container">
              <div className="hero-content">
                <h2 className="hero-title">طريقك إلى النجاح</h2>
                <p className="hero-subtitle">حيث تلتقي الإبداع بالتميز</p>
                <p className="hero-subtitle">تمكين قادة المستقبل</p>
                <p className="hero-rotating-text">{rotatingText}</p>
                <a href="/admissions" className="btn btn-primary">سجل الآن</a>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Article Section */}
        <section id="about" className="intro-article-section">
          <div className="container">
            <div className="intro-article-content">
              <div className="intro-article-image animate-in">
                <img src="/images/body/intro-section.png" alt="School Education Scene" />
              </div>
              <div className="intro-article-text animate-in">
                <p className="intro-subheading">استكشاف</p>
                <h2 className="intro-headline">تعلم عالمي المستوى</h2>
                <div className="intro-paragraphs">
                  <p>مدرستنا تسعى لتقديم تعليم ابتكاري لمجتمع معرفي عالمي، يضمن جودة التعليم لجميع المراحل العمرية ويلبي احتياجات سوق العمل المستقبلية.</p>
                  <p>نلتزم بالقيم الإنسانية والإسلامية، ونعزز الابتكار والتفوق الأكاديمي في بيئة تعليمية آمنة وداعمة.</p>
                  <p>نؤمن بأن التعليم هو الأساس لبناء مجتمع قوي ومستدام، ونسعى لتطوير مهارات الطلاب لمواجهة تحديات المستقبل.</p>
                </div>
                <a href="#about" className="btn btn-secondary intro-cta">اعرف المزيد</a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats/Achievements Section */}
        <section id="stats" className="stats-section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon"><img src="/images/body/calendar.png" alt="Calendar" /></div>
                <div className="stat-number" data-target="1990">1990</div>
                <h3>سنة التأسيس</h3>
                <p>منذ إنشاء مدرستنا</p>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><img src="/images/body/student.png" alt="Students" /></div>
                <div className="stat-number" data-target="1500">1500+</div>
                <h3>عدد الطلاب</h3>
                <p>طالب وطالبة مسجلين</p>
              </div>
              <div className="stat-card branches-card">
                <div className="stat-icon"><img src="/images/header/pin.png" alt="Branches" /></div>
                <div className="stat-number" data-target="4">4</div>
                <h3>فروع المدرسة</h3>
                <p>في مناطق مختلفة</p>
                <a href="/branches" className="stat-cta-btn">
                  <span>عرض الخريطة</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Awards / Accreditations Section */}
        <section className="awards-carousel-section animate-in">
          <div className="container">
            <h2>الجوائز والاعتمادات</h2>
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
