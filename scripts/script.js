document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll('img.lazy');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(image => {
        imageObserver.observe(image);
    });

    const lastModified = document.lastModified;
    document.getElementById("modification-date").textContent = "Last modified: " + lastModified;
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const teamMembers = document.querySelectorAll('.team-member');
const modal = document.getElementById('team-modal');
const closeModalBtn = document.getElementById('close-modal');
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
        bio: "Yan is passionate about data insights, using advanced analytics and machine learning to drive business decisions",
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

teamMembers.forEach(member => {
    member.addEventListener('click', () => {
        const name = member.querySelector('h3').textContent;
        const data = teamData[name];
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
        modal.style.display = 'flex';
    });
});


function closeModal() {
    modal.style.display = 'none';
}

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
