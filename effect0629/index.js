var a = $('.wrap').length;

$('.wrap').eq(0).mouseenter(function() {
	$(this).children('.wrap_top').stop().animate({top:'100px'}, 700);
	$(this).children('.wrap_bottom').stop().animate({top:'-1px'}, 700);
	$(this).children('.wrap_left').stop().animate({left:'100px'}, 700);
	$(this).children('.wrap_right').stop().animate({right:'100px'}, 700);
});
 $('.wrap').eq(0).mouseleave(function() {
	$(this).children('.wrap_top').stop().animate({top:'-1px'}, 700);
	$(this).children('.wrap_bottom').stop().animate({top:'100px'}, 700);
	$(this).children('.wrap_left').stop().animate({left:'-1px'}, 700);
	$(this).children('.wrap_right').stop().animate({right:'-1px'}, 700);
}).stop();

