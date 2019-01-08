$(document).ready(function() {
	$('.navbar-toggler').click(function() {
		if ($(this).hasClass('collapsed')) {
			$(this).removeClass('collapsed');
			$('.mobile-nav').addClass('show');
		} else {
			$(this).addClass('collapsed');
			$('.mobile-nav').removeClass('show');
		}
	});
});
