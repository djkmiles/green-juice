$(document).ready(function() {
	if (!$('#masthead').length) return;
	var $menu = $('#main-menu');
	var waterfall = $('#masthead').outerHeight();
	var fixed = false;
	$(window).scroll(function () {
		if (!fixed && window.scrollY >= waterfall) {
			$menu.addClass('navbar-fixed-top').removeClass('navbar-absolute-top').css({top: -100, opacity: 0}).animate({top: 0, opacity: 1});
			fixed = true;
		}
		else if (fixed && window.scrollY < 5) {
			$menu.addClass('navbar-absolute-top').removeClass('navbar-fixed-top');
			fixed = false;
		}
	});
});
