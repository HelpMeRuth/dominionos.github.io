$(window).scroll(function() { 
   $("#navbar").addClass("z-depth-2");
   var scroll = $(window).scrollTop();
   if (scroll <= 75) {
      $("#navbar").removeClass("z-depth-2");
   }
});