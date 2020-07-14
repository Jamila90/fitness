"use strict";

// const TAB = 9;

// Табы
$(document).ready(function () {
  $(`.gym-membership__list li`).click(function () {
    if (!$(this).hasClass(`gym-membership__item--active`)) {
      let i = $(this).index();
      $(`.gym-membership__list li.gym-membership__item--active`).removeClass(`gym-membership__item--active`);
      $(`.gym-membership__list-card .gym-membership__item-card`).removeClass(`gym-membership__item-card--active`);
      $(this).addClass(`gym-membership__item--active`);
      $($(`.gym-membership__list-card`).children(`.gym-membership__item-card`)[i]).addClass(`gym-membership__item-card--active`);
    }
  });
});


$(document).ready(function () {
  $(`#phone`).mask(`+7(999) 999-99-99`);
});

// Слайдер
$(document).ready(function () {
  $(`.trainers__list-wrap`).slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 800,
    infinite: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});


$(`.timetable__current-option`).on(`click`, function() {
  $(`.timetable__custom-option`).toggle()
  $(`.timetable__workout-item`).hide().style(`visibility: hidden`);
  $(`.timetable__workout-item--time`).show(`opacity: 0.3`);
});

// Показ и скрытие списка у кастомного селекта
$(`.timetable__custom-option`).on(`click`, `li`, function() {
  let choosenValue = $(this).data(`value`),
    choosenText = $(this).text();
  $(`select`).val(choosenValue).prop(`selected`, true);
  $(`.timetable__current-option`)
    .data(`value`, choosenValue)
    .find(`span`)
    .text(choosenText);
  $(`.timetable__custom-option`).hide();
  $(`.timetable__workout-item`).show();
});

// Стрелка вниз/вверх у кастомного селекта
$(`.timetable__img`).on('click', function(){
  $(this)
    .toggleClass(`timetable__img--up`)
    .siblings(`timetable__img--up`)
    .slideToggle();
});

$(`.timetable__workout-item`).hover(function(){
    $(this).css(`border`, `2px solid`, `rgba(237, 2, 51, 1)`).css(`background-color`, `white`).css(`color`, `rgba(237, 2, 51, 1)`)
      .find(`timetable__item`)
      .css(`background-color`, `rgba(237, 2, 51, 1)`);
  },
  function(){
    $(this).css(`border`, `none`).css(`background-color`, `rgba(248, 249, 252, 1)`).css(`color`, `rgba(28, 51, 116, 1)`);
  });
