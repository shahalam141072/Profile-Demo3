$(function(){
// humburger js code:
var ham = document.querySelector('.navbar_hamburger');
var nav_menu = document.querySelector('#nav_menu');
var nav_close_btn = document.querySelector('.nav_close_btn');
var nav_menu_list = document.querySelectorAll('.nav_menu_list ul li a');


ham.addEventListener("click",function(){
    nav_menu.style.visibility ="visible";
    nav_menu.style.opacity = "1";
    nav_menu.style.left = "0";
});


nav_close_btn.addEventListener("click", function(){
    nav_menu.style.visibility ="hidden";
    nav_menu.style.opacity = "0";
    nav_menu.style.left = "100%";
});

nav_menu_list[1].addEventListener("click", function(){
    nav_menu.style.visibility ="hidden";
    nav_menu.style.opacity = "0";
    nav_menu.style.left = "100%";
});

nav_menu_list[2].addEventListener("click", function(){
    nav_menu.style.visibility ="hidden";
    nav_menu.style.opacity = "0";
    nav_menu.style.left = "100%";
});

nav_menu_list[3].addEventListener("click", function(){
    nav_menu.style.visibility ="hidden";
    nav_menu.style.opacity = "0";
    nav_menu.style.left = "100%";
});

nav_menu_list[4].addEventListener("click", function(){
    nav_menu.style.visibility ="hidden";
    nav_menu.styl.opacity = "0";
    nav_menu.style.left = "100%";
});


//mixitup js code

var containerEl = document.querySelector('.mix_main');
var mixer = mixitup(containerEl);


// venubox js code

new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});

// Testimonial slider js code

$('.test_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    nextArrow:'.slider_right',
    prevArrow:'.slider_left',
    responsive: [
        {
          breakpoint: 577,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 1
          }
        },
        // {
        //   breakpoint: 480,
        //   settings: {
        //     arrows: false,
        //     centerMode: true,
        //     centerPadding: '40px',
        //     slidesToShow: 1
        //   }
        // }
      ]
});

// back to top start ===================
//==== Back-to-top button
$(window).on('scroll', function(event) {
    if($(this).scrollTop() > 600){
        $('.back-to-top').fadeIn(200)
    } else{
        $('.back-to-top').fadeOut(200)
    }
});
//==== Animate the scroll to top
$('.back-to-top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
});
// back to top end==================

});