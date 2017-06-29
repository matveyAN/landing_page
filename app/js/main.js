$(document).ready(function(){
	$('#owl-carousel').owlCarousel({
	singleItem: true,
	navigation: true,
	navigationText: false,
	items: 1,
	});

	$('#car_client').owlCarousel({
	singleItem: true,
	navigation: true,
	navigationText: false,
	
	
	});

// var mixer = mixitup('#Container');
$('#Container').mixItUp();
})