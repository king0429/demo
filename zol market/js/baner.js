var i = 1;
var timer = setInterval(function(){
	i = i % 3;
	$('.focusList ul li').eq(i).siblings().fadeOut('100');
	$('.focusList ul li').eq(i).fadeIn();
	$('.sel div a').css('background-color', '#f6f6f6');
	$('.sel div').eq(i).children('a').css('background-color', '#ce1a1b');
	i++;
}, 5000);

$('.sel div a').click(function() {
	$('.sel div a').css('background-color', '#f6f6f6');
	$(this).css('background-color', '#ce1a1b');
	var index = $(this).parent().index();
	console.log(index);
	$('.focusList ul li').eq(index).siblings().fadeOut();
	$('.focusList ul li').eq(index).fadeIn();
});

$('.cardTop ul li').eq(0).css('border-bottom', '3px solid white');
$('.cardTop ul li').click(function() {
	$('.cardTop ul li').css('border', 'none');
	$(this).css('border-bottom', '3px solid white');
});
$('.cardTop ul li').eq(1).click(function() {
	$('.gamePic1 img').attr('src', 'source/img/baner3_3.jpg');
	$('.gamePic2 img').attr('src', 'source/img/baner3_4.jpg');
	$('.gamingCon ul li:nth-child(1) img').attr('src', 'source/img/game4.jpg');
	$('.gamingCon ul li:nth-child(1) p a').html('Beats Solo3 Wireless直降600元');
	$('.gamingCon ul li p .price').html('¥1628.00');
	$('.gamingCon ul li:nth-child(2) img').attr('src', 'source/img/game5.jpg');
	$('.gamingCon ul li:nth-child(2) p a').html('苹果原装耳机EarPods');
	$('.gamingCon ul li p .price').html('¥68.00');
		$('.gamingCon ul li:nth-child(3) img').attr('src', 'source/img/game6.jpg');
	$('.gamingCon ul li:nth-child(3) p a').html('AOC  23.6英寸电竞游戏曲屏显示器');
	$('.gamingCon ul li p .price').html('¥889.00');
});

$('.cardTop ul li').eq(2).click(function() {
	$('.gamePic1 img').attr('src', 'source/img/baner3_5.jpg');
	$('.gamePic2 img').attr('src', 'source/img/baner3_6.jpg');
	$('.gamingCon ul li:nth-child(1) img').attr('src', 'source/img/gamePic7.jpg');
	$('.gamingCon ul li:nth-child(1) p a').html('联想小新潮7000 窄边框笔记本I5 8G 双硬盘');
	$('.gamingCon ul li p .price').html('¥5499.00');
	$('.gamingCon ul li:nth-child(2) img').attr('src', 'source/img/gamePic8.jpg');
	$('.gamingCon ul li:nth-child(2) p a').html('戴尔 游匣 15P-2648B大屏游戏本 四核 4G独显');
	$('.gamingCon ul li p .price').html('¥4599.00');
		$('.gamingCon ul li:nth-child(3) img').attr('src', 'source/img/gamePic9.jpg');
	$('.gamingCon ul li:nth-child(3) p a').html('联想 小新 潮5000超极本 酷睿i7+2G独显 IPS屏幕');
	$('.gamingCon ul li p .price').html('￥4388.00');
});

$('.mainBody ul.hot li').hover(function() {
	$(this).children('.hoverband').show().animate({bottom:'109px'}, 200);
}, function() {
	$(this).children('.hoverband').animate({bottom:'90px'}, 200).hide();
});

$('.sixPic li').hover(function() {
	$(this).children('.hoverband1').animate({bottom:'109px'}, 200);
}, function() {
	$(this).children('.hoverband1').animate({bottom:'90px'}, 200).hide();
});	

$('.topPay div').hover(function() {
	$(this).css('backgroundColor', '#ec3639');
	var i = $(this).index();
	console.log(i);
	$('.topPay span').eq(i).stop().animate({right:'37px'}, 500);
}, function() {
	$(this).css('backgroundColor', '#2d2d2d');
	var i = $(this).index();
	$('.topPay span').eq(i).stop().animate({right:'-68px'}, 500);
});

$(window).on('scroll',function() {
	var a = $(document).scrollTop();
	if (a>=638) {
		$('.floor').show();
		$('.fixHeader').show();
	}else{
		$('.floor').hide();
		$('.fixHeader').hide();
	}
});	