$(document).ready(function() {
	$(".scroll").on("click", function (e) {
		e.preventDefault();
		$("html, body").animate({scrollTop: $("form").offset().top+"px"});
		return false;
	});
})