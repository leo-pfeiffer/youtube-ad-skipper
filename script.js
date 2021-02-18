// ==UserScript==
// @name YouTube Ad Skipper
// @namespace https://github.com/leo-pfeiffer
// @version 0.1
// @description  Skip ads on youtube
// @match *://www.youtube.com/*
// ==/UserScript==

(function() {

	let checkInterval;

	let resetInterval = function() {
		if (checkInterval) {
			clearTimeout(checkInterval);
			checkInterval = setTimeout(skip, 500);
		}
		checkInterval = setTimeout(skip, 500)
	}

	let skip = function() {
		let btn = document.querySelector(".ytp-ad-skip-button.ytp-button") ||
			document.querySelector(".videoAdUiSkipButton");

		if (btn) {
			btn.click();
			resetInterval();
		}

		else {
			resetInterval();
		}

	}

	skip();
})();
