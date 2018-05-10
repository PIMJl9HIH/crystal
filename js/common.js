$(document).ready(function () {
	console.log('document-ready');

	var menuItem 	 = $('.menu__item'),
	menuButton = $('.menu__button'),
	menu = $('.menu__nav');

	menuButton.click(function(e) {
		e.preventDefault();
		menu.slideToggle();
	});

	menuItem.click(function(e) {
		e.preventDefault();
		menuItem.removeClass('menu__item_active');
		$(this).addClass('menu__item_active');
	});

	$(window).resize(function() {

		var width = $(window).width();
		if (width > 767 ){
			menu.removeAttr('style');
			console.log('bolwe 767');
		}
	});


	var slider = $('#slider');

	slider.owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots: false,
		navContainer: $('.slider__controls'),
		navText: ['', ''],
		responsiveClass:true

	});

	$('.control__btn-prev').click(function(e) {
		e.preventDefault();
		slider.trigger('prev.owl.carousel');
	});


	$('.control__btn-next').click(function(e) {
		e.preventDefault();
		slider.trigger('next.owl.carousel', [1000]);
	});


});