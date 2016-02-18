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

	// $('#sdt_menu li').hover(function() {
	// 	$('.compoundinfo').animate({
	// 		'margin-top':'15em'
	// 	}, 500)
	// }, function() {
	// 	$('.compoundinfo').css('margin-top', 'initial').animate({
	// 		'margin-top':'-3em'
	// 	}, 200)
	// });


	// $('#sdt_menu li').on('mouseover', function() {

	// 	$('.compoundinfo').animate({'margin-top':'15em'}, 500);
	// });

	// $('#sdt_menu li').on('mouseleave', function() {

	// 	$('.compoundinfo').animate({'margin-top':'initial'}, 500);
	// });

})