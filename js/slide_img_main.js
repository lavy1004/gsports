  $(function(){ //jquery 준비
	  var visual = $('#gallery_box > ul > li');   // 비쥬얼은 메인 이미지 유엘 리스트이다
	  var visualImg = visual.find("a img");   // 비쥬얼 이미지는 비쥬얼 아래 a 아래의 img이다
  	  var button = $('.b_btn > li');			// 버튼은 리스트 버튼 아래의 리스트이다.
	  var cnt = 0;											// cnt 는 0 이다.  <그림 카운트 번호 용도로 쓰임>
	  var setItervalId;  									// 시간을 담을 변수  
	  var dir = "next";// dir은 "next" 이다  다음 사진 보여주는 용도, prev 이전사진 보여줌

	  window.onload = function(){				//화면 초기화
			win_init(); 
	  };

	  $(window).resize(function(){			   // 윈도우 리사이즈시 
			win_init(); 								   //	 함수
	  });


		button.click(function(){
		   var tg = $(this);			   //
		   var i = tg.index();		  //클릭한 리스트 버튼 li 의 순서번호
		   button.removeClass('on');
		   tg.addClass('on');
	

	/* 이미지 이동시키는 함수*/

		   move(i);	//무브 함수
		   return false;

		});

		function move(i){					//무브 함수 호출
		  
		  if(cnt == i) return;     // cnt가 i랑 같을경우 리턴.(밖으로 나감)

		   var cnt_img = visual.eq(cnt);		 //현재 이미지
		   var next_img = visual.eq(i);		 //다음 이미지
			
			if(dir == 'prev'){				  // 넥스트가 프레브와 같을경우 
				cnt_img.css({left:0}).stop().animate({left:'-100%'});					
				next_img.css({left:'100%'}).stop().animate({left:'0'});


			}else{
				cnt_img.css({left:0}).stop().animate({left:'100%'});
				next_img.css({left:'-100%'}).stop().animate({left:0});
			}

		  cnt = i;					   // cnt 가 i랑 같을경우 나감

		};
		// 다음버튼 클릭시 다음이미지 보여주기
		$('.b_btn').click(function(){
		   dir='next';
		   var n = cnt +1;
		   if(n == visual.length){
				n=0;
		   }
		   button.eq(n).trigger('click');
		});

		// 이전버튼 클릭시 다음이미지 보여주기
		

		// 5초마다 자동 슬라이드
		timer();		  // 함수

		function timer(){				 // 타이머 함수를 실행시킴
			setItervalId = setInterval(function(){		   
			   $('.b_btn').trigger('click');
			}, 4000);
		};

		//마우스 오버시 자동 슬라이드 정지 

		$('#gallery').mouseover(function(){   //메인 랩 마우스 오버스
		   clearInterval(setItervalId);						// 클리어 인터벌 (인터벌 없앰)
		}). mouseout(function(){							//마우스 아웃시 
			timer();													//타이머 가동
		});


  });//jquery 종료