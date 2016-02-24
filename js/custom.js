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

//language switcher
	var hashTag = window.location.hash;

	if( $('.language_switcher li#de').is('.active') ){
    $('body').find('.en').hide()
  }
  if(hashTag == '#english'){
  	$('.language_switcher li#en').addClass('active');
  	$('.language_switcher li#de').removeClass('active');
  	$('body').find('.de').hide();
  	$('body').find('.en').show();
  }

  $('.language_switcher li').click(function(){
    $('.language_switcher li').removeClass('active');
    $(this).addClass('active');

    if($('.language_switcher #en').is('.active')){
      $('body').find('.de').hide();
      $('body').find('.en').show();
    }
    if($('.language_switcher #de').is('.active')){
      $('body').find('.en').hide();
      $('body').find('.de').show();
    } 

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