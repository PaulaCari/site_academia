//hamburger
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
// console.log(menu,navbar)

menu.onclick = () =>{
    menu.classList.toggle('fa-bars');
    navbar.classList.toggle('active');
};
window.onscroll = () => {
    menu.classList.remove('fa-bars');
    navbar.classList.remove('active');
};

// slides carrosel home
var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 2000,  //velocidade slide
    }, 
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});
// console.log(swiper)

// Feedbacks
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 3500, 
        desibleOnInteraction: false, 
    }, 
    breakpoints:{
        0: {
            slidesPreView:1,
        },
        600:{
            slidesPreView:2,
        },
    },
 });

//  blogs
var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
});
