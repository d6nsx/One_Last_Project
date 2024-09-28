document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (validateForm(name, email, message)) {
            alert('Message sent successfully!');
            contactForm.reset();
        } else {
            alert('Please fill out all fields correctly.');
        }
    });

    function validateForm(name, email, message) {
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            return false;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
