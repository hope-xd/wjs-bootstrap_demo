




$(function(){
	function resize(){
		var windowWidth = $(window).width();
	var isSmallScreen = windowWidth<768;
	$("#main_ad > .carousel-inner > .item").each(function (i,item){
		var $item = $(item);
		var imgSrc = isSmallScreen?$item.data('img-xs'):$item.data('img-lg');
		$item.css('backgroundImage','url('+imgSrc+')');
		if(isSmallScreen){
			$item.html('<img src="'+imgSrc+'" alt="" />')
		}else{
			$item.empty();
		}
	})
	}
	
	$(window).on('resize',resize).trigger('resize');

});


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


$(function(){
	var $ulContainer=$('.nav-tabs');
	var windowWidth = $(window).width();
	var width=30;
	$ulContainer.children().each(function(index,el) {
		var $el = $(el);
		width += $el.width();
	});
	if(width > windowWidth)
		$ulContainer.css('width',width).parent().css('overflow-x','scroll');
})


	$('#news .nav-pills li').on('click',function() {
		var $this = $(this);
		console.log($this.data());
		var $news_title = $('.news-title');
		$news_title.text($this.data('title'));
})


$(function() {
	var startX,endX;
	var $carousels = $('.carousel');
	$carousels.on('touchstart',function(e) {
		startX = e.originalEvent.touches[0].clientX;
	})
	$carousels.on('touchmove',function(e) {
		endX = e.originalEvent.touches[0].clientX;
	})
	$carousels.on('touchend',function(e) {
		startX > endX && Math.abs(startX - endX) > 50 ? 
		$(this).carousel('prev'):$(this).carousel('next');
	})

})


