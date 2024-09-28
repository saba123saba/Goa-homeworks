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

function showSlide(index) {
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }
    slidesContainer.style.transform = `translateX(-${slideIndex * slidesContainer.clientWidth}px)`;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

setInterval(nextSlide, 3000); 

window.addEventListener('resize', updateSlideWidth);
updateSlideWidth();