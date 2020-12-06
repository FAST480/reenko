$(document).ready(function(){
	$(".main__slider").owlCarousel({
		items: 1,
		mouseDrag:false,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3500,
	});

	if($(window).width() <= 1024)
	{
		$(".red-square").removeClass("red-square-half");
		$(".red-square").addClass("red-square-full");
		$(".container-left").addClass("container");
		$(".container").removeClass("container-left");
	}

});