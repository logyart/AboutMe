
function readMore() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn = document.getElementById("btn");

    if(dots.style.display === "none") {
        dots.style.display = "inline";
        btn.innerHTML = "Подробнее";
        more.style.display = "none";
    } else {
        dots.style.display = "none";
        btn.innerHTML = "Скрыть";
        more.style.display = "inline";

    }
}

 
const sliderMain = new Swiper('.slider_main', {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60
        }
    }
})

// Второй слайдер для соответствующего фона 
const sliderBg = new Swiper('.slider_bg', {
	centeredSlides: true,
	parallax: true,
	spaceBetween: 60,
	slidesPerView: 3.5
})
sliderMain.controller.control = sliderBg // Соединение двух слайдеров для общего пролистывания

// Увеличение изображения при нажатии на него
document.querySelectorAll('.slider__item').forEach(item => {
	item.addEventListener('click', event => {
		item.classList.toggle('opened')
	})
})

// Затемнение остальных изображение при нажатии на одно из них для увеличения
let desc = document.querySelector('.description')
sliderMain.on('slideChange', e => {
	sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})