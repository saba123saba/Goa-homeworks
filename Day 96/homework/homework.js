document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.Header-menu-toggle');
    var navMenu = document.querySelector('.Header-containerNAV');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('mobile-menu');
        menuToggle.classList.toggle('active');
    });
});
