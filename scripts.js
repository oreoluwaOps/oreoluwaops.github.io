document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    navbarToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('show');
        if (navbarMenu.classList.contains('show')) {
            navbarToggle.innerHTML = '&#10005;'; // Change to cancel icon
        } else {
            navbarToggle.innerHTML = '&#9776;'; // Change back to hamburger icon
        }
    });
});