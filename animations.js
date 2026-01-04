// Rotating text in hero section
document.addEventListener('DOMContentLoaded', function() {
    const rotatingTexts = [
        'نبني أجيالاً متميزة',
        'نطور المهارات القيادية',
        'نعزز الإبداع والابتكار',
        'نركز على التميز الأكاديمي'
    ];

    const rotatingElement = document.querySelector('.hero-rotating-text');
    let currentIndex = 0;

    if (rotatingElement) {
        setInterval(() => {
            rotatingElement.style.opacity = '0';
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % rotatingTexts.length;
                rotatingElement.textContent = rotatingTexts[currentIndex];
                rotatingElement.style.opacity = '1';
            }, 500);
        }, 3000);
    }

    // Sticky navbar scroll behavior
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    if (header) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > 50) {
                if (scrollTop > lastScrollTop) {
                    // Scrolling down - hide navbar
                    if (header.classList) {
                        header.classList.add('hidden');
                        header.classList.remove('visible');
                    }
                } else {
                    // Scrolling up - show navbar
                    if (header.classList) {
                        header.classList.add('visible');
                        header.classList.remove('hidden');
                    }
                }
            } else {
                // At top - hide navbar
                if (header.classList) {
                    header.classList.add('hidden');
                    header.classList.remove('visible');
                }
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        });
    }

    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            const content = this.nextElementSibling;
            const isActive = item.classList ? item.classList.contains('active') : false;

            // Close all accordion items
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item.classList) {
                    item.classList.remove('active');
                    const accContent = item.querySelector('.accordion-content');
                    if (accContent) {
                        accContent.style.maxHeight = '0';
                    }
                }
            });

            // Open clicked item if it wasn't active
            if (!isActive && item.classList) {
                item.classList.add('active');
                if (content) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            }
        });
    });

    // Vision & Mission scroll animation
    const vmItems = document.querySelectorAll('.vm-item');
    if (vmItems.length > 0) {
        const vmObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    vmObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        vmItems.forEach(item => {
            vmObserver.observe(item);
        });
    }
});

// Scroll-triggered animations for stats section
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');

                // Start count-up animation for stat numbers
                const statCard = entry.target;
                const statNumber = statCard.querySelector('.stat-number');
                if (statNumber) {
                    const target = parseInt(statNumber.getAttribute('data-target'));
                    countUp(statNumber, target);
                }
            }
        });
    }, observerOptions);
    // Observe all stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        observer.observe(card);
    });

    // Observe school level cards
    const schoolLevelCards = document.querySelectorAll('.school-level-card');
    schoolLevelCards.forEach(card => {
        observer.observe(card);
    });
});

// Count-up animation function
function countUp(element, target) {
    const duration = 2000; // 2 seconds
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 16);
}

    // Intro Article section animation (staggered fade-in)
    const introArticleText = document.querySelector('.intro-article-text');
    const introArticleImage = document.querySelector('.intro-article-image');
    if (introArticleText) {
        const introArticleObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    introArticleObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        introArticleObserver.observe(introArticleText);
        if (introArticleImage) {
            introArticleObserver.observe(introArticleImage);
        }
    }

    // About section animation (slide in from right, fade in)
