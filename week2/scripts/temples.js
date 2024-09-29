document.addEventListener("DOMContentLoaded", function() {
    // Define o ano e a data da última modificação do rodapé
    const year = new Date().getFullYear();
    document.getElementById('year').textContent = year;
    document.getElementById('last-modified').textContent = `Last Modification: ${document.lastModified}`;

    // Funcionalidade do menu hamburguer
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        if (nav.classList.contains('active')) {
            nav.style.display = 'flex'; // Usar 'flex' para melhor layout
            menuToggle.textContent = '❌'; // Muda para "X" ao abrir
        } else {
            nav.style.display = 'none';
            menuToggle.textContent = '🍔'; // Retorna ao ícone de menu
        }
    });
});
