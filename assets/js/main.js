"use strict";
// wow.js start
new WOW().init();
// wow.js end

// unvail lazy loader start
$("img").unveil(200, function() {
  $(this).load(function() {
    this.style.opacity = 1;
  });
});   
// unvail lazy loader end

// scroll-top btn start
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 300) {
    $(".scroll-top").addClass("active");
  } else {
    $(".scroll-top").removeClass("active");
  }
});

$(".scroll-top").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});
// scroll-top btn end

// odometer js start
$(window).on("scroll", function(){
    if ($(this).scrollTop() > 1600) {
        setTimeout(function(){
            odometer1.innerHTML = 456;
            odometer2.innerHTML = 25;
            odometer3.innerHTML = 459;
            odometer4.innerHTML = 226;
            odometer5.innerHTML = 158;
           });
      }
});
// odometer js end

// header-navbar js start
$(window).on("scroll", function(){
  if ($(this).scrollTop() > 85 ) {
   $(".header-navbar").addClass("fixed");
   $(".header-logo").addClass("remove");
   $(".header-logo-fixed").addClass("active");
   $(".nav-link").addClass("active");
   $(".active-nav").addClass("active");
   $(".header-serch-bar").addClass("active");
  } else {
    $(".header-navbar").removeClass("fixed");
    $(".header-logo").removeClass("remove");
    $(".header-logo-fixed").removeClass("active");
    $(".nav-link").removeClass("active");
    $(".active-nav").removeClass("active");
    $(".header-serch-bar").removeClass("active");
  }
});
// header-navbar js end

//  header-search-bar js start
$(".header-serch-bar").on("click",function(){
  $(".header-search-input-item").addClass("active");
});
$(".banner-section").on("click",function(){
  $(".header-search-input-item").removeClass("active");
});
//  header-search-bar js end