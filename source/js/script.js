window.onload = function() {
	var navMain = document.querySelector('.main-nav');
	var navToggle = document.querySelector('.main-nav__toggle');
	navMain.classList.remove('main-nav--nojs');
	navToggle.addEventListener('click', function() {
		if (navMain.classList.contains('main-nav--closed')) {
			navMain.classList.remove('main-nav--closed');
			navMain.classList.add('main-nav--opened');
		} else {
			navMain.classList.add('main-nav--closed');
			navMain.classList.remove('main-nav--opened');
		}
	});

	var index = document.querySelector(".item__buy");
	var сatalog = document.querySelectorAll(".catalog-item__buy");
	var modal = document.querySelector(".modal");

	if (index) {
		index.addEventListener("click", function(evt) {
			evt.preventDefault();
			modal.classList.remove("modal--closed");
		});
	}

	if (сatalog) {
		for (var i = 0; i <= (сatalog.length - 1); i++) {
			сatalog[i].addEventListener("click", function(evt) {
				evt.preventDefault();
				modal.classList.remove("modal--closed");
			});
		}
	}

	window.addEventListener("keydown", function(evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();
			modal.classList.add("modal--closed");
		}
	});


		ymaps.ready(function() {
			var myMap = new ymaps.Map("map", {
					center: [59.938631, 30.323055],
					zoom: 16,
					controls: ["zoomControl"]
				}, {
					searchControlProvider: "yandex#search"
				}),

				myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
					hintContent: "Мишка здесь!",
					balloonContent: "Большая Конюшенная ул., 19/8, Санкт-Петербург"
				}, {
					iconLayout: "default#image",
					iconImageHref: "../img/icon-map-pin.svg",
					iconImageSize: [66, 100],
					iconImageOffset: [-33, -100]
				});
			myMap.geoObjects
				.add(myPlacemark);
		});
  	document.querySelector('.contacts__map').classList.remove('contacts__map--nojs');
};
