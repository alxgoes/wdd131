document.addEventListener("DOMContentLoaded", function () {
    // Lazy loading das imagens
    const lazyImages = document.querySelectorAll('img.lazy');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; // Define o src da imagem a partir do data-src
                img.classList.remove('lazy'); // Remove a classe lazy
                observer.unobserve(img); // Para de observar a imagem
            }
        });
    });

    lazyImages.forEach(image => {
        imageObserver.observe(image); // Observa cada imagem lazy
    });

    // Exibe a data da última modificação do documento
    const lastModified = document.lastModified;
    document.getElementById("modification-date").textContent = "Last modified: " + lastModified;

    // Menu hamburger
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active'); // Alterna a classe 'active' no menu
    });

    // Dados dos membros da equipe
    const teamMembers = document.querySelectorAll('.team-member');
    const modal = document.getElementById('team-modal');
    const modalContent = document.getElementById('modal-content');

    const teamData = {
        "Blim Smith": {
            role: "Web Designer",
            bio: "Blim is a seasoned web designer with over 10 years of experience in creating visually compelling and user-friendly interfaces.",
            imgSrc: "images/blimblimjonas.png",
            socialLinks: {
                instagram: "https://instagram.com/",
                twitter: "https://twitter.com/",
                github: "https://github.com/"
            },
            icons: {
                instagram: "images/instagram.svg",
                twitter: "images/x.svg",
                github: "images/github.svg"
            }
        },
        "Tiaguru San": {
            role: "Software Engineer",
            bio: "Tiaguru specializes in back-end systems and has a strong background in both Python and JavaScript for scalable applications.",
            imgSrc: "images/thg.png",
            socialLinks: {
                instagram: "https://instagram.com/",
                twitter: "https://twitter.com/",
                github: "https://github.com/"
            },
            icons: {
                instagram: "images/instagram.svg",
                twitter: "images/x.svg",
                github: "images/github.svg"
            }
        },
        "Elemin Doe": {
            role: "DevOps Engineer",
            bio: "Elemin is an expert in cloud infrastructure and automation, ensuring seamless deployment and robust systems.",
            imgSrc: "images/elemin.png",
            socialLinks: {
                instagram: "https://instagram.com/",
                twitter: "https://twitter.com/",
                github: "https://github.com/"
            },
            icons: {
                instagram: "images/instagram.svg",
                twitter: "images/x.svg",
                github: "images/github.svg"
            }
        },
        "Yan Bond": {
            role: "Data Analyst",
            bio: "Yan is passionate about data insights, using advanced analytics and machine learning to drive business decisions.",
            imgSrc: "images/fakeyan.png",
            socialLinks: {
                instagram: "https://instagram.com/",
                twitter: "https://twitter.com/",
                github: "https://github.com/"
            },
            icons: {
                instagram: "images/instagram.svg",
                twitter: "images/x.svg",
                github: "images/github.svg"
            }
        },
    };

    // Abre o modal com as informações do membro
    teamMembers.forEach (member => {
        member.addEventListener('click', () => {
            const name = member.querySelector('h3').textContent; // Obtém o nome do membro
            const data = teamData[name]; // Obtém os dados do membro baseado no nome
            modalContent.innerHTML = `
                <span class="close-btn" id="close-modal">&times;</span>
                <img src="${data.imgSrc}" alt="${name}">
                <h3>${name}</h3>
                <p>${data.role}</p>
                <p>${data.bio}</p>
                <div class="social-links">
                    <a href="${data.socialLinks.instagram}" target="_blank">
                        <img src="${data.icons.instagram}" alt="Instagram" width="24" height="24">
                    </a>
                    <a href="${data.socialLinks.twitter}" target="_blank">
                        <img src="${data.icons.twitter}" alt="Twitter" width="24" height="24">
                    </a>
                    <a href="${data.socialLinks.github}" target="_blank">
                        <img src="${data.icons.github}" alt="GitHub" width="24" height="24">
                    </a>
                </div>
            `;
            modal.style.display = 'flex'; // Exibe o modal
        });
    });

    // Fecha o modal ao clicar fora dele
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none'; // Esconde o modal
        }
    });

    // Fecha o modal quando o botão de fechar for clicado
    const closeModalBtn = document.getElementById('close-modal');
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none'; // Esconde o modal
    });
});