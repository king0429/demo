		$('nav>ul>li').hover(function() {
			$(this).siblings('li').css('background', 'white');
			$(this).siblings('li').children('a').css('color', 'black');
			$(this).css('background', '#FEC514');
			$(this).children('a').css('color', 'white');
		}, function() {

		});
		$('nav>ul>li').eq(2).hover(function() {
			$(this).children('ul').fadeIn();
		}, function() {
			$(this).children('ul').fadeOut();
		}); 
		$('nav>ul>li').eq(2).children('ul').children('li').eq(1).hover(function() {
			$('.third_menu').fadeIn();
		}, function() {
			$('.third_menu').fadeOut();
		});

		var wid = $('.roll ul li').width();
		var i = 0;
		run(0);
		setInterval(function(){
			i++;
			run(i);
		}, 2000)
		function run(num) {		
			$('.roll ul').animate({left:-wid*i}, 1000,function () {	
				$('.roll ul li').eq(num).clone().appendTo('.roll ul');
			});
					if ($('.roll ul li').length>16) {
						for (var j = 0; j < 8; j++) {
							$('roll ul li').eq(j).remove();
						}
				}

			}

$('.tes>div:nth-child(5) ul li').click(function() {
	$('.tes>div div:nth-child(1) ul li img').hide();
	$('.tes>div div:nth-child(1) ul li img').attr('src', 'images/'+parseInt($(this).index()+2)+'.png').fadeIn();;
	$(this).siblings('li').css('background', '#CCC');
	$(this).css('background', 'white');


	

});