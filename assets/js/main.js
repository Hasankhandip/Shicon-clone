"use strict";
// wow.js start
new WOW().init();
// wow.js end


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


// unvail lazy loader start
$("img").unveil(200, function() {
    $(this).load(function() {
      this.style.opacity = 1;
    });
  });   
// unvail lazy loader end