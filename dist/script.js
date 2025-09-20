let currentSlide = 0;
const carousel = document.getElementById('carousel');
const dots = document.querySelectorAll('.dot');

function updateSlider() {
    const container = document.querySelector('.overflow-hidden');
    const slideWidth = container.offsetWidth;
    carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.className = 'w-3 h-3 bg-black rounded-full dot';
        } else {
            dot.className = 'w-3 h-3 border border-black bg-white rounded-full dot';
        }
    });
}

document.getElementById('prev').addEventListener('click', () => {
    currentSlide = currentSlide > 0 ? currentSlide - 1 : 2;
    updateSlider();
});

document.getElementById('next').addEventListener('click', () => {
    currentSlide = currentSlide < 2 ? currentSlide + 1 : 0;
    updateSlider();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
    });
});

// Initialize
updateSlider();