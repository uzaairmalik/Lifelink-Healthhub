document.addEventListener('DOMContentLoaded', function() {
  // Example: Smooth scroll for anchor links (if you add any anchors)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Mobile menu toggle example (adjust IDs/classes per your HTML if needed)
  const menuToggle = document.getElementById('menu-toggle');
  const menuList = document.querySelector('.main-menu ul');
  if (menuToggle && menuList) {
    menuToggle.addEventListener('click', () => {
      menuList.classList.toggle('show');
    });

    // Optional: close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!menuList.contains(event.target) && !menuToggle.contains(event.target) && menuList.classList.contains('show')) {
        menuList.classList.remove('show');
      }
    });
  }
});
