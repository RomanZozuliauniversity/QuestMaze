const images1 = document.querySelectorAll('.gallery img');
const images2 = document.querySelectorAll('.gallery_2 img');
const images = [...images1, ...images2];
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal img');
const close = document.querySelector('.close');

let index;

images.forEach(image => {
    image.addEventListener('click', () => {
        index = image.getAttribute('data-index');
        modalImage.setAttribute('src', image.getAttribute('src'));
        modalOverlay.style.display = 'block';
    });
});

close.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});

modalOverlay.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});

modal.addEventListener('click', event => {
    event.stopPropagation();
});
