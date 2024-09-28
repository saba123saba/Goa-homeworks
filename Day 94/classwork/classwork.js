let slideIndex = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slidesContainer = document.querySelector('.slides');

function updateSlideWidth() {
    slides.forEach(slide => {
        slide.style.width = `${slidesContainer.clientWidth}px`;
    });
    showSlide(slideIndex); 
}