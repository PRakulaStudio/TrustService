var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
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

});

document.querySelector('div.grid-item div.d-flex a.btn').onclick = function (event) {
    var block = document.getElementById('characteristics');
    if (block.clientHeight === 0) {
        block.style.height = "auto";
        event.target.innerHTML = 'свернуть<img src="/assets/images/up-arrow.svg" alt="">';
    }
    else {
        block.style.height = "0px";
        event.target.innerHTML = 'развернуть<img src="/assets/images/down-arrow.svg" alt="">';
    }
};