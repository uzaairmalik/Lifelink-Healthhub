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

        // Animate elements when they come into view
        const animateOnScroll = function() {
            const elements = document.querySelectorAll('.animate__animated');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if(elementPosition < windowHeight - 100) {
                    const animationClass = Array.from(element.classList).find(cls => cls.startsWith('animate__'));
                    if(animationClass) {
                        element.classList.add(animationClass);
                    }
                }
            });
        };

        // Run once on load and then on scroll
        animateOnScroll();
        window.addEventListener('scroll', animateOnScroll);

        // In a real implementation, this would initialize a map
        // For example, using Google Maps API:
        
        function initMap() {
            const map = new google.maps.Map(document.getElementById("resourceMap"), {
                center: { lat: 34.1460, lng: 73.2110 }, // Abbottabad coordinates
                zoom: 13,
            });
            
            // Add markers for each resource location
            const locations = [
                { lat: 34.1460, lng: 73.2110, title: "Community Kitchen" },
                // Add more locations here
            ];
            
            locations.forEach(location => {
                new google.maps.Marker({
                    position: location,
                    map: map,
                    title: location.title
                });
            });
        }
        
    });