document.addEventListener('DOMContentLoaded', function() {
    const aboutText = document.getElementById('about-text');
    if (aboutText) {
        const aboutObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    aboutObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        aboutObserver.observe(aboutText);
    }
});

    // Mobile dropdown click support
    const applyDropdown = document.querySelector('.apply-dropdown');
    if (applyDropdown) {
        const applyBtn = applyDropdown.querySelector('.apply-btn');
        const dropdownMenu = applyDropdown.querySelector('.apply-dropdown-menu');

        if (applyBtn && dropdownMenu) {
            // Toggle on click for mobile
            applyBtn.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    const isVisible = dropdownMenu.style.visibility === 'visible';
                    if (isVisible) {
                        dropdownMenu.style.visibility = 'hidden';
                        dropdownMenu.style.opacity = '0';
                        dropdownMenu.style.transform = 'translateY(-5px)';
                    } else {
                        dropdownMenu.style.visibility = 'visible';
                        dropdownMenu.style.opacity = '1';
                        dropdownMenu.style.transform = 'translateY(0)';
                    }
                }
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', function(e) {
                if (!applyDropdown.contains(e.target) && window.innerWidth <= 768) {
                    dropdownMenu.style.visibility = 'hidden';
                    dropdownMenu.style.opacity = '0';
                    dropdownMenu.style.transform = 'translateY(-5px)';
                }
            });
        }
    }

    // Mobile hamburger menu functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');

    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            const isOpen = nav.classList.contains('open');
            if (isOpen) {
                nav.classList.remove('open');
                mobileMenuToggle.classList.remove('active');
            } else {
                nav.classList.add('open');
                mobileMenuToggle.classList.add('active');
            }
        });

        // Close menu when clicking on a link
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('open');
                mobileMenuToggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuToggle.contains(e.target) && !nav.contains(e.target)) {
                nav.classList.remove('open');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }

    // Awards Carousel functionality
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const dots = document.querySelectorAll('.dot');

    if (slides.length > 0) {
        let currentIndex = 0;
        const totalSlides = slides.length;

        function updateCarousel() {
            // Hide all slides and remove active class
            slides.forEach((slide, index) => {
                slide.classList.remove('active');
            });

            // Show current slide
            slides[currentIndex].classList.add('active');

            // Update dots
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

        // Add event listeners
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => goToSlide(index));
        });

        // Initialize - show first slide
        updateCarousel();

        // Auto-play (optional)
        setInterval(nextSlide, 6000);
    }

    // Awards carousel scroll animation
    const awardsSection = document.querySelector('.awards-carousel-section');
    if (awardsSection) {
        const awardsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    awardsObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        awardsObserver.observe(awardsSection);
    }

    // Goals & Values Page Sidebar Functionality
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebarNav = document.getElementById('sidebar-nav');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    if (sidebarToggle && sidebarNav) {
        sidebarToggle.addEventListener('click', function() {
            if (sidebarNav.classList) {
                sidebarNav.classList.toggle('show');
            }
        });
    }

    // Function to update active sidebar link based on scroll position
    function updateActiveSidebarLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 150; // Offset for header

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                sidebarLinks.forEach(link => {
                    if (link.classList) {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + sectionId) {
                            link.classList.add('active');
                        }
                    }
                });
            }
        });
    }

    // Add scroll event listener for active link highlighting
    window.addEventListener('scroll', updateActiveSidebarLink);

    // Initialize active link on page load
    updateActiveSidebarLink();

    // Smooth scroll for sidebar links
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100; // Adjust for header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }

            // Close mobile sidebar after clicking a link
            if (window.innerWidth <= 767 && sidebarNav && sidebarNav.classList) {
                sidebarNav.classList.remove('show');
            }
        });
    });

    // Section Accordion Functionality
    const sectionAccordionHeaders = document.querySelectorAll('.section-accordion-header');

    sectionAccordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const section = this.parentElement;
            const content = this.nextElementSibling;
            const isActive = section.classList.contains('active');

            // Close all section accordions
            document.querySelectorAll('.accordion-section').forEach(sec => {
                if (sec.classList) {
                    sec.classList.remove('active');
                    const cont = sec.querySelector('.section-accordion-content');
                    if (cont) {
                        cont.style.maxHeight = '0';
                    }
                }
            });

            // Open clicked section if it wasn't active
            if (!isActive && section.classList && content) {
                section.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });



    // Main Accordion Functionality (Goals & Values Page) - Hover to expand
    const mainHeaders = document.querySelectorAll('.main-accordion-header');

    mainHeaders.forEach(header => {
        header.addEventListener('mouseenter', () => {
            const content = header.nextElementSibling;

            // Close all section accordions first
            document.querySelectorAll('.main-accordion-item').forEach(sec => {
                if (sec.classList) {
                    sec.classList.remove('active');
                    const cont = sec.querySelector('.main-accordion-content');
                    if (cont) {
                        cont.classList.remove('expanded');
                        cont.style.maxHeight = null;
                    }
                }
            });

            // Open hovered section
            if (header.classList && content) {
                header.classList.add('active');
                content.classList.add('expanded');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // Inner Accordions (Values)
    const innerHeaders = document.querySelectorAll('.accordion-header');
    innerHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.accordion-icon');

            if (content && content.style.maxHeight) {
                content.style.maxHeight = null;
                if(icon && icon.style) icon.style.transform = 'rotate(0deg)';
            } else if (content) {
                content.style.maxHeight = content.scrollHeight + "px";
                if(icon && icon.style) icon.style.transform = 'rotate(180deg)';
            }
        });
    });

    // Scroll Spy & Animation
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.sidebar-link');
    const curriculumArticle = document.querySelector('.curriculum-article');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.scrollY;

        // Highlight Sidebar
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            if (link.classList) {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            }
        });

        // Curriculum Animation
        if (curriculumArticle) {
            const rect = curriculumArticle.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100 && curriculumArticle.classList) {
                curriculumArticle.classList.add('visible');
            }
        }
    });

    // Curriculum section animation
    const curriculumSection = document.querySelector('.curriculums-section');
    if (curriculumSection) {
        const curriculumObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.target.classList) {
                    entry.target.classList.add('animate-in');
                    curriculumObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        curriculumObserver.observe(curriculumSection);
    }
