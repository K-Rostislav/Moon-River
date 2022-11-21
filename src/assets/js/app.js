function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2)
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('html').classList.add('webp');
    } else {
        document.querySelector('html').classList.add('no-webp');
    }
});
//=============================================================================================================================================

new Swiper('.swiper', {
    loop: true,
    slidesPerView: 4.6,
    spaceBetween: 25,
    navigation: {
        nextEl: '.slider__next',
        prevEl: '.slider__prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1400: {
            slidesPerView: 4.6,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3.2,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 2.2,
            spaceBetween: 10,
        },
        0: {
            slidesPerView: 1.6,
            spaceBetween: 5,
        },
    },
})

const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");

btn.addEventListener('click', () => {
    document.body.classList.toggle('black');
})

btn2.addEventListener('click', () => {
    document.body.classList.toggle('bg');
})