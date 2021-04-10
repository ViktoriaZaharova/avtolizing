// input focus
$("input,textarea").focus(function () {
    $(this).parent().addClass("focus");
}).blur(function () {
    if ($(this).val() === '') {
        $(this).parent().removeClass("focus");
    }
});

$('.slider-range1').slider({
    range: true,
    min: 0,
    max: 25000,
    values: [1800, 18000],
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        //Поле минимального значения
        $(".dec1").val(ui.values[0] + ' ' + '€');
        //Поле максимального значения
        $(".dec2").val(ui.values[1] + ' ' + '€');
    }
});


$(".dec1").val($(".slider-range1").slider("values", 0) + ' ' + '€');
$(".dec2").val($(".slider-range1").slider("values", 1) + ' ' + '€');

$('.slider-range2').slider({
    range: true,
    min: 2000,
    max: 2021,
    values: [0, 2018],
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        //Поле минимального значения
        $(".dec3").val(ui.values[0]);
        //Поле максимального значения
        $(".dec4").val(ui.values[1]);
    }
});


$(".dec3").val($(".slider-range2").slider("values", 0));
$(".dec4").val($(".slider-range2").slider("values", 1));

$('.slider-range3').slider({
    range: true,
    min: 0,
    max: 25000,
    values: [1800, 18000],
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        //Поле минимального значения
        $(".dec5").val(ui.values[0]);
        //Поле максимального значения
        $(".dec6").val(ui.values[1]);
    }
});


$(".dec5").val($(".slider-range3").slider("values", 0));
$(".dec6").val($(".slider-range3").slider("values", 1));

// accordeon
function accordeon() {
    var panel = $('.panel-heading');

    if (panel.hasClass('in')) {
        $('.in').find('.block_hover').slideDown();
    }

    $('.panel-heading .block_title').on('click', function () {
        $(this).parent().toggleClass('in').find('.block_hover').slideToggle();
    });
}

accordeon();

// modal
$(function () {
    var overlay = $('.overlay'),
        open_modal = $('.open_modal'),
        close = $('.modal__close, .overlay'),
        modal = $('.modal__div');

    open_modal.on('click',function (event) {
        event.preventDefault();

        modal.css('display', 'none').animate({
            opacity: 0,
            top: '45%'
        }, 200);

        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.on('click', function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

// mobile menu
$('.btn-burger').on('click', function () {
   $(this).toggleClass('clicked');
   $('.overlay-mobile').fadeToggle();
   $('.mobile-menu').fadeToggle();
});

$('.btn-search').on('click', function () {
    $(this).toggleClass('open');
    $('.overlay-mobile').fadeToggle();
    $('.mobile-filter').fadeToggle();
});

$('.brands-slider').slick({
    slidesToShow: 2,
    arrows: false,
    dots: true,
    variableWidth: true
});

$('.sidebar-close').on('click', function () {
   $('.sidebar').fadeOut();
});

$('.btn-filter').on('click', function () {
    $('.sidebar').fadeToggle();
});

// maps
function init () {

    //Центрирование и выбор масштаба карты
    var myMap = new ymaps.Map('map', {
        center: [56.949461, 24.139861],
        zoom: 12
    });

    // Создание своей метки
    var myPlacemark = new ymaps.Placemark(
        // Координаты метки
        [56.949461, 24.139861] , {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: 'img/marker.svg',  // картинка иконки
            iconImageSize: [31, 47],                                      // размеры картинки

        });

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark);

    //Элементы управления
    myMap.controls
    // Кнопка изменения масштаба
        .add('zoomControl')
        // Список типов карты
        .add('typeSelector')
        // Кнопка изменения масштаба - справа
        .add('smallZoomControl', { right: 5, top: 75 })
        // Стандартный набор кнопок
        .add('mapTools')
        //Линейка масштаба
        .add(new ymaps.control.ScaleLine());
}

ymaps.ready(init);

