$(document).ready(function() {

	$('#sdt_menu div.sdt_box a').on('mouseover', function() {

		$(this).css('color', 'white');
		$(this).css("background-color", "rgba(51, 122, 183, 1)");
		$(this).css('font-size', '1.4em');

	});

	$('#sdt_menu div.sdt_box a').on('mouseleave', function() {

		$(this).css('color', '#337ab7');
		$(this).css("background-color", "rgba(255,255,255,0.7");
		$(this).css("font-size", "13px");
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