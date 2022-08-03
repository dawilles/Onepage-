$(".team-carousel").slick({
	arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,
    autoplaySpeed: 1500,
	autoplay: true,
	mobileFirst: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			},
		},
	],
});
