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
$(document).ready(function(){
    $('.social-feed-container').socialfeed({
        // GOOGLEPLUS
        google:{
            accounts: ['#DominionOS'],  //Array: Specify a list of accounts from which to pull posts
            limit: 5,                                    //Integer: max number of posts to load
            access_token: 'AIzaSyDAelFmJhg6BSUbSLe8UT7s-G53tL4_KRg' //String: Google Plus access token
        },
         // GENERAL SETTINGS
        length:20                                     //Integer: For posts with text longer than this length, show an ellipsis.
    });
});