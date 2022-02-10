$('.menu > li').on({
    "mouseenter" : function() {
        $('.menu > li .lnb').show();
        $('#header_sub_inner').show();

    }
});

$("#header_sub_inner").on({
    "mouseleave" : function() {
        $('.menu > li .lnb').hide();
        $('#header_sub_inner').hide();
    }
});

$('.btn_trigger').click(function(){
    if($('#mobile_menu').is(':visible')) {
        $('#mobile_menu').hide();
    } else {
        $('#mobile_menu').show();
    }
});

