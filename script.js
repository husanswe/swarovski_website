let currentSlide = 0;
const slides = document.querySelectorAll('#carousel img');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;
const carousel = document.getElementById('carousel');

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  updateDots();
}

function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.remove('bg-white');
      dot.classList.add('bg-black'); // Active - qora
    } else {
      dot.classList.remove('bg-black');
      dot.classList.add('bg-white'); // Inactive - oq
    }
  });
}

// Arrow click events
document.getElementById('next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

// Dot click events
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    updateCarousel();
  });
});

// Initialize
updateDots();