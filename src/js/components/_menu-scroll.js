document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll(['.mobile-menu__nav-link', '.header__nav-link']).forEach(function (a) {

		a.addEventListener('click', function (event) {
			event.preventDefault()
			const hash = event.target.getAttribute('href')
			const scrollTarget = document.querySelector(hash)
			const headerHeight = document.querySelector('.header').scrollHeight
			console.log(scrollTarget.offsetTop - headerHeight)
			window.scrollTo({
				top: scrollTarget.offsetTop - headerHeight,
				left: 0,
				behavior: "smooth"
			})
		});
	});
})
