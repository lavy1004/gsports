$(function(){ //jQuery 준비
	var visual = $('#main_img > ul > li');
	var visualImg = visual.find('a img');
	var button = $('#list_btn > li');
	var cnt = 0;
	var setIntervalId;
	var dir = 'next'; // next : 다음사진 보여줌, prev : 이전사진 보여줌

	window.onload = function(){
		win_init();
	}; // 화면초기화
	$(window).resize(function(){
			win_init()
	}); // 창사이즈 바뀌어도 아래의 함수를 계속 실행시켜주는 함수호출
	
	function win_init(){
		$('#main_img').css('height', visualImg.height());
		} // 

	button.click(function(){
		clearInterval(setIntervalId);
		var tg = $(this);
		var i = tg.index(); //tg = this , index = 순서번호
		button.removeClass('on');
		tg.addClass('on');

		$('#play_stop li.stop').addClass('on');
		$('#play_stop li.play').removeClass('on');

		move(i); // 함수
	});
	function move(i){
		if(cnt == i) return;
	
		var cnt_img = visual.eq(cnt); // 현재 이미지
		var next_img = visual.eq(i); // 다음 이미지
		
		
			cnt_img.css({left:0}).stop().animate({left:'100%'});
			next_img.css({left:'-100%'}).stop().animate({left:0});
		

		cnt = i;

	}
			//5초마다 자동 슬라이드

		timer();

		function timer(){
			setIntervalId = setInterval(function(){
				var n = cnt + 1; // 0 + 1
			if(n == visual.length){ // 3
				n = 0;
			}
			button.removeClass('on');
			button.eq(n).addClass('on');
			move(n); // 함수
				
			}, 2000);
		};
		
		// 마우스 오버시 자동 슬라이드 정지

		
		$('#play_stop li.stop').click(function(){

			clearInterval(setIntervalId);
			$(this).addClass('on');
			$('#play_stop li.play').removeClass('on');
		});

		$('#play_stop li.play').click(function(){
			timer();
			$(this).addClass('on');
			$('#play_stop li.stop').removeClass('on');
		});

  }); //jQuery 종료