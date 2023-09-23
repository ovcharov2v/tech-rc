import Swiper from 'swiper'
import {Pagination} from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {
	const sliderList = document.querySelectorAll('.slider')
	if(!sliderList.length) return

	sliderList.forEach((slider) => {
		new Swiper(slider.querySelector('.swiper'), {
			modules: [Pagination],
			slidesPerView: 1,
			spaceBetween: 15,
			grabCursor: true,
			initialSlide: Math.floor(slider.querySelectorAll('.slider__slide').length/2),
			centeredSlides: true,
			pagination: {
				el: slider.querySelector('.slider__pagination'),
				type: 'bullets',
				bulletClass: 'slider__bullet',
				bulletActiveClass: 'slider__bullet--active',
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 30,
				}
			}
		})
	})
})
