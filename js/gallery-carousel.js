(function () {
    const slides = [
    `<div class="gallery-slide-container ">
        <div class="gallery-slide-img">
            <img class="gallery-jumanji__img" src="img/gallery-secondary-image-fifth.jpg" alt="#">
        </div>
    </div>`,
    `<div class="gallery-slide-container ">
        <div class="gallery-slide-img">
             <img class="gallery-jumanji__img" src="img/gallery-secondary-image-second.jpg" alt="#">
        </div>
    </div>`,
    `<div class="gallery-slide-container ">
        <div class="gallery-slide-img">
           <img class="gallery-jumanji__img" src="img/gallery-secondary-image-third.jpg" alt="#">
        </div>
    </div>`,
   `<div class="gallery-slide-container ">
        <div class="gallery-slide-img">
          <img class="gallery-jumanji__img" src="img/gallery-secondary-image-fourth.jpg" alt="#">
        </div>
    </div>`

    ];


    let currentSlideIdx = 0;

    function renderSlides() {
        const slideContainer = document.querySelector('.gallery-slide-container');
        slideContainer.innerHTML = slides[currentSlideIdx];
    }

    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderSlides();
    }
    //setInterval(nextSlide, 1000);
    renderSlides();
    const btnNext = document.querySelector('.slide_btn-next');
    btnNext.addEventListener('click', nextSlide);

    const btnPrev = document.querySelector('.slide-btn-prev');
    btnPrev.addEventListener('click', () => {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        renderSlides();
    });
})();