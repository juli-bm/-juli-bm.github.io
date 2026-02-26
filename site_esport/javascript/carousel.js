  const wrapper = document.querySelector('.carousel-wrapper');
  const items = document.querySelectorAll('.carousel-item');
  const nextButton = document.querySelector('.carousel-control.next');
  const prevButton = document.querySelector('.carousel-control.prev');

  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100; // Déplacement en pourcentage
    wrapper.style.transform = `translateX(${offset}%)`;
  }

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length; // Boucle sur les éléments
    updateCarousel();
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Gestion du précédent
    updateCarousel();
  });
