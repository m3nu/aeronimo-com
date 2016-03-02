// JavaScript Document
(function(){
	"use strict";
//Banner height
	$(document).ready(function() {

		var header_height 	= $('#home').innerHeight(),
				viewport_width 	= window.innerWidth,
				viewport_height = window.innerHeight,
				slider_height 	= viewport_height - header_height - 100;

//Banner
		$('.banner,.carousel .item').height(slider_height);

		$(window).resize(function() {
			var header_height 	= $('#home').innerHeight(),
					viewport_width 	= window.innerWidth,
					viewport_height = window.innerHeight,
					slider_height 	= viewport_height - header_height - 100;

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


//Opt-in Form
	$(document).ready(function(){
		// Home page forms
		$('.formspree').on('submit', function(e){

		  var current     = $(this),
		      action      = '//formspree.io/fly@aeronimo.com',
		      validation  = current[0].checkValidity();

		  if(validation){

		    $.post(action, $(current).serialize(),  function() {
		     
		      if(current.is('.de')){
		        $('.text-msg').html('Danke für Ihre Anmeldung. Sie hören von uns.');
		      } else {
		        $('.text-msg').html('Thanks for signing up. We will get back to you soon.');
		      }
		      $( "#message" ).show(1000);
		     
		    }, "json");

		    return false;

		  }

		  e.preventDefault();

		});

	});


})();