document.addEventListener('DOMContentLoaded', function () {
	// Open modal window
	const modalLinks = document.querySelectorAll('[data-modal]')
	modalLinks.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault()

			const modal = document.querySelector(`.modal--${e.target.dataset.modal}`)
			if (!modal) {
				console.log(`Modal .modal--${e.target.dataset.modal} does not exist!`)
				return
			}

			document.body.style.overflow = 'hidden'

			modal.classList.add('modal--show')

			setTimeout(() => {
				modal.classList.add('modal--backdrop')
			}, 50, modal)

			setTimeout(() => {
				modal.classList.add('modal--shown')
			}, 300, modal)

			return false
		})
	})

	// Close modal window
	function closeModal() {
		const modal = document.querySelector('.modal--shown')
		modal.classList.remove('modal--shown')

		setTimeout(() => {
			modal.classList.remove('modal--backdrop')
		}, 150, modal)

		setTimeout(() => {
			modal.classList.remove('modal--show')
			document.body.style.overflow = ''
		}, 350, modal)
	}

	const closeButtons = document.querySelectorAll('.js-modal-close')

	closeButtons.forEach((button) => {
		button.addEventListener('click', closeModal)
	})

	// Close on backdrop click
	const modalList = document.querySelectorAll('.modal')
	if(modalList) {
		modalList.forEach((modal)=>{
			modal.addEventListener('click', (e) => {
				if (e.target.classList.contains('modal')) {
					closeModal()
				}
			})
		})
	}
})
