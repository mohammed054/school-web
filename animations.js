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

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 50) {
            if (scrollTop > lastScrollTop) {
                // Scrolling down - hide navbar
                header.classList.add('hidden');
                header.classList.remove('visible');
            } else {
                // Scrolling up - show navbar
                header.classList.add('visible');
                header.classList.remove('hidden');
            }
        } else {
            // At top - hide navbar
            header.classList.add('hidden');
            header.classList.remove('visible');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });

    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            const content = this.nextElementSibling;
            const isActive = item.classList.contains('active');

            // Close all accordion items
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.accordion-content').style.maxHeight = '0';
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
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

    // Awards Carousel functionality
    const carousel = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const dotsContainer = document.querySelector('.carousel-dots');

    if (carousel && slides.length > 0) {
        let currentIndex = 0;

        // Create dots
        slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot');

        function updateSlides() {
            slides.forEach((slide, index) => {
                slide.classList.toggle('active', index === currentIndex);
            });
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function goToSlide(index) {
            currentIndex = index;
            updateSlides();
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlides();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlides();
        }

        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Auto-play (optional)
        setInterval(nextSlide, 5000);
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
