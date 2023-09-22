import Swiper from 'swiper'
import {Pagination} from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {
	const sliderList = document.querySelectorAll('.slider')
	if(!sliderList.length) return

	sliderList.forEach((slider) => {
		new Swiper(slider.querySelector('.swiper'), {
			modules: [Pagination],
			slidesPerView: 3,
			spaceBetween: 30,
			grabCursor: true,
			initialSlide: Math.floor(slider.querySelectorAll('.slider__slide').length/2),
			centeredSlides: true,
			pagination: {
				el: slider.querySelector('.slider__pagination'),
				type: 'bullets',
				bulletClass: 'slider__bullet',
				bulletActiveClass: 'slider__bullet--active',
			}
		})
	})
})
