// * Header Scroll 
let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}
// * nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})
// * Swiper Slider

var swiper = new Swiper(".mySwiper",{
    direction: "vertical",
    loop: true,
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
    },
});


// * counter design

document.addEventListener("DOMContentLoaded",()=>{
    function counter(id,start,end,duration) {
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start? 1: -1,
        step = Math.abs(Math.floor(duration/range)),
        timer = setInterval(()=>{
            current+= increment;
            obj.textContent = current;
            if (current == end) {
                clearInterval(timer);
            }
        },step)
    }
    counter("count1",0,1287,3000);
    counter("count2",100,5786,2500);
    counter("count3",0,1440,3000);
    counter("count4",0,7110,3000);
});

// * Our Partner

// var swiper = new Swiper(".our-partner",{
//     slidesPreView: 3,
//     spaceBetween: 30,
//     loop: true,
//     autoplay: {
//         delay: 2000,
//     },
//     breakpoints: {
//         '991': {
//             slidesPreView: 5,
//             spaceBetween: 10,
//         },
//         '767': {
//             slidesPreView: 3,
//             spaceBetween: 10,
//         },
//         '320':{
//             slidesPreView:2,
//             spaceBetween:8,
//         },
//     },
// });
var swiper = new Swiper('.our-partner', {
  // other Swiper parameters
  slidesPerView: 3, // This is the key parameter
  spaceBetween: 10, // You might also want space between slides
  loop: true,
  autoplay: {
    delay: 1000,
  },
  // Optional: make it responsive
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  }
});