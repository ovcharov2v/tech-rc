document.addEventListener('DOMContentLoaded', () => {
	let currentMarker = null
	ymaps.ready(init);

	function init() {
		var map = new ymaps.Map("map", {
				center: [56.107564, 47.280965],
				zoom: 15,
				controls: [],
				behaviors: []
			}),

			markerDesktop = new ymaps.Placemark([56.107564, 47.280965], {}, {
				iconLayout: 'default#image',
				iconImageHref: './images/section-map/map-marker-desktop.png',
				iconImageSize: [446, 120],
				iconImageOffset: [-47, -120]
			}),

			markerMobile = new ymaps.Placemark([56.107564, 47.280965], {}, {
				iconLayout: 'default#image',
				iconImageHref: './images/section-map/map-marker-mobile.png',
				iconImageSize: [390, 185],
				iconImageOffset: [-195, -85]
			})

		map.behaviors.disable(['scrollZoom'])

		addPlaceMark(map, markerDesktop, markerMobile)

		window.addEventListener('resize', () => {
			addPlaceMark(map, markerDesktop, markerMobile)
		})
	}

	const addPlaceMark = (map, markerDesktop, markerMobile) => {
		if (window.innerWidth < 1024) {
			if (currentMarker !== 'mobile') {
				currentMarker = 'mobile'
				map.geoObjects.remove(markerDesktop)
				map.geoObjects.add(markerMobile)
				map.setCenter([56.109423, 47.280965])
			}
		} else {
			if (currentMarker !== 'desktop') {
				currentMarker = 'desktop'
				map.geoObjects.remove(markerMobile)
				map.geoObjects.add(markerDesktop)
				map.setCenter([56.107564, 47.280965])
			}
		}
	}

})
