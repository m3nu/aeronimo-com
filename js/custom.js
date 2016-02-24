// JavaScript Document
(function(){
  "use strict";
//Banner height
$(document).ready(function() {

	var header_height 	= $('#home').innerHeight(),
			viewport_width 	= window.innerWidth,
			viewport_height = window.innerHeight,
			slider_height 	= viewport_height - header_height;

//Banner
	$('.banner,.carousel .item').height(slider_height);
	
	$(window).resize(function() {
	var header_height 	= $('#home').innerHeight(),
			viewport_width 	= window.innerWidth,
			viewport_height = window.innerHeight,
			slider_height 	= viewport_height - header_height;

		$('.banner,.carousel .item').height(slider_height);
	});
	
});
	
//Page Smooth Scrolling

$(document).ready(function() {
		$('ul.navi a').bind('click',function(event){
			var $anchor = $(this);
	
			$('html, body').stop().animate({
			scrollTop:( $($anchor.attr('href')).offset().top-0) 
			}, 1500,'easeInOutExpo');
                    /*
                    if you don't want to use the easing effects:
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000);
                    */
					event.preventDefault();
					});
			});

//Opt-in Form

$(document).ready(function(){
 
$('#submit').click(function(){

$.post("send.php", $("#contactform").serialize(),  function(response) {
$('#message').html(response);
$( "#message" ).show(1000);
});
return false;
 
});	
});

//Contact Form

$(document).ready(function(){
 
$('#sendmsg').click(function(){

$.post("contact.php", $("#contactmsg").serialize(),  function(response) {
$('#contact-message').html(response);
$( "#contact-message" ).show(1000);
});
return false;
 
});	
});			
//Flexslider for testimonials
	// Can also be used with $(document).ready()
	$(window).load(function() {
	 
	  $('#testimonial').flexslider({
		animation: "slide",
		controlNav: true,
		directionNav:false,
		animationLoop: true,
		slideshow: false,
	
	  });
	});

		})();