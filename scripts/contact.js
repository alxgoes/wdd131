document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && message) {
        alert(`Thank you for your message, ${name}! We appreciate your contact and will get back to you soon.`);
        this.reset(); // Clear the form after submission
    } else {
        alert('Please fill in all fields.');
    }
});
