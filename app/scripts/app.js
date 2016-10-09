import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'owl-carousel-2-beta';

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



});
