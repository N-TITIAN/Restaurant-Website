let menu= document.querySelector('#menu-bars');
let navbar=document.querySelector('.navbar');
const loader = document.querySelector('.loader');

// Function to show the loader
function showLoader() {
  loader.classList.add('active');
}

// Function to hide the loader
function hideLoader() {
  loader.classList.remove('active');
}
menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header .navbar a');

window.onscroll=()=>{
  showLoader(); // Show loader when scrolling starts
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec=>{
      let top=window.scrollY;
      let height= sec.offsetHeight;
      let offset= sec.offsetTop - 150;
      let id=sec.getAttribute('id');

       if(top>= offset && top <offset + height){
        navLinks.forEach( links =>{
          links.classList.remove('active')
          document.querySelector('header .navbar a[href*='+id+']').classList.add('active');

        });
       };

    });
    // Hide the loader when the content is loaded
    hideLoader();
}
 
document.querySelector('#search-icon').onclick =()=>{
    document.querySelector('#search-form').classList.toggle('active')
}
document.querySelector('#close').onclick =()=>{
    document.querySelector('#search-form').classList.remove('active')
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });


  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints:{
      0:{
        slidesPerview:1,
      },
      640:{
        slidesPerview:2,
      },
      768:{
        slidesPerview:2,
      },
      1024:{
        slidesPerview:3,
      }, 
    }, 
  });