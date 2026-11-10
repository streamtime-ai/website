// Re-skin support for HubSpot embedded forms.
// The form renders inside a cross-origin iframe, so field/button styling
// belongs in the HubSpot form designer. This script only sweeps any chrome
// the embed script injects into OUR page outside the frame; the frame itself
// is left alone (see _sass/hubspot.scss for the bottom-strip crop).
(function () {
	var CHROME_SELECTORS = [
		'.hsform-branding-control',
		'.hsform-privacy-control',
		'.hsform-marketing-messages',
		'[data-hs-form-branding]'
	];

	function sweep() {
		CHROME_SELECTORS.forEach(function (sel) {
			document.querySelectorAll(sel).forEach(function (el) {
				el.style.display = 'none';
			});
		});
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', function () { sweep(); setTimeout(sweep, 1500); });
	} else {
		sweep(); setTimeout(sweep, 1500);
	}
})();
