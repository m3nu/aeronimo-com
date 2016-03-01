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
		$('form.de input[type="submit"]').click(function(){
			$.post("//formspree.io/postmaster@aeronimo.com", $("#contactform").serialize(),  function() {
				$('#message').html('Danke für Ihre Anmeldung. Sie hören von uns.');
				$( "#message" ).show(1000);
			}, "json");
			return false;
		});

		$('form.en input[type="submit"]').click(function(){
			$.post("//formspree.io/postmaster@aeronimo.com", $("#contactformEn").serialize(),  function() {
				$('#message').html('Thanks for signing up. We will get back to you soon.');
				$( "#message" ).show(1000);
			}, "json");
			return false;
		});

		//SingUp page forms
		$('form.de #submit-btn').click(function(){

			$.post("//formspree.io/postmaster@aeronimo.com", $("#registerDE").serialize(),  function(response) {
				$('#contact-message').html('Danke für Ihre Anmeldung. Sie hören von uns.');
				$( "#contact-message" ).show(1000);
			}, "json");
			return false;

		});

		$('form.en #submit-btnEn').click(function(){

			$.post("//formspree.io/postmaster@aeronimo.com", $("#registerEN").serialize(),  function(response) {
				$('#contact-message').html('Thanks for signing up. We will get back to you soon.');
				$( "#contact-message" ).show(1000);
			}, "json");
			return false;

		});

	});


})();