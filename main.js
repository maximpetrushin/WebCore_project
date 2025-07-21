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
            breakpoints: {
                769: {
                    slidesPerView: "auto",
                    spaceBetween: 16,
                    enabled: false,
                }
            }
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
    sidebarFeedback.classList.add('feedback--hidden');
    blurOverlay.classList.add('blur-overlay--hidden');
})

burgerClose.addEventListener('click', function () {
    sidebar.classList.add('sidebar--hidden');
    blurOverlay.classList.add('blur-overlay--hidden');
})

const readMoreFirst = document.getElementById('readMoreFirst');
const readMoreBefore = document.querySelector('.read-more');
const mobileHiddenText = document.querySelector('.text-content__paragraph--mobile-hidden');
const tabletHiddenText = document.querySelector('.text-content__paragraph--tablet-hidden');
const desktopHiddenText = document.querySelector('.text-content__paragraph--hidden');


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

    // Просто переключаем классы
    mobileHiddenText.classList.toggle('text-content__paragraph--mobile-hidden');
    tabletHiddenText.classList.toggle('text-content__paragraph--tablet-hidden');
    desktopHiddenText.classList.toggle('text-content__paragraph--hidden');
});


const readMoreSecond = document.getElementById('readMoreSecond');
const cardListBrands = document.querySelector('.card-section--brand');
const hiddenTemplate = cardListBrands.querySelector('.card-list--hidden');


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

const readMoreThird = document.getElementById('readMoreThird');
const cardListRepair = document.querySelector('.card-section--repair');
const hiddenTemplateRepair = cardListRepair.querySelector('.card-list--hidden');


readMoreThird.addEventListener('click', function (evt) {
    evt.preventDefault();
    const currentText = readMoreThird.textContent.trim();

    if (currentText === 'Показать все') {
        readMoreThird.textContent = 'Скрыть';
        readMoreThird.classList.add('active');
        hiddenTemplateRepair.classList.remove('card-list--hidden');


    } else {
        readMoreThird.textContent = 'Показать все';
        readMoreThird.classList.remove('active');
        hiddenTemplateRepair.classList.add('card-list--hidden');
    }
})

const buttonsOrder = document.querySelectorAll('.button--order');
for (let i = 0; i < buttonsOrder.length; i++) {

    let buttonOrderText = document.createElement('span');
    buttonOrderText.textContent = 'заказать';
    buttonsOrder[i].appendChild(buttonOrderText);

    let buttonOrderArrow = document.createElement('img');
    buttonOrderArrow.src = 'img/dropdown2.svg';
    buttonsOrder[i].appendChild(buttonOrderArrow);
}

const buttonsSubmit = document.querySelectorAll('.button--submit');
for (let i = 0; i < buttonsSubmit.length; i++) {

    let buttonSubmitText = document.createElement('span');
    buttonSubmitText.textContent = 'отправить';
    buttonsSubmit[i].appendChild(buttonSubmitText);

    let buttonSubmitArrow = document.createElement('img');
    buttonSubmitArrow.src = 'img/dropdown2.svg';
    buttonsSubmit[i].appendChild(buttonSubmitArrow);
}

const sidebarCallback = document.querySelector('.sidebar-callback');
const buttonsCallback = document.querySelectorAll('.button--call');
const callbackCloseBtn = sidebarCallback.querySelector('.button--cancel');
const sidebarFeedback = document.querySelector('.feedback');
const buttonsFeedback = document.querySelectorAll('.button--feedback');
const feedbackCloseBtn = sidebarFeedback.querySelector('.button--cancel');

    buttonsCallback.forEach(buttonCallback => {
    buttonCallback.addEventListener('click', function () {
        if (!sidebar.classList.contains('sidebar--hidden')) {
            sidebar.classList.add('sidebar--hidden');
        }
        sidebarCallback.classList.toggle('sidebar-callback--hidden');
        blurOverlay.classList.remove('blur-overlay--hidden');
    })
})

    buttonsFeedback.forEach(buttonFeedback => {
    buttonFeedback.addEventListener('click', function () {
        if (!sidebar.classList.contains('sidebar--hidden')) {
            sidebar.classList.add('sidebar--hidden');
        }
        sidebarFeedback.classList.toggle('feedback--hidden');
        blurOverlay.classList.remove('blur-overlay--hidden');
    })
})

blurOverlay.addEventListener('click', function () {
    sidebarCallback.classList.add('sidebar-callback--hidden');
    blurOverlay.classList.add('blur-overlay--hidden');
    if (!sidebar.classList.contains('sidebar--hidden')) {
        sidebar.classList.add('sidebar--hidden');
    }
})

callbackCloseBtn.addEventListener('click', function () {
    sidebarCallback.classList.toggle('sidebar-callback--hidden');
    blurOverlay.classList.toggle('blur-overlay--hidden');
})

feedbackCloseBtn.addEventListener('click', function () {
    sidebarFeedback.classList.toggle('feedback--hidden');
    blurOverlay.classList.toggle('blur-overlay--hidden');
})

