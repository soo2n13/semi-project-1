$(window).scroll(function(e) {
	if($(window).scrollTop()>70) {
		$("#nav").addClass("container fixed-top border-bottom");
	} else {
		$("#nav").removeClass("container fixed-top border-bottom");
	}
});

$("#nav>a").on("click",function() {
	$("#nav>a").addClass("text-primary");
});

