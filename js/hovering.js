$(document).ready(function() {

	$('.panel-title').on('mouseenter', function() {

		$(this).find('a').css('color', '#009bdb');
	});

	$('.panel-title').on('mouseleave', function() {

		$(this).find('a').css('color', 'black');
	});
})