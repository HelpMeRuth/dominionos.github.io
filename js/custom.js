$(window).scroll(function() { 
   $("#navbar").addClass("z-depth-2");
   var scroll = $(window).scrollTop();
   if (scroll <= 75) {
      $("#navbar").removeClass("z-depth-2");
   }
});
// makes sure the whole site is loaded
jQuery(window).load(function() {
        // will first fade out the loading animation
	jQuery("#status").fadeOut();
        // will fade out the whole DIV that covers the website.
	jQuery("#preloader").delay(1000).fadeOut("slow");
})