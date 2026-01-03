// Dynamic Header and Footer Loading with Page-Specific Navbar Behavior

document.addEventListener('DOMContentLoaded', function() {
    // Load header and footer
    loadHeaderFooter();
});

function loadHeaderFooter() {
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                headerPlaceholder.innerHTML = data;
                // Delay search initialization to ensure DOM is ready
                setTimeout(initializeSearchFunctionality, 100);
                // Initialize navbar behavior after header is loaded
                setTimeout(initializeNavbarBehavior, 50);
                // Initialize mobile dropdowns
                setTimeout(initializeMobileDropdowns, 50);
            }
        })
        .catch(error => console.error('Error loading header:', error));

    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading footer:', error));
}

function initializeNavbarBehavior() {
    const body = document.body;
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;

    // Safety check
    if (!header) return;

    // Determine current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    if (currentPage === 'index.html' || currentPage === '') {
        // Index page: navbar hidden initially, appears on scroll
        body.classList.add('index-page');
        header.style.opacity = '0';
        header.style.transform = 'translateY(-100%)';
    } else {
        // All other pages: navbar always visible and sticky
        body.classList.add('sticky-navbar-page');
        header.classList.add('visible');
        header.classList.remove('hidden');
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
        header.style.position = 'sticky';
        header.style.top = '0';
    }

    function updateNavbar() {
        if (currentPage === 'index.html' || currentPage === '') {
            const currentScrollY = window.scrollY;
            const threshold = 50; // Show navbar after scrolling 50px

            if (currentScrollY > threshold) {
                header.classList.add('visible');
                header.classList.remove('hidden');
                header.style.opacity = '1';
                header.style.transform = 'translateY(0)';
                header.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            } else {
                header.classList.add('hidden');
                header.classList.remove('visible');
                header.style.opacity = '0';
                header.style.transform = 'translateY(-100%)';
                header.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            }

            lastScrollY = currentScrollY;
        }
    }

    // Only add scroll listener for index page
    if (currentPage === 'index.html' || currentPage === '') {
        window.addEventListener('scroll', updateNavbar);
    }
}

