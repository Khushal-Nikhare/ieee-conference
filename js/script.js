let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
let slideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Auto Slide
function startSlideShow() {
  slideInterval = setInterval(nextSlide, 5000);
}

function stopSlideShow() {
  clearInterval(slideInterval);
}

document.querySelector('.slider-container').addEventListener('mouseenter', stopSlideShow);
document.querySelector('.slider-container').addEventListener('mouseleave', startSlideShow);

startSlideShow();
