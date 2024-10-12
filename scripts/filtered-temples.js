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

    const temples = [
        { templeName: "Brazil Brasília Temple", location: "Brasília, Brazil", dedicated: "2023, September, 17", area: 25000, imageUrl: "images/brasilia_brazil_temple.jpeg" },
        { templeName: "Fortaleza Temple", location: "Fortaleza, Brazil", dedicated: "2019, June, 2 ", area: 36000, imageUrl: "images/exterior_fortaleza_temple.jpg" },
        { templeName: "Kirtland Temple", location: "Kirtland, Ohio, USA", dedicated: "1836, March, 27", area: 15000, imageUrl: "images/kirtland_temple.jpg" },
        { templeName: "Rio de Janeiro Temple", location: "Rio de Janeiro, Brazil", dedicated: "2022, May, 8", area: 29966, imageUrl: "images/rendering_rio_de_janeiro_temple.jpg" },
        { templeName: "Rome Italy Temple", location: "Rome, Italy", dedicated: "2019, March, 10", area: 41010, imageUrl: "images/exterior_grounds_rome_italy_temp.jpg" },
        { templeName: "São Paulo Temple", location: "São Paulo, Brazil", dedicated: "1978, October, 30", area: 59246, imageUrl: "images/sao_paulo_brazil_temple_lds.jpg" },
        { templeName: "Campinas Brazil Temple", location: "Campinas, Brazil", dedicated: "2002, May, 17", area: 48100, imageUrl: "images/campinas_brazil_temple_lds.jpg" },
        { templeName: "Curitiba Brazil Temple", location: "Curitiba, Brazil", dedicated: "2008, June, 1", area: 27850, imageUrl: "images/curitiba_brazil_temple_lds.jpeg" },
        { templeName: "Logan Utah Temple", location: "Logan, Utah, USA", dedicated: "1884, May, 17", area: 119619, imageUrl: "images/logan_utah_temple.jpg" }
    ];

    function displayTemples(temples) {
        const mainContent = document.querySelector('.content');
        mainContent.innerHTML = "";

        temples.forEach(temple => {
            const templeCard = document.createElement('div');
            templeCard.className = 'temple-card';
            templeCard.innerHTML = `
                <h2>${temple.templeName}</h2>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            `;
            mainContent.appendChild(templeCard);
        });
    }

    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const filter = link.getAttribute('data-filter').trim();
            let filteredTemples = [];
            
            if (filter === 'Old') {
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
            } else if (filter === 'New') {
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
            } else if (filter === 'Large') {
                filteredTemples = temples.filter(temple => temple.area > 90000);
            } else if (filter === 'Small') {
                filteredTemples = temples.filter(temple => temple.area < 10000);
            } else {
                filteredTemples = temples;
            }

            displayTemples(filteredTemples);
        });
    });

    displayTemples(temples);
});
