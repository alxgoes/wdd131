const teamMembers = document.querySelectorAll('.team-member');
const modal = document.getElementById('team-modal');
const modalContent = document.getElementById('modal-content');
const closeModal = document.getElementById('close-modal');

teamMembers.forEach(member => {
    member.addEventListener('click', () => {
        const name = member.getAttribute('data-name');
        modalContent.innerHTML = `<span class="close-btn" id="close-modal">&times;</span>
                                  <h2>${name}</h2>
                                  <p>Detalhes sobre ${name}...</p>`;
        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
