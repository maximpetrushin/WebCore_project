let swiper;

function initSwiper() {
    if (window.innerWidth <= 768 && !swiper) {
        swiper = new Swiper('.swiper', {

            slidesPerView: "auto",
            spaceBetween: 16,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    } else if (window.innerWidth > 768 && swiper) {
        swiper.destroy(true, true);
        swiper = undefined;
    }
}
initSwiper();

window.addEventListener('resize', () => {
    initSwiper();
});



const sidebar = document.querySelector('.sidebar');
const blurOverlay = document.querySelector('.blur-overlay');
const burgerButton = document.querySelector('.button--burger');
const burgerClose = document.querySelector('.button--cancel');



burgerButton.addEventListener('click', function () {
    sidebar.classList.remove('sidebar--hidden');
    blurOverlay.classList.remove('blur-overlay--hidden');
})

blurOverlay.addEventListener('click', function () {
    sidebar.classList.add('sidebar--hidden');
    blurOverlay.classList.add('blur-overlay--hidden');
})

burgerClose.addEventListener('click', function () {
    sidebar.classList.add('sidebar--hidden');
    blurOverlay.classList.add('blur-overlay--hidden');
})

const readMoreFirst = document.getElementById('readMoreFirst');
const readMoreBefore = document.querySelector('.read-more');

readMoreFirst.addEventListener('click', function (evt) {
    evt.preventDefault();
    const currentText = readMoreFirst.textContent.trim();

    if (currentText === 'Читать далее') {
        readMoreFirst.textContent = 'Скрыть';
        readMoreBefore.classList.add('active');
    } else {
        readMoreFirst.textContent = 'Читать далее';
        readMoreBefore.classList.remove('active');
    }
})

const readMoreSecond = document.getElementById('readMoreSecond');
const hiddenTemplate = document.querySelector('.card-list--hidden');


readMoreSecond.addEventListener('click', function (evt) {
    evt.preventDefault();
    const currentText = readMoreSecond.textContent.trim();

    if (currentText === 'Показать все') {
        readMoreSecond.textContent = 'Скрыть';
        readMoreSecond.classList.add('active');
        hiddenTemplate.classList.remove('card-list--hidden');


    } else {
        readMoreSecond.textContent = 'Показать все';
        readMoreSecond.classList.remove('active');
        hiddenTemplate.classList.add('card-list--hidden');

    }
})

let buttonsOrder = document.querySelectorAll('.button--order');
for (let i = 0; i < buttonsOrder.length; i++) {

    let buttonOrderText = document.createElement('span');
    buttonOrderText.textContent = 'заказать';
    buttonsOrder[i].appendChild(buttonOrderText);

    let buttonOrderArrow = document.createElement('img');
    buttonOrderArrow.src = 'img/dropdown2.svg';
    buttonsOrder[i].appendChild(buttonOrderArrow);


}