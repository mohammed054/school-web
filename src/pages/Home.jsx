import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import EditableText from '../components/EditableText';

const Home = () => {
  const [heroMainText, setHeroMainText] = useState('مدرسة الحكمة الخاصة | تعليم متميز في عجمان');
  const [heroSubText, setHeroSubText] = useState('منذ عام 1990، نقدم تعليماً أكاديمياً راقياً من الروضة حتى الثانوية في 4 فروع');

  const heroRef = useRef(null);

  useEffect(() => {
    const heroSets = [
      { main: 'مدرسة الحكمة الخاصة | تعليم متميز في عجمان', sub: 'منذ عام 1990، نقدم تعليماً أكاديمياً راقياً من الروضة حتى الثانوية في 4 فروع' },
      { main: 'تعليم متميز يؤسس للنجاح الأكاديمي والمهني', sub: 'برامج تعليمية معتمدة ومعلمون مؤهلون يضمنون جودة التعليم' },
      { main: '4 فروع في عجمان لتقديم خدمة تعليمية شاملة', sub: 'النعيمية، التلة، الجرف، ومصفوت: مرافق حديثة ومعايير تربوية متقدمة' },
      { main: 'سجل أبناءك الآن للعام الدراسي 2025-2026', sub: 'التسجيل مفتوح في جميع المراحل: الروضة، الابتدائية، والثانوية للبنين والبنات' },
      { main: 'بيئة تعليمية محفزة تُنمي المواهب وتُطلق الإبداع', sub: 'برامج علمية وتقنية (STEM) وأنشطة لاصفيّة لبناء شخصيات متكاملة' }
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

      // Drag to scroll functionality
      const carouselContainer = document.querySelector('.carousel-container');
      if (carouselContainer) {
        let isDragging = false;
        let startX = 0;
        let currentX = 0;
        let draggedSlides = false;

        const handleDragStart = (e) => {
          isDragging = true;
          draggedSlides = false;
          startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
          carouselContainer.style.cursor = 'grabbing';
        };

        const handleDragMove = (e) => {
          if (!isDragging) return;
          
          currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
          const diff = startX - currentX;
          
          // Threshold to trigger slide change
          if (Math.abs(diff) > 50) {
            if (diff > 0) {
              nextSlide();
            } else {
              prevSlide();
            }
            isDragging = false;
            draggedSlides = true;
            carouselContainer.style.cursor = 'grab';
          }
        };

        const handleDragEnd = () => {
          isDragging = false;
          carouselContainer.style.cursor = 'grab';
        };

        // Mouse events
        carouselContainer.style.cursor = 'grab';
        carouselContainer.addEventListener('mousedown', handleDragStart);
        carouselContainer.addEventListener('mousemove', handleDragMove);
        carouselContainer.addEventListener('mouseup', handleDragEnd);
        carouselContainer.addEventListener('mouseleave', handleDragEnd);

        // Touch events for mobile
        carouselContainer.addEventListener('touchstart', handleDragStart);
        carouselContainer.addEventListener('touchmove', handleDragMove);
        carouselContainer.addEventListener('touchend', handleDragEnd);
      }

      updateCarousel();
      autoPlay = setInterval(nextSlide, 6000);
    }

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

      // Testimonials Carousel functionality
      const testimonialSlides = document.querySelectorAll('.testimonial-slide');
      const testimonialPrevBtn = document.querySelector('.testimonial-btn.prev');
      const testimonialNextBtn = document.querySelector('.testimonial-btn.next');
      const testimonialDots = document.querySelectorAll('.testimonial-dot');

      let testimonialCurrentIndex = 0;
      const totalTestimonialSlides = testimonialSlides.length;
      let testimonialAutoPlay = null;

      function updateTestimonialCarousel() {
        testimonialSlides.forEach((slide, index) => {
          slide.classList.toggle('active', index === testimonialCurrentIndex);
        });

        testimonialDots.forEach((dot, index) => {
          dot.classList.toggle('active', index === testimonialCurrentIndex);
        });
      }

      function goToTestimonialSlide(index) {
        testimonialCurrentIndex = index;
        updateTestimonialCarousel();
      }

      function nextTestimonialSlide() {
        testimonialCurrentIndex = (testimonialCurrentIndex + 1) % totalTestimonialSlides;
        updateTestimonialCarousel();
      }

      function prevTestimonialSlide() {
        testimonialCurrentIndex = (testimonialCurrentIndex - 1 + totalTestimonialSlides) % totalTestimonialSlides;
        updateTestimonialCarousel();
      }

      if (testimonialSlides.length > 0) {
        if (testimonialNextBtn) testimonialNextBtn.addEventListener('click', nextTestimonialSlide);
        if (testimonialPrevBtn) testimonialPrevBtn.addEventListener('click', prevTestimonialSlide);

        testimonialDots.forEach((dot, index) => {
          dot.addEventListener('click', () => goToTestimonialSlide(index));
        });

        // Drag to scroll functionality for testimonials
        const testimonialContainer = document.querySelector('.testimonial-container');
        if (testimonialContainer) {
          let isDragging = false;
          let startX = 0;
          let currentX = 0;
          let draggedSlides = false;

          const handleTestimonialDragStart = (e) => {
            isDragging = true;
            draggedSlides = false;
            startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
            testimonialContainer.style.cursor = 'grabbing';
          };

          const handleTestimonialDragMove = (e) => {
            if (!isDragging) return;
            
            currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
            const diff = startX - currentX;
            
            if (Math.abs(diff) > 50) {
              if (diff > 0) {
                nextTestimonialSlide();
              } else {
                prevTestimonialSlide();
              }
              isDragging = false;
              draggedSlides = true;
              testimonialContainer.style.cursor = 'grab';
            }
          };

          const handleTestimonialDragEnd = () => {
            isDragging = false;
            testimonialContainer.style.cursor = 'grab';
          };

          testimonialContainer.style.cursor = 'grab';
          testimonialContainer.addEventListener('mousedown', handleTestimonialDragStart);
          testimonialContainer.addEventListener('mousemove', handleTestimonialDragMove);
          testimonialContainer.addEventListener('mouseup', handleTestimonialDragEnd);
          testimonialContainer.addEventListener('mouseleave', handleTestimonialDragEnd);
          testimonialContainer.addEventListener('touchstart', handleTestimonialDragStart);
          testimonialContainer.addEventListener('touchmove', handleTestimonialDragMove);
          testimonialContainer.addEventListener('touchend', handleTestimonialDragEnd);
        }

        updateTestimonialCarousel();
        testimonialAutoPlay = setInterval(nextTestimonialSlide, 5000);

        // Testimonials section scroll animation
        const testimonialsSection = document.querySelector('.testimonials-section');
        if (testimonialsSection) {
          const testimonialsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                testimonialsObserver.unobserve(entry.target);
              }
            });
          }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
          testimonialsObserver.observe(testimonialsSection);
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
        if (testimonialAutoPlay) clearInterval(testimonialAutoPlay);
        if (testimonialNextBtn) testimonialNextBtn.removeEventListener('click', nextTestimonialSlide);
        if (testimonialPrevBtn) testimonialPrevBtn.removeEventListener('click', prevTestimonialSlide);
        testimonialDots.forEach((dot, index) => {
          dot.removeEventListener('click', () => goToTestimonialSlide(index));
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
          <video autoPlay muted loop playsInline className="hero-video" preload="metadata">
            <source src={`${import.meta.env.BASE_URL}videos/final_merged.mp4`} type="video/mp4" />
            Your browser does not support video tag.
          </video>
          <div className="hero-overlay"></div>
          <div className="hero-content-wrapper">
            <div className="container">
            <div className="hero-content">
                <EditableText section="home" field="hero_title">
                  <h1 className="hero-title animate-fade-in-up">{heroMainText}</h1>
                </EditableText>
                <EditableText section="home" field="hero_subtitle">
                  <p className="hero-subtitle animate-fade-in-up animate-delay-1">{heroSubText}</p>
                </EditableText>
                <Link to="/admissions" className="btn btn-primary hero-cta animate-fade-in-up animate-delay-2">
                  <span>سجل الآن للعام الدراسي 2025-2026</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5M12 5L5 12M12 19L5 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
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
                  <img src={`${import.meta.env.BASE_URL}images/body/intro-section.png`} alt="مبنى مدرسة الحكمة الخاصة في عجمان - مرفق تعليمي حديث" loading="lazy" width="600" height="400" />
                  <div className="image-decoration"></div>
                </div>
              </div>
              <div className="intro-article-text scroll-animate">
                <EditableText section="home" field="about_subheading">
                  <p className="intro-subheading">عن مدرسة الحكمة الخاصة</p>
                </EditableText>
                <EditableText section="home" field="about_heading">
                  <h2 className="intro-headline">أكثر من 34 عاماً من التميز التعليمي في الإمارات</h2>
                </EditableText>
                <div className="intro-paragraphs">
                  <EditableText section="home" field="about_paragraph1">
                    <p>تأسست مدرسة الحكمة الخاصة في عام 1990 كواحدة من أعرق المؤسسات التعليمية في عجمان. نخدم حالياً أكثر من 1500 طالب وطالبة في 4 فروع تعليمية موزعة على مناطق استراتيجية: النعيمية، التلة، الجرف، ومصفوت.</p>
                  </EditableText>
                  <EditableText section="home" field="about_paragraph2">
                    <p>نعتمد مناهج وزارة التربية والتعليم في دولة الإمارات مع إثراءات تعليمية تركز على تطوير مهارات القرن الحادي والعشرين، بما في ذلك برامج STEM، التفكير النقدي، والقيادة الطلابية.</p>
                  </EditableText>
                  <p>تمتلك مدرستنا اعتمادات أكاديمية رسمية من وزارة التربية والتعليم، بالإضافة إلى جوائز دولية في التميز التعليمي والابتكار، مما يعكس التزامنا بأعلى معايير الجودة والتميز المؤسسي.</p>
                </div>
                <Link to="/goals-values" className="btn btn-secondary intro-cta-visible">
                  <span>تعرف على رؤيتنا وقيمنا</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5M12 5L5 12M12 19L5 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
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
              <p className="section-tag">حول مدرستنا</p>
              <h2 className="section-title">أرقام تعكس التميز والثقة</h2>
            </div>
            <div className="stats-grid">
              <div className="stat-card scroll-animate">
                <div className="stat-icon"><img src={`${import.meta.env.BASE_URL}images/body/calendar.png`} alt="تاريخ تأسيس مدرسة الحكمة الخاصة 1990" loading="lazy" width="48" height="48" /></div>
                <div className="stat-number" data-target="1990">1990</div>
                <h3>عام التأسيس</h3>
                <p>أكثر من 34 عاماً من الخدمة التعليمية في عجمان</p>
              </div>
              <div className="stat-card scroll-animate">
                <div className="stat-icon"><img src={`${import.meta.env.BASE_URL}images/body/student.png`} alt="عدد الطلاب في مدرسة الحكمة أكثر من 1500 طالب" loading="lazy" width="48" height="48" /></div>
                <div className="stat-number" data-target="1500">1500+</div>
                <h3>طالب وطالبة</h3>
                <p>مسجلون حالياً في جميع المراحل الدراسية والفروع</p>
              </div>
              <div className="stat-card branches-card scroll-animate">
                <div className="stat-icon"><img src={`${import.meta.env.BASE_URL}images/header/pin.png`} alt="4 فروع لمدرسة الحكمة في عجمان" loading="lazy" width="48" height="48" /></div>
                <div className="stat-number" data-target="4">4</div>
                <h3>فروع تعليمية</h3>
                <p>في عجمان (النعيمية، التلة، الجرف، ومصفوت)</p>
                <Link to="/branches" className="stat-cta-btn">
                  <span>اكتشف مواقع فروعنا</span>
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
              <h2 className="section-title">جوائز واعتمادات من وزارة التربية والتعليم</h2>
            </div>
            <div className="carousel">
              <button className="carousel-btn prev" aria-label="Previous">&larr;</button>
              <div className="carousel-container">
                <div className="slide">
                  <div className="slide-content-wrapper">
                    <div className="slide-image">
                      <img src={`${import.meta.env.BASE_URL}images/footer/academic-accreditation.png`} alt="شهادة الاعتماد الأكاديمي من وزارة التربية والتعليم - مدرسة الحكمة الخاصة" loading="lazy" width="200" height="150" />
                    </div>
                    <div className="slide-content">
                      <h3>الاعتماد الأكاديمي</h3>
                      <p>حصلت مدرسة الحكمة الخاصة على الاعتماد الأكاديمي من وزارة التربية والتعليم في دولة الإمارات العربية المتحدة عام 2023 مع تقييم جيد، مما يؤكد التزامنا بأعلى المعايير التعليمية وضمان جودة المخرجات التعليمية.</p>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div className="slide-content-wrapper">
                    <div className="slide-image">
                      <img src={`${import.meta.env.BASE_URL}images/body/student.png`} alt="برامج STEM التعليمية - الطلاب في مختبر العلوم بمدرسة الحكمة" loading="lazy" width="200" height="150" />
                    </div>
                    <div className="slide-content">
                      <h3>التميّز في التعليم العلمي والتقني (STEM)</h3>
                      <p>تم تكريم مدرسة الحكمة في عام 2024 لمبادراتها المتميزة في التعليم العلمي والتقني، حيث تم اعتماد برامج STEM المتقدمة لتطوير مهارات الطلاب في الابتكار، البحث العلمي، وحل المشكلات.</p>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div className="slide-content-wrapper">
                    <div className="slide-image">
                      <img src={`${import.meta.env.BASE_URL}images/body/own-og.png`} alt="جائزة عون للتميز التعليمي - مدرسة الحكمة الخاصة" loading="lazy" width="200" height="150" />
                    </div>
                    <div className="slide-content">
                      <h3>جائزة عون للتميز التعليمي</h3>
                      <p>فازت مدرسة الحكمة الخاصة بالمركز الأول في جائزة عون للتميز التعليمي لعام 2025، تقديراً لإنجازاتها الأكاديمية المتميزة والمبادرات التعليمية المبتكرة التي تُعزز تجربة التعلم للطلاب.</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-btn next" aria-label="Next">&rarr;</button>
            </div>
            <div className="carousel-dots">
              <button className="dot active" data-slide="0" aria-label="Slide 1 - الاعتماد الأكاديمي"></button>
              <button className="dot" data-slide="1" aria-label="Slide 2 - برامج STEM"></button>
              <button className="dot" data-slide="2" aria-label="Slide 3 - جائزة عون"></button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials-section scroll-animate">
          <div className="container">
            <div className="section-header">
              <p className="section-tag">آراء الطلاب والخريجين</p>
              <h2 className="section-title">تجارب من مدرسة الحكمة</h2>
            </div>
            
            <div className="testimonials-carousel">
              <button className="testimonial-btn prev" aria-label="Previous">&rarr;</button>
              <button className="testimonial-btn next" aria-label="Next">&larr;</button>
              
              <div className="testimonial-container">
                <div className="testimonial-slide active">
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <p className="testimonial-text">"درست في مدرسة الحكمة منذ الصف الأول، وكانت المدرسة بيتي الثاني طوال سنوات دراستي. هنا تعلمت القيم قبل العلم، وبُنيت شخصيتي خطوة بخطوة على يد معلمين مخلصين. اليوم وأنا خريج، أشعر بالفخر لانتمائي لمدرسة صنعت مستقبلي."</p>
                      <div className="testimonial-author">
                        <h4 className="author-name">خريج مدرسة الحكمة</h4>
                        <span className="author-role">طالب سابق – المرحلة الثانوية</span>
                      </div>
                    </div>
                    <div className="testimonial-image">
                      <img src={`${import.meta.env.BASE_URL}images/body/testimonial.png`} alt="صورة خريج مدرسة الحكمة الخاصة - خريج المرحلة الثانوية" loading="lazy" />
                    </div>
                  </div>
                </div>
                
                <div className="testimonial-slide">
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <p className="testimonial-text">"هذه شهادة تجريبية سيتم استبدالها لاحقًا بتجربة حقيقية لأحد أولياء الأمور أو الطلاب."</p>
                      <div className="testimonial-author">
                        <h4 className="author-name">اسم تجريبي</h4>
                        <span className="author-role">وصف تجريبي</span>
                      </div>
                    </div>
                    <div className="testimonial-image">
                      <img src={`${import.meta.env.BASE_URL}images/body/student.png`} alt="طالب مدرسة الحكمة" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-dots">
                <button className="testimonial-dot active" data-slide="0" aria-label="Testimonial 1"></button>
                <button className="testimonial-dot" data-slide="1" aria-label="Testimonial 2"></button>
              </div>
            </div>
          </div>
        </section>

        {/* School Levels Section */}
        <section id="programs" className="school-levels-section">
          <div className="container">
            <div className="section-header scroll-animate">
              <p className="section-tag">البرامج التعليمية</p>
              <h2 className="section-title">المراحل الدراسية في مدرسة الحكمة</h2>
              <p className="section-subtitle">تعليم متكامل من الروضة حتى الصف الثاني عشر يلبي احتياجات جميع المراحل العمرية</p>
            </div>
            <div className="school-levels-grid">
              <div className="school-level-card">
                <img src={`${import.meta.env.BASE_URL}images/body/kindergarten.jpg`} alt="الأطفال في مرحلة الروضة بمدرسة الحكمة - برنامج تعليمي ممتع للروضة الأولى والثانية" loading="lazy" width="400" height="300" />
                <div className="card-overlay">
                  <span>مرحلة الروضة (KG1-KG2)</span>
                </div>
              </div>
              <div className="school-level-card">
                <img src={`${import.meta.env.BASE_URL}images/body/first-school.jpeg`} alt="الطلاب في المرحلة الابتدائية بمدرسة الحكمة - الصفوف من الأول إلى السادس" loading="lazy" width="400" height="300" />
                <div className="card-overlay">
                  <span>المرحلة الابتدائية (الصفوف 1-6)</span>
                </div>
              </div>
              <div className="school-level-card">
                <img src={`${import.meta.env.BASE_URL}images/body/highschool-boys.jpg`} alt="القسم الثانوي للبنين بمدرسة الحكمة - الصفوف من السابع إلى الثاني عشر" loading="lazy" width="400" height="300" />
                <div className="card-overlay">
                  <span>القسم الثانوي للبنين (الصفوف 7-12)</span>
                </div>
              </div>
              <div className="school-level-card">
                <img src={`${import.meta.env.BASE_URL}images/body/highschool-girls.jpg`} alt="القسم الثانوي للبنات بمدرسة الحكمة - بيئة تعليمية آمنة للصفوف من السابع إلى الثاني عشر" loading="lazy" width="400" height="300" />
                <div className="card-overlay">
                  <span>القسم الثانوي للبنات (الصفوف 7-12)</span>
                </div>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
};

export default Home;
