const swiper = new Swiper('.swiper', {
    followFinger: true,
    centeredSlides: true,
    allowTouchMove: true,
    spaceBetween: 50,
    speed: 300,
    autoplay: {
        delay: 3000
    },
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});