$(document).ready(function(){
	$('.footer li:nth-of-type(1)').on('touchstart',function(){
		
		window.location.href = 'index.html';
	})
	$('.footer li:nth-of-type(2)').on('touchstart',function(){
		sessionStorage.setItem('type','');
		sessionStorage.removeItem('typeDetail');
		window.location.href = 'zhaodaikuan.html';
	})
	$('.footer li:nth-of-type(3)').on('touchstart',function(){
		window.location.href = 'zhaoguwen.html';
	})
	$('.footer li:nth-of-type(4)').on('touchstart',function(){
		window.location.href = 'myself2.html';
	})
	  //搜索
	   $(".search ").on('touchstart',function(e){
	   	 	e.stopPropagation();
	   })
	   $(".search").on("focus",function(e){
	   		$(this).removeClass('show').addClass('hide');
	   		$(".footer").hide();
	   })
	   $("#scroller").on("tap",function(e){
	   	e.stopPropagation();
	   	$(".search").trigger('blur');
	   	$(".search").removeClass('hide').addClass('show');
	   	$(".search").val('');
	   		$(".footer").show();
	   })
})