"use strict";

// Табы
$(document).ready(function () {
  $(`.gym-membership__list li button`).click(function (evt) {
    if (!$(evt.target).hasClass(`gym-membership__item--active`)) {
      let i = $(evt.target).parent().index();
      $(`.gym-membership__list li button.gym-membership__item--active`).removeClass(`gym-membership__item--active`);
      $(`.gym-membership__list-card .gym-membership__item-card`).removeClass(`gym-membership__item-card--active`);
      $(evt.target).addClass(`gym-membership__item--active`);
      console.log($(`.gym-membership__list-card`).eq(i).addClass(`gym-membership__item-card--active`))
      $(`.gym-membership__item-card`).eq(i).addClass(`gym-membership__item-card--active`);
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

  $(`.customer-reviews__wrap`).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    draggable: false,
    infinite: true
    // responsive: [
    //   {
    //     breakpoint: 1199,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2
    //     }
    //   },
    //   {
    //     breakpoint: 767,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  });


  $(`.timetable__current-option`).on(`click`, function () {
    $(`.timetable__custom-option`).toggle();
    $(`.timetable__workout-item`).hide().style(`visibility: hidden`);
    $(`.timetable__workout-item--time`).show(`opacity: 0.3`);
  });

// Показ и скрытие списка у кастомного селекта
  $(`.timetable__custom-option`).on(`click`, `li`, function (evt) {
    let choosenValue = $(evt.target).data(`value`);
    let choosenText = $(evt.target).text();
    $(`select`).val(choosenValue).prop(`selected`, true);
    $(`.timetable__current-option`)
      .data(`value`, choosenValue)
      .find(`span`)
      .text(choosenText);
    $(`.timetable__custom-option`).hide();
    $(`.timetable__workout-item`).show();
  });

// Стрелка вниз/вверх у кастомного селекта
  $(`.timetable__img`).on(`click`, function (evt) {
    $(evt.target)
      .toggleClass(`timetable__img--up`)
      .siblings(`timetable__img--up`)
      .slideToggle();
  });


  $(`.timetable__workout-item`).hover(function (evt) {
      $(evt.target).css(`border`, `2px solid`, `rgba(237, 2, 51, 1)`).css(`background-color`, `white`).css(`color`, `rgba(237, 2, 51, 1)`)
        .find(`timetable__item`)
        .css(`background-color`, `rgba(237, 2, 51, 1)`);
    },
    function (evt) {
      $(evt.target).css(`border`, `none`).css(`background-color`, `rgba(248, 249, 252, 1)`).css(`color`, `rgba(28, 51, 116, 1)`);
    });
});
