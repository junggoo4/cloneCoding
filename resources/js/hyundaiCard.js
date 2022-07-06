// Header, footer 연결
$(function () {
	$(".header").load("header.html");
	$(".footer").load("footer.html");
});

$(function () {
	// right section 스크롤 이벤트
	$(window).scroll(function () {
		scrollIdx = $(window).scrollTop();
		console.log(scrollIdx);
		headerChange();
		rightContent();
	});

	function headerChange() {
		if (scrollIdx < 80) {
			$(".header .container").css("height", "80");
		} else {
			$(".header .container").css("height", "48");
		}
	};

	// function rightContent() {
	// 	if (scrollIdx < 500) {
	// 		$(".rightContent").addClass("scrollOn");
	// 	}
	// }

	// 띠 배너 닫기 버튼
	$(document).on("click", ".bannerClose", function () {
		$(".gnbBanner").hide();
		$(".container").css({
			"padding-top": 0,
		});
	})
});