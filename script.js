// Contact form validation and simulated submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    
    // Simple validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
      formMessage.textContent = 'Please fill in all fields.';
      formMessage.style.color = '#f67280';
      return;
    }
    // Simulate successful submission
    formMessage.textContent = 'Thank you for contacting us! We will get back to you soon.';
    formMessage.style.color = '#4BB543';
    contactForm.reset();
  });
} 