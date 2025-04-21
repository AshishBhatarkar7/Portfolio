// coursera
const carousels = document.querySelectorAll('.cybersecurity-carousel');

carousels.forEach(carousel => {
  const slides = carousel.querySelectorAll('.carousel-img');
  const nextBtn = carousel.querySelector('.next');
  const prevBtn = carousel.querySelector('.prev');
  let index = 0;

  const showSlide = (i) => {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');
  };

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });

  showSlide(index);
});



// corizo
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-track .slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;

  function updateCarousel() {
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentIndex);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
  });

  updateCarousel();
