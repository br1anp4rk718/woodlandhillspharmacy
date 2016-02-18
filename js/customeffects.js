$(document).ready(function() {

	$('#sdt_menu div.sdt_box a').on('mouseover', function() {

		$(this).css('color', '#009bdb');


	});

	$('#sdt_menu div.sdt_box a').on('mouseleave', function() {

		$(this).css('color', '#337ab7');
	});


	$('#sdt_menu li').on('mouseleave', function() {

		var x = $(this).find('.sdt_wrap');

			$(x).css('opacity', '1');

	});


	$('#sdt_menu li').on('mouseover', function() {

		$('.compoundinfo').css('margin-top', '15em');
	});

	$('#sdt_menu li').on('mouseleave', function() {

		$('.compoundinfo').css('margin-top', 'initial');
	});

})