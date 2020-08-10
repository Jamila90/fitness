'use strict';// Нпм выдает ошибку если делаю кавычки обратные

// Табы
$(document).ready(function () {
  $(`.gym-membership__list li button`).click(function (evt) {
    if (!$(evt.target).hasClass(`gym-membership__item--active`)) {
      let i = $(evt.target).parent().index();
      $(`.gym-membership__list li button.gym-membership__item--active`).removeClass(`gym-membership__item--active`);
      $(`.gym-membership__list-card`).removeClass(`gym-membership__list-card--active`);
      $(evt.target).addClass(`gym-membership__item--active`);
      $(`.gym-membership__list-card`).eq(i).addClass(`gym-membership__list-card--active`);
    }
  });

  // Валидация формы
  $(`#phone`).mask(`+7(999) 999-99-99`);


  // Слайдер
  $(`.trainers__list-wrap`).slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 800,
    draggable: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(`.customer-reviews__wrap`).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    draggable: false,
    infinite: true
  });

  $(`.timetable__current-option`).on(`click`, function () {
    $(`.timetable__custom-option`).toggle();
    $(`.timetable__workout-item`).toggleClass(`timetable__workout-item--hide`);
    $(`.timetable__workout-time`).toggleClass(`timetable__workout-time--hide`);
  });

  // Показ и скрытие списка у кастомного селекта
  $(`.timetable__custom-option`).on(`click`, `li`, function (evt) {
    let choosenValue = $(evt.target).data(`value`);
    let choosenText = $(evt.target).text();
    $(`select`).val(choosenValue).prop(`selected`, true);
    $(`.timetable__current-option`)
        .data(`value`, choosenValue)
        .find(`span`, ``)
        .text(choosenText);
    $(`.timetable__custom-option`).hide();
    $(`.timetable__workout-item`).toggleClass(`timetable__workout-item--hide`);
    $(`.timetable__workout-time`).toggleClass(`timetable__workout-time--hide`);
  });

  // Стрелка вниз/вверх у кастомного селекта
  $(`.timetable__img`).on(`click`, function (evt) {
    $(evt.target)
        .toggleClass(`timetable__img--up`)
        .siblings(`timetable__img--up`)
        .toggleClass(`timetable__workout-item--hide`)
        .toggleClass(`timetable__workout-time--hide`)
        .slideToggle();
  });

  $(`.timetable__workout-item button`).hover(function (evt) {
    $(evt.target).css(`border`, `2px solid`, `rgba(237, 2, 51, 1)`).css(`background-color`, `white`).css(`color`, `rgba(237, 2, 51, 1)`);
    const column = $(evt.target).data(`column`);
    const row = $(evt.target).data(`row`);
    const value = $(evt.target).data(`value`);
    const index = $(evt.target).data(`index`);
    $(`.timetable__workout-item-wrap`)
        .find(`.timetable__workout-list-wrap`)
        .find(`ul>li:eq(` + (column - 1) + `)`)
        .css(`background-color`, `rgba(237, 2, 51, 1)`).css(`color`, `white`).css(`border`, `none`);
    $(`.timetable__workout-time-wrap`)
        .find(`li:eq(` + (row - 1) + `)`)
        .css(`background-color`, `rgba(237, 2, 51, 1)`).css(`color`, `white`).css(`border`, `none`);
    $(`.timetable__select-custom`)
        .find(`.timetable__custom-option`)
        .find(`li ${value}`)
        .css(`background-color`, `rgba(237, 2, 51, 1)`).css(`color`, `white`).css(`border`, `none`);
    $(`.timetable__current-option`)
        .find(`span`, `${index}`)
        .css(`background-color`, `rgba(237, 2, 51, 1)`).css(`color`, `white`).css(`border`, `none`);
  },
  function (evt) {
    $(evt.target).css(`border`, ``).css(`background-color`, ``).css(`color`, ``);
    const column = $(evt.target).data(`column`);
    const row = $(evt.target).data(`row`);
    const value = $(evt.target).data(`value`);
    const index = $(evt.target).data(`index`);
    $(`.timetable__workout-item-wrap`)
        .find(`.timetable__workout-list-wrap`)
        .find(`ul>li:eq(` + (column - 1) + `)`)
        .css(`background-color`, ``).css(`color`, ``).css(`border`, ``);
    $(`.timetable__workout-time-wrap`)
        .find(`li:eq(` + (row - 1) + `)`)
        .css(`background-color`, ``).css(`color`, ``).css(`border`, ``);
    $(`.timetable__select-custom`)
        .find(`.timetable__custom-option`)
        .find(`li ${value}`)
        .css(`background-color`, ``).css(`color`, ``).css(`border`, ``);
    $(`.timetable__current-option`)
        .find(`span`, `${index}`)
        .css(`background-color`, ``).css(`color`, ``).css(`border`, ``);
  });
});
