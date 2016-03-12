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
$(document).ready(function() {
  $('.googleplusfeed').kycoGooglePlusFeed2({
    id: '108304488984819398570'
    feedPosts: 3,           // Feed posts to show on load
    postsIncrement: 5,      // Number of feed posts to show on "Show more" button click
    maxPosts: 5,            // Max number of posts to pull before "Show more" will go to Google+, cannot excced 20 because of Google API in use
    profileImageSize: 150,  // Max is 250
    fadeSpeed: 250,         // Fade-in animation duration
    loadAttachments: true,  // Load images, videos, links and other attachments into feed?
    orderBy: 'date',        // Either 'date' or 'popularity'
    sort: 'asc',            // Either 'asc' or 'desc'
    lang: 'en'              // Default language, can also be set to 'de'
  });
});