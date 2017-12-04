$(function() {



	if ($(document).width() <= 817){
		$('.mobile_menu').click(function(){
			$('.hamburger').toggleClass('is-active');
			$('.menu').toggle();
			$('.active:eq(0)').click(function () {
				$('.submenu:eq(0)').toggle();
			});
			$('.active:eq(1)').click(function () {
				$('.submenu:eq(1)').toggle();
				$('.submenu:eq(0)').toggle();
			});			
			$('.active:eq(2)').click(function () {
				$('.submenu:eq(2)').toggle();
				$('.submenu:eq(0)').toggle();
			});
		});
	}
	else{
		$('.active:eq(0), .submenu:eq(0)').mouseover(function() {
			$('.submenu:eq(0)').css('display', 'block');
			$('.submenu:eq(0)').mouseout(function(){
				$('.submenu:eq(0)').css('display', 'none');
			});
			$('.active:eq(1), .submenu:eq(1)').mouseover(function() {
				$('.submenu:eq(1)').css('display', 'block');
				$('.submenu:eq(0)').css('display', 'block');
			}).mouseout(function(){
				$('.submenu:eq(1)').css('display', 'none');
				$('.submenu:eq(0)').css('display', 'none');
			});
			$('.active:eq(0)').mouseout(function(){
				$('.submenu:eq(0)').css('display', 'none');
			});
		});
	};
	





	$('.header .write').click(function () {
		$('.header .block_write').toggle();
	});




	$('.header .right').click(function () {
		switch ('block'){
			case $('.w_h_1').css('display'):
				$('.w_h_1').css('display', 'none');
				$('.w_h_2').css('display', 'block');
				break;
			case $('.w_h_2').css('display'):
				$('.w_h_2').css('display', 'none');
				$('.w_h_3').css('display', 'block');
				break;
			case $('.w_h_3').css('display'):
				$('.w_h_3').css('display', 'none');
				$('.w_h_1').css('display', 'block');
				break;
		}
	});
	$('.header .left').click(function () {
		switch ('block'){
			case $('.w_h_3').css('display'):
				$('.w_h_3').css('display', 'none');
				$('.w_h_2').css('display', 'block');
				break;
			case $('.w_h_2').css('display'):
				$('.w_h_2').css('display', 'none');
				$('.w_h_1').css('display', 'block');
				break;
			case $('.w_h_1').css('display'):
				$('.w_h_1').css('display', 'none');
				$('.w_h_3').css('display', 'block');
				break;
		}
	});

});