function initializeSearchFunctionality() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchIcon = document.querySelector('.search-icon');

    if (!searchInput || !searchResults || !searchIcon) return;

    // Search data - you can expand this with more content
    const searchData = [
        {
            title: 'الرئيسية',
            caption: 'الصفحة الرئيسية للمدرسة',
            url: 'index.html#home'
        },
        {
            title: 'عن المدرسة',
            caption: 'معلومات عن مدرسة الحكمة الخاصة',
            url: '#about'
        },
        {
            title: 'الأهداف والقيم',
            caption: 'رؤيتنا وقيمنا وأهدافنا التعليمية',
            url: 'goals-values.html'
        },
        {
            title: 'المناهج',
            caption: 'برامجنا التعليمية والمراحل الدراسية',
            url: 'index.html#programs'
        },
        {
            title: 'الفروع',
            caption: 'مواقع فروع المدرسة في المناطق المختلفة',
            url: '#branches'
        },
        {
            title: 'فرص العمل',
            caption: 'الوظائف الشاغرة وتقديم السيرة الذاتية',
            url: '#'
        },
        {
            title: 'اتصل بنا',
            caption: 'معلومات التواصل والعناوين',
            url: 'index.html#contact'
        },
        {
            title: 'التسجيل',
            caption: 'معلومات التسجيل والقبول والرسوم',
            url: 'admissions.html'
        },
        {
            title: 'الروضة',
            caption: 'مرحلة التعليم المبكر للأطفال',
            url: '/kindergarten'
        },
        {
            title: 'المرحلة الابتدائية',
            caption: 'الصفوف من الأول إلى السادس',
            url: '/elementary'
        },
        {
            title: 'الثانوية للبنين',
            caption: 'التعليم الثانوي للطلاب الذكور',
            url: '/highschool-boys'
        },
        {
            title: 'الثانوية للبنات',
            caption: 'التعليم الثانوي للطالبات الإناث',
            url: '/highschool-girls'
        }
    ];

    let selectedIndex = -1;
    let filteredResults = [];

    function performSearch(query) {
        if (query.length === 0) {
            searchResults.classList.remove('show');
            return;
        }

        filteredResults = searchData.filter(item =>
            item.title.includes(query) ||
            item.caption.includes(query) ||
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.caption.toLowerCase().includes(query.toLowerCase())
        );

        renderResults(filteredResults);
    }

    function renderResults(results) {
        searchResults.innerHTML = '';

        if (results.length === 0) {
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.textContent = 'لا توجد نتائج مطابقة';
            searchResults.appendChild(noResults);
        } else {
            results.forEach((result, index) => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.innerHTML = `
                    <div class="search-result-title">${highlightMatch(result.title)}</div>
                    <div class="search-result-caption">${highlightMatch(result.caption)}</div>
                `;
                resultItem.addEventListener('click', () => {
                    window.location.href = result.url;
                });
                searchResults.appendChild(resultItem);
            });
        }

        searchResults.classList.add('show');
    }

    function highlightMatch(text) {
        const query = searchInput.value;
        if (!query) return text;

        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<strong>$1</strong>');
    }

    function navigateResults(direction) {
        const items = searchResults.querySelectorAll('.search-result-item');
        if (items.length === 0) return;

        if (selectedIndex >= 0) {
            items[selectedIndex].classList.remove('selected');
        }

        selectedIndex += direction;
        if (selectedIndex < 0) selectedIndex = items.length - 1;
        if (selectedIndex >= items.length) selectedIndex = 0;

        items[selectedIndex].classList.add('selected');
        items[selectedIndex].scrollIntoView({ block: 'nearest' });
    }

    function selectResult() {
        if (selectedIndex >= 0 && filteredResults[selectedIndex]) {
            window.location.href = filteredResults[selectedIndex].url;
        }
    }

    // Event listeners
    searchInput.addEventListener('input', (e) => {
        performSearch(e.target.value);
        selectedIndex = -1;
    });

    searchInput.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                navigateResults(1);
                break;
            case 'ArrowUp':
                e.preventDefault();
                navigateResults(-1);
                break;
            case 'Enter':
                e.preventDefault();
                selectResult();
                break;
            case 'Escape':
                searchResults.classList.remove('show');
                searchInput.blur();
                break;
        }
    });

    searchIcon.addEventListener('click', () => {
        if (searchResults.classList.contains('show')) {
            searchResults.classList.remove('show');
        } else if (searchInput.value.length > 0) {
            performSearch(searchInput.value);
        }
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target) && !searchIcon.contains(e.target)) {
            searchResults.classList.remove('show');
        }
    });

    // Close on scroll (optional)
    window.addEventListener('scroll', () => {
        searchResults.classList.remove('show');
    });
}

function initializeMobileDropdowns() {
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

    // Main Navigation Dropdowns (e.g., About School)
    const navDropdowns = document.querySelectorAll('.nav-list .dropdown');
    navDropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        if (link && menu) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    const isVisible = menu.style.visibility === 'visible';
                    
                    // Close other open dropdowns first
                    document.querySelectorAll('.dropdown-menu, .apply-dropdown-menu').forEach(m => {
                        if (m !== menu) {
                            m.style.visibility = 'hidden';
                            m.style.opacity = '0';
                            m.style.transform = 'translateY(-5px)';
                        }
                    });

                    if (isVisible) {
                        menu.style.visibility = 'hidden';
                        menu.style.opacity = '0';
                        menu.style.transform = 'translateY(-5px)';
                    } else {
                        menu.style.visibility = 'visible';
                        menu.style.opacity = '1';
                        menu.style.transform = 'translateY(0)';
                    }
                }
            });
        }
    });
}
