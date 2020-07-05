"use strict";

// let itemList = document.querySelectorAll(".gym-membership__list");
// let cardList = document.querySelectorAll(".gym-membership__list-card");
// let itemActive = document.querySelector(".gym-membership__item");
// let cardActive = document.querySelector(".gym-membership__item-card");
const TAB = 9;

// let trainers = document.querySelector(`.trainers__list`);
//
// let swiper = new Swiper(trainers, {
//   slidesPerView: 4,
//   spaceBetween: 30,
//   slidesPerGroup: 4,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

  // noinspection JSUnresolvedFunction
$(document).ready(function() { // Ждём загрузки страницы
    $(`.gym-membership__list li`).click(function() { // Событие нажатия на элемент меню вкладок
      if (!$(this).hasClass(`gym-membership__item--active`)) { // Проверка, не нажали ли мы на уже активный пункт
        let i = $(this).index(); // Получаем порядковый номер нажатого пункта, отстче идет от 0 (0,1,2)
        $(`.gym-membership__list li.gym-membership__item--active`).removeClass(`gym-membership__item--active`); // Удаляем активный класс у прошлого пункта меню
        $(`.gym-membership__list-card .gym-membership__item-card`).removeClass(`gym-membership__item-card--active`); // Скрываем и удаляем активный класс у прошлого контейнера с содержимым
        $(this).addClass(`gym-membership__item--active`); // Добавляем нажатому пункту меню активный класс
        $($(`.gym-membership__list-card`).children(`.gym-membership__item-card`)[i]).addClass(`gym-membership__item-card--active`); // Показываем и добавляем активный класс соответствующему контейнеру
      }
    });
  });

$(document).ready(function () {
  $(`#phone`).mask(`+7(999) 999-99-99`);
});

$(document).ready(function () {
$(`.trainers__btn-next`).click(function () {
  console.log(`click`);
let currentFourImg = $(`.trainers__item--active`);
let nextBlock = currentFourImg.next();

if(nextBlock.length) {
  currentFourImg.removeClass(`trainers__item--active`).css(`z-index`, -1);
  nextBlock.addClass(`trainers__item--active`).css(`z-index`, 1)
}
})

  $(`.trainers__btn-prev`).click(function () {
    console.log(`clicked`);
    let currentFourImg = $(`.trainers__item--active`);
    let prevBlock = currentFourImg.prev();

    if(prevBlock.length) {
      currentFourImg.removeClass(`trainers__item--active`).css(`z-index`, -1);
      prevBlock.addClass(`trainers__item--active`).css(`z-index`, 1);
    }
  })
})
