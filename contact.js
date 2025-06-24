document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('contactModal');
  const contactLink = document.getElementById('contactLink');
  const closeBtn = modal ? modal.querySelector('.close') : null;

  if (contactLink && modal && closeBtn) {
    contactLink.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'block';
    });
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
});
