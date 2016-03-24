$(document).ready(function() {

	$('.panel-title').on('mouseenter', function() {

		$(this).find('a').css('color', '#009bdb');
		$(this).closest('.panel-heading').css('background-color', 'rgba(0,155,219,0.5)');
		debugger;

	});

	$('.panel-title').on('mouseleave', function() {

		$(this).find('a').css('color', 'black');
		$(this).closest('.panel-heading').css('background-color', '#f1f1f1');
	});


})