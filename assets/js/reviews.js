var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 10,
    loop: false,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        // when window width is <= 320px
        1000: {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        650: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    }

})