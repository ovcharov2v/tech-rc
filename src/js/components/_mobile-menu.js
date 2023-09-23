document.addEventListener('DOMContentLoaded', () => {
	const headerMenuButton = document.querySelector('.header__menu-btn')
	headerMenuButton.addEventListener('click', () => {
		headerMenuButton.classList.toggle('header__menu-btn--active')
	})

	const mobileMenuBtn = document.querySelector('.header__menu-btn')
	if (mobileMenuBtn) {
		mobileMenuBtn.addEventListener('click', () => {
			if (document.body.classList.contains('mobile-menu-opening') || document.body.classList.contains('mobile-menu-opened')) {
				closeMobileMenu()
			} else {
				document.body.classList.add('mobile-menu-opening')
				document.body.style.overflow = 'hidden'
				setTimeout(() => {
					document.body.classList.add('mobile-menu-opened')
				})
			}
		})
	}

	const closeMobileMenu = () => {
		document.body.classList.remove('mobile-menu-opened')
		headerMenuButton.classList.remove('header__menu-btn--active')
		setTimeout(() => {
			document.body.style.overflow = ''
			document.body.classList.remove('mobile-menu-opening')
		}, 300)
	}

	const closeMenuList = document.querySelectorAll('.mobile-menu__close')
	closeMenuList.forEach((closeMenu) => {
		closeMenu.addEventListener('click', () => closeMobileMenu())
	})
})
