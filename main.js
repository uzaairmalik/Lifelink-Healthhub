// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const menuList = document.getElementById('main-menu-list');
    if(menuToggle && menuList) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            menuList.classList.toggle('show');
        });
        
        document.addEventListener('click', function(e) {
            if(!menuList.contains(e.target) && !menuToggle.contains(e.target)) {
                menuList.classList.remove('show');
            }
        });
    }

    // Hero slider functionality
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentIndex = 0;
    let slideInterval;

    function showSlide(index) {
        // Reset all slides
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'animate__fadeIn');
            if(i === index) {
                slide.classList.add('active');
                setTimeout(() => {
                    slide.classList.add('animate__fadeIn');
                }, 10);
            }
        });
        
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
            dot.setAttribute('aria-selected', i === index ? 'true' : 'false');
        });
        
        currentIndex = index;
    }

    function nextSlide() {
        let index = (currentIndex + 1) % slides.length;
        showSlide(index);
    }

    function prevSlide() {
        let index = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(index);
    }

    function startSlider() {
        slideInterval = setInterval(nextSlide, 6000);
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startSlider();
    }

    // Event listeners
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            showSlide(i);
            resetInterval();
        });
        
        dot.addEventListener('keydown', e => {
            if(e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                showSlide(i);
                resetInterval();
            }
        });
    });

    // Initialize slider
    showSlide(0);
    startSlider();

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if(menuList && menuList.classList.contains('show')) {
                    menuList.classList.remove('show');
                }
            }
        });
    });

    // Lazy load images
    if('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.removeAttribute('loading');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }
});