/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination, Parallax, Thumbs } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.hero')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.hero', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination, Parallax],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			loop: true,
			autoHeight: true,
			speed: 1000,
			parallax: true,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			pagination: {
				el: '.hero__pagination',
				clickable: true,
			},
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.hero__arrow--prev',
				nextEl: '.hero__arrow--next',
			},
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.new__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.new__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			loop: true,
			autoHeight: true,
			speed: 800,
			spaceBetween: 38,
			slidesPerView: 4,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.new__arrow--left',
				nextEl: '.new__arrow--right',
			},
			breakpoints: {
				// when window width is >= 320px
				320: {
					slidesPerView: 1.5,
					spaceBetween: 15
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 15
				},
				// when window width is >= 480px
				650: {
					slidesPerView: 3,
					spaceBetween: 25
				},
				// when window width is >= 640px
				991: {
					slidesPerView: 4,
					spaceBetween: 38
				}
			},
			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.reviews__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.reviews__slider', { // Вказуємо склас потрібного слайдера
			// Optional parameters
			modules: [Navigation, Pagination],
			loop: true,
			//autoHeight: true,
			speed: 800,
			spaceBetween: 23,
			slidesPerView: 3,
			// If we need pagination
			pagination: {
				el: '.reviews__pages',
				clickable: true
			},
			// Responsive breakpoints
			breakpoints: {
				320: {
					slidesPerView: 1.3,
					spaceBetween: 15
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 15
				},
				991: {
					slidesPerView: 3,
					spaceBetween: 23,
				}
			}
		});
	}
	if (document.querySelector('.thumb-slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.thumb-slider', { // Вказуємо склас потрібного слайдера
			// Optional parameters
		//	modules: [Navigation],	
			//autoHeight: true,
			
			spaceBetween: 23,
			slidesPerView: 3,
			freeMode: true,
			direction: "vertical",
			watchSlidesProgress: true,
			// Responsive breakpoints
			/*
			breakpoints: {
				320: {
					slidesPerView: 1.3,
					spaceBetween: 15
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 15
				},
				991: {
					slidesPerView: 3,
					spaceBetween: 23,
				}
			}
			*/
		});
	}
	if (document.querySelector('.product__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.product__slider', { // Вказуємо склас потрібного слайдера
			// Optional parameters
			modules: [Thumbs, Navigation],
			spaceBetween: 10,
			loop: true,
			speed: 600,
			thumbs: {
				swiper: ".thumb-slider",
			},
			navigation: {
				prevEl: '.thumb-slider__arrow--next',
				nextEl: '.thumb-slider__arrow--prev',
			},
			// Responsive breakpoints
			/*
			breakpoints: {
				320: {
					slidesPerView: 1.3,
					spaceBetween: 15
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 15
				},
				991: {
					slidesPerView: 3,
					spaceBetween: 23,
				}
			}
			*/
		});
	}
}


// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});