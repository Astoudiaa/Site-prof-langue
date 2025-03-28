document.addEventListener('DOMContentLoaded', function() {
    const slideshowContainer = document.querySelector('.slideshow-container');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        slideshowContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Change slide every second
    setInterval(nextSlide, 1000);
});