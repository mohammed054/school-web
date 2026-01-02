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
