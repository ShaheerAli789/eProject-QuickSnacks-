var navbar = document.querySelector('.header .navbar');
var menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

var swiper = new Swiper(".home-slider", {
    grabcursor: true,
    loop: true,
    centerdslide: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

lightGallery(document.querySelector('.gallery .gallery-container'));