  $(function(){ //jQuery 준비
	
	var cnt = 0; // 처음 이미지 번호 0~11 까지
	var imgLen = 5; // 화면에 보여지는 사진 개수
	var imgWidth = $('div.container > ul > li').width()+5;
	var containWidth = $('div.container').width();
	var maxSize = $('div.container > ul > li').length;  //li의 개수 구하는식 length는 길이를 뜻하는데 여기서 length가 li의 총길이를파악하나봅니다 총 12개입니다 이번li는
	var moveX; // 이미지 이동 위치 값
	

	$('div.left').css({'opacity':'0.3',cursor:'default'});
	$('div.right').click(function(){
		if(cnt < maxSize - imgLen){
			cnt++;
		}
		moveX = imgWidth * cnt * -1;

		$('div.container > ul').stop().animate({
			left:moveX
		}, 400, 'easeOutCubic');
	if(cnt ==  maxSize-imgLen){
		$(this).css({'opacity':'0.3',cursor:'default'});
	}else{
		$(this).css({'opacity':'1',cursor:'pointer'});
	}
		$('div.left').css({'opacity':'1',cursor:'pointer'});
	});

	$('div.left').click(function(){
		if(cnt > 0){
			cnt--;
		}
		moveX = imgWidth * cnt * -1;

		$('div.container > ul').stop().animate({
			left:moveX
		}, 400, 'easeOutCubic');

		if(cnt == 0){
		$(this).css({'opacity':'0.3',cursor:'default'});
	}else{
		$(this).css({'opacity':'1',cursor:'pointer'});
	}
		$('div.right').css({'opacity':'1',cursor:'pointer'});
	});

	//섬네일 이미지 클릭시 큰이미지 보여주기

	$('div.container > ul > li').click(function(){
		$('#image > p > img').attr('src',$(this).find('img').attr('src')).attr('alt',$(this).find('img').attr('alt'));
	});

		
  }); //jQuery 종료