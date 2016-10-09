import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'owl-carousel-2-beta';
import 'magnific-popup';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widget';
import 'jquery-ui/ui/widgets/button';
import 'jquery-ui/ui/widgets/spinner';
import 'jquery-validation';


$(() => {
	svg4everybody();

	const owlcarousel = $('.slider__list');

	owlcarousel.owlCarousel({
		margin: 0,
		items: 1,
		loop: true,
		center: true,
		nav: false,
		stagePadding: 0,
		dots: true,
		animateOut: 'fadeOut'

	});


	$('.popup-trigger').magnificPopup({
		type: 'inline'
	});


	// $(".input__field").each(function() {
	// 	if ($(this).val() != "") {
	// 		$(this).parent().addClass("animation");
	// 	}
	// });

	$(".input__field").focus(function(){
		$(this).parent().addClass("animation");
	});

	//Remove animation(s) when input is no longer focused
	$(".input__field").focusout(function(){
		if($(this).val() === "")
			$(this).parent().removeClass("animation");
		// $(this).parent().removeClass("animation-color");
	});

	const amountSpinner = $('.spinner__field');
	const amountSpinnerUp = $('.spinner__button_up');
	const amountSpinnerDown = $('.spinner__button_down');

	amountSpinner.spinner({
		max: 50,
		min: 0,
		step: 1,
		decimals: 0
	});

	amountSpinnerUp.click(function () {
		amountSpinner.spinner('stepUp');
	});

	amountSpinnerDown.click(function () {
		amountSpinner.spinner('stepDown');
	});


	// validation

	var popupForm = $('#popup-form');

	popupForm.validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			city: {
				required: true
			},
			product: {
				required: true
			},
			note: {
				required: true
			}
		},
		messages: {
			name: {
				required: ''
			},
			email: {
				required: '',
				email: ''
			},
			city: {
				required: ''
			},
			product: {
				required: ''
			},
			note: {
				required: ''
			}
		}
	});


});
