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




	for(var i=0; i<5; i++){
		card_text = $('.cards .h2:eq('+i+')').text();
		card_text = card_text.replace(' ', '<br>');
		$('.cards .h2:eq('+i+')').html(card_text);
	};



	$('.map:eq(1)').click(function () {
		$('.map:eq(1)').css('background-color','#fff');
		$('.map:eq(1)').css('border-bottom','none');
		$('.map:eq(1) p').css('background-image','url("/img/m_i_r_a.png")');
		$('.map:eq(1) p').css('color','#d92929');
		$('.map:eq(0)').css('background-color','#ebeaf2');
		$('.map:eq(0)').css('border-bottom','1px solid #a5aac4');
		$('.map:eq(0) p').css('background-image','url("/img/m_i_l.png")');
		$('.map:eq(0) p').css('color','#303864');
		$('.maps img').attr('src','img/m_i_2.jpg');

		$('.map:eq(0)').click(function () {
			$('.map:eq(0)').css('background-color','#fff');
			$('.map:eq(0)').css('border-bottom','none');
			$('.map:eq(0) p').css('background-image','url("/img/m_i_l_a.png")');
			$('.map:eq(0) p').css('color','#d92929');
			$('.map:eq(1)').css('background-color','#ebeaf2');
			$('.map:eq(1)').css('border-bottom','1px solid #a5aac4');
			$('.map:eq(1) p').css('background-image','url("/img/m_i_r.png")');
			$('.map:eq(1) p').css('color','#303864');
			$('.maps img').attr('src','img/m_i_1.jpg');
		});
	});






	if ($(window).width() <= 458){
		$('.map:eq(0) p').text('На карте');
		$('.map:eq(1) p').text('На схеме');
	};


});