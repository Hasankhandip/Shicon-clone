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
   $(".header-serch-bar-2").addClass("scroll-active-2");
   $(".nav-icon").addClass("active");
   $(".header-search-input").addClass("scroll-active");
   $(".header-search-input-item.active").addClass("scroll-active");
   $(".header-responsive-search-input").addClass("active");
   $(".header-responsive-serch-bar").addClass("active");
  } else {
    $(".header-navbar").removeClass("fixed");
    $(".header-logo").removeClass("remove");
    $(".header-logo-fixed").removeClass("active");
    $(".nav-link").removeClass("active");
    $(".active-nav").removeClass("active");
    $(".header-serch-bar").removeClass("active");
    $(".header-serch-bar-2").removeClass("scroll-active-2");
    $(".nav-icon").removeClass("active");
    $(".header-search-input").removeClass("scroll-active");
    $(".header-search-input-item.active").removeClass("scroll-active");
    $(".header-responsive-search-input").removeClass("active");
    $(".header-responsive-serch-bar").removeClass("active");
  }
});
// header-navbar js end

//  header-search-bar js start
$(".header-serch-bar").on("click",function(){
  $(this).addClass("remove");
  $(".header-serch-bar-2").addClass("active");
  $(".header-search-input-item").addClass("active"); 
  $(".header-search-input-item").addClass("scroll-active"); 
});
$(".header-serch-bar-2").on("click",function(){
  $(this).removeClass("active");
  $(".header-serch-bar").removeClass("remove");
  $(".header-search-input-item").removeClass("active"); 
  $(".header-search-input-item").removeClass("scroll-active"); 
});
$(".banner-section").on("click",function(){
  $(".header-search-input-item").removeClass("active");
});
//  header-search-bar js end