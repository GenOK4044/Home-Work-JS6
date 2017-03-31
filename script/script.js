$(function () {
	$('.nav-link').on('click', function (e) {
		e.preventDefault();
		var $item = $(this).parent('.nav-item')
			$position = $item.index();
			$content = $('.con-item');
		
		$content.eq($position)
				.addClass('con-active')
				.siblings()
				.removeClass('con-active')
		$item.addClass('nav-active')
			  	.siblings()
			  	.removeClass('nav-active')
	})
});