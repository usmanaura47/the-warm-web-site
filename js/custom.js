$(document).ready(function() {
	$("#slides").slidesjs({
        width: 940,
        height: 528,
		navigation: false,
		play: {
			auto: true,
			interval: 4000,
			effect: "fade",
			restartDelay: 2500,
			pauseOnHover: false
		}
      });
});