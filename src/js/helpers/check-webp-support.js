(function checkWebpSupport() {
	const img = new Image()
	img.onload = function () {
		if ((img.width > 0) && (img.height > 0)) {
			document.body.classList.add("webp-support");
		}
		else {
			document.body.classList.add("no-webp-support");
		}
	}
	img.onerror = function () {
		document.body.classList.add("no-webp-support");
	}
	img.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
})()
