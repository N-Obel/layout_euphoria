// Підключення з node_modules
import * as noUiSlider from 'nouislider';

// Підключення стилів з scss/base/forms/range.scss 
// у файлі scss/forms/forms.scss

// Підключення стилів з node_modules
//import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const priceSlider = document.querySelector('.price-filter__range');
	if (priceSlider) {
		const priceSliderFrom = document.querySelector('.price-filter__input--from');
		const priceSliderTo = document.querySelector('.price-filter__input--to');
		noUiSlider.create(priceSlider, {
			start: [200, 800], // [0,200000]
			connect: true,
			range: {
				'min': 0,
				'max': 1000
			},
			// format: wNumb({
			// 	decimals: 0,
			// 	thousand: '',
			// 	prefix: '$'
			// })
		});
		priceSlider.noUiSlider.on('update', function (values, handle) {
			priceSliderFrom.value = `$${values[0]}`;
			priceSliderTo.value = `$${values[1]}`;
		});
		priceSliderFrom.addEventListener('change', function () {
			const priceSliderValue = +priceSliderFrom.value.replace("$", '')
			priceSlider.noUiSlider.setHandle(0, priceSliderValue);
		});
		priceSliderTo.addEventListener('change', function () {
			const priceSliderValue = +priceSliderTo.value.replace("$", '')
			priceSlider.noUiSlider.setHandle(1, priceSliderValue);
		});
	}
}
rangeInit();

