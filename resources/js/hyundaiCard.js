// Header, footer 연결
$(function () {
	$(".header").load("header.html");
	$(".footer").load("footer.html");
});

$(function () {
	// right section 스크롤 이벤트
	$(window).scroll(function () {
		scrollIdx = $(window).scrollTop();
		// console.log(scrollIdx);
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

	function rightContent() {
		if (scrollIdx < 500) {
			$(".rightContent").addClass("scrollOn");
		}
	}

	// 띠 배너 닫기 버튼
	// $(document).on("click", ".bannerClose", function () {
	// 	$(".gnbBanner").hide();
	// 	$(".container").css({
	// 		"padding-top": 0,
	// 	});
	// })

	// 카드종합이용안내
	$('.content_tab > .tab_menu .tab_list a').on('click', function () {
		var obj = $(this);
		var tg = obj.data('tab-tg');
		obj.addClass('on').attr('title', '선택됨').parent().siblings().find('>a').removeClass().removeAttr('title');
		$('[data-content]').hide();
		$('[data-content=' + tg + ']').show();
	});

	$('.sub_tab_list li a').on('click', function () {
		var tabOn = $(this);
		var tabTg = tabOn.data('sub-tab');
		tabOn.addClass('on').attr('title', '선택됨').parent().siblings().find('>a').removeClass().removeAttr('title');
		$('[data-sub-content]').hide();
		$('[data-sub-content=' + tabTg + ']').show();
	});

	$(".accordion_list > dl dt").on("click", function () {
		toggleOn = $(this);
		if (toggleOn.hasClass("on")) {
			toggleOn.removeClass("on");
			toggleOn.next("dd").stop().slideUp(300);
			toggleOn.find(".btn").text("열기");
			toggleOn.parent("dl").css("background", "#fff");
		} else {
			toggleOn.addClass("on");
			toggleOn.next("dd").stop().slideDown(300);
			toggleOn.find(".btn").text("닫기");
			toggleOn.parent("dl").css("background", "#eee");
		}
	})
});