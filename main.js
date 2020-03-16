'use strict';

$(function() {

	//declaring variables
	var width = 720;
	var animationSpeed = 1000;
	var pause = 3000;
	var currentSlide = 1;

	//cache DOM
	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');

	//setting the Interval
	//animate margin-left
	//if its last slide, go to position 1(0px);

	var interval;

	interval = setInterval(function() {
		$slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() { currentSlide++;
		if(currentSlide === $slides.length) {
			currentSlide = 1;
			$slideContainer.css('margin-left', 0);
} // end of if statement
	 }); // end of fn
	}, pause); //end of interval fn


});


