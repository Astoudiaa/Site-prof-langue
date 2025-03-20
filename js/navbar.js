document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navigation = document.getElementById('navigation');
    
    if (menuToggle && navigation) {
      menuToggle.addEventListener('click', function() {
        navigation.classList.toggle('active');
      });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!navigation.contains(event.target) && !menuToggle.contains(event.target) && navigation.classList.contains('active')) {
        navigation.classList.remove('active');
      }
    });
    
    // Set active link based on current page
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navigation a');
    
    navLinks.forEach(link => {
      const linkPage = link.getAttribute('href').split('/').pop();
      if (currentPage === linkPage || (currentPage === '' && linkPage === './home.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });