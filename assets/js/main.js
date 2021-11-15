"use strict";
// wow.js start
new WOW().init();
// wow.js end


// preloader start
$(window).on("load", function () {
  $(".preloader")
    .delay(500)
    .animate(
      {
        opacity: "0",
      },
      500,
      function () {
        $(".preloader").css("display", "none");
      }
    );
});
// preloader end


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
(function() {
  $(".overview-counter-up").each(function () {
      $(this).isInViewport(function(status) {
          if (status === "entered") {
              for( var i=0; i < document.querySelectorAll(".odometer").length; i++ ){
                  var el = document.querySelectorAll('.odometer')[i];
                  el.innerHTML = el.getAttribute("data-odometer-final");
              }
          }
      });
  });
})();
// odometer js end

// header-navbar js start
$(window).on("scroll", function(){
  if ($(this).scrollTop() > 85 ) {
   $(".header-navbar").addClass("fixed");
   $(".header-logo").addClass("remove");
   $(".header-logo-fixed").addClass("active");
   $(".nav-link").addClass("active");
   $(".nav-link i").addClass("active");
   $(".dropdown-nav-link").addClass("active");
   $(".dropdown-nav-item").addClass("active");
   $(".active-nav").addClass("active");
   $(".header-serch-bar").addClass("active");
   $(".header-serch-bar-2").addClass("scroll-active-2");
   $(".nav-icon").addClass("active");
   $(".header-search-input").addClass("scroll-active");
   $(".header-responsive-search-input").addClass("active");
   $(".header-responsive-serch-bar").addClass("active");
  } else {
    $(".header-navbar").removeClass("fixed");
    $(".header-logo").removeClass("remove");
    $(".header-logo-fixed").removeClass("active");
    $(".nav-link").removeClass("active");
    $(".nav-link i").removeClass("active");
    $(".dropdown-nav-link").removeClass("active");
    $(".dropdown-nav-item").removeClass("active");
    $(".active-nav").removeClass("active");
    $(".header-serch-bar").removeClass("active");
    $(".header-serch-bar-2").removeClass("scroll-active-2");
    $(".nav-icon").removeClass("active");
    $(".header-search-input").removeClass("scroll-active");
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