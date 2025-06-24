document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('contactModal');
  const contactLink = document.getElementById('contactLink');
  const contactHero = document.getElementById('contactHero');
  const closeBtn = modal ? modal.querySelector('.close') : null;

  const openModal = (e) => {
    e.preventDefault();
    modal.style.display = 'block';
  };

  if (modal && closeBtn) {
    if (contactLink) contactLink.addEventListener('click', openModal);
    if (contactHero) contactHero.addEventListener('click', openModal);
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
