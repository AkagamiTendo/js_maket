var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    breakpoints: {
        768: {
            spaceBetween: 24,
            allowSlideNext: false,
            allowSlidePrev: false
        },
        1120: {
            spaceBetween: 32,
            allowSlideNext: false,
            allowSlidePrev: false
        },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

let button = document.querySelector('.repair-brands__button-more');

button.addEventListener('click', function () {
    let wrapper = document.querySelector('.repair-brands__swiper-wrapper');
    if (wrapper.classList.contains('repair-brands__swiper-wrapper--hidden')) {
        wrapper.classList.remove('repair-brands__swiper-wrapper--hidden')
        button.textContent = 'Скрыть';
        button.classList.add('repair-brands__button-more--rotate');
    } else {
        wrapper.classList.add('repair-brands__swiper-wrapper--hidden')
        button.textContent = 'Показать всё';
        button.classList.remove('repair-brands__button-more--rotate');
    }
}); 