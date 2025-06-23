document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const thankYouModal = document.getElementById('thankYouModal');
  const closeModal = document.getElementById('closeModal');

  if (contactForm && thankYouModal && closeModal) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      thankYouModal.style.display = 'block';
      contactForm.reset();
    });
    closeModal.onclick = function() {
      thankYouModal.style.display = 'none';
    };
    window.onclick = function(event) {
      if (event.target === thankYouModal) {
        thankYouModal.style.display = 'none';
      }
    };
  }
});
