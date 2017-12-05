 $(function(){ //jQuery 준비

	 // pc용 메뉴 숨기기

	$('.navi > li .sub_navi').hide();
	
	// 네비를 눌럿을때 서브메뉴가 뜨게할것

	$('.navi > li').mouseenter(function(){
		$(this).find('.sub_navi').show();
	}).mouseleave(function(){
		$(this).find('.sub_navi').hide();
	});

  
	// pc용 네비를 복사하여 모바일용 네비로 바꾸기

	var naviClone = $('ul.navi').contents().clone();
	var navi_list = $('<ul id="sm_menu"></ul>');
	navi_list.append(naviClone);
	navi_list.appendTo('#mb_navi');

	$('#sm_menu > li:eq(1)').append('<ul class="sub_navi"><li><a href="g-sports_02.html">창업절차</a></li></ul>');
	$('#sm_menu > li:eq(2)').append('<ul class="sub_navi"><li><a href="g-sports_03.html">게임소개</a></li></ul>');
	$('#sm_menu > li:eq(3)').append('<ul class="sub_navi"><li><a href="g-sports_04.html">오시는 길</a></li></ul>');
	

	$('#sm_menu > li > .sub_navi').hide();
	
	$('#sm_menu > li > a').click(function(){
		$(this).toggleClass('selected');
		$('#sm_menu > li > .sub_navi').slideUp('fast');
		if($(this).hasClass('selected')){
			$(this).find('+ul').slideDown('slow');
			$('#sm_menu > li > a').removeClass('selected');
			$(this).addClass('selected');
		};
		
	return false;
	});

	//모바일 메뉴 보여주기

		var am_show = false;
		$('#m_menu').click(function(){
			am_show = !(am_show);
			if(am_show){
				$('#mb_navi,#navi_bg').show();
			}else{
			$('#mb_navi,#navi_bg').hide();
			$('#sm_menu > li > a').removeClass('selected');
			$('#sm_menu > li > .sub_navi').slideUp('fast');
		}
		});
		$('.close').click(function(){
			am_show = false;
			
			$('#mb_navi,#navi_bg').hide();
		});

		//창의 크기가 768px 이상일때 모바일 메뉴 안보이게 처리

		$(window).resize(function(){
			if($(this).width() >= 768){
			am_show=false;
			$('#mb_navi,#navi_bg').hide();
			$('#sm_menu > li > a').removeClass('selected');
			$('#sm_menu > li > .sub_navi').slideUp('fast');
		}
		});

  }); //jQuery 종료


