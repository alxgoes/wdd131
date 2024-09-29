document.addEventListener("DOMContentLoaded", function() {
    const year = new Date().getFullYear();
    document.getElementById('year').textContent = year;
    document.getElementById('last-modified').textContent = `Last Modification: ${document.lastModified}`;

    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        if (nav.classList.contains('active')) {
            nav.style.display = 'flex'; 
            menuToggle.textContent = '❌'; 
        } else {
            nav.style.display = 'none';
            menuToggle.textContent = '🍔'; 
        }
    });
});
