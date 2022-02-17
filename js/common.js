// $('.menu > li').on({
//     "mouseenter" : function() {
//         $('.menu > li .lnb').show();
//         $('#header_sub_inner').show();

//     }
// });

// $("#header_sub_inner").on({
//     "mouseleave" : function() {
//         $('.menu > li .lnb').hide();
//         $('#header_sub_inner').hide();
//     }
// });

// $('.btn_trigger').click(function(){
//     if($('#mobile_menu').is(':visible')) {
//         $('#mobile_menu').hide();
//     } else {
//         $('#mobile_menu').show();
//     }
// });



//nav scroll bg-color
$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	//console.log(scroll);
	if (scroll >= 50) {
		//console.log('a');
		$('#hd_inner').addClass('change');
	} else {
		//console.log('a');
		$('#hd_inner').removeClass('change');
	}
});