document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const navOverlay = document.querySelector('.mobile-nav-overlay');
    const navLinks = document.querySelectorAll('.mobile-nav-overlay a');

    // Open Menu
    menuToggle.addEventListener('click', () => {
        navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling under menu
    });

    // Close Menu
    menuClose.addEventListener('click', closeMenu);

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    function closeMenu() {
        navOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
});
