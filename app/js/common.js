// input focus
$("input,textarea").focus(function () {
    $(this).parent().addClass("focus");
}).blur(function () {
    if ($(this).val() === '') {
        $(this).parent().removeClass("focus");
    }
});

$('input, textarea').each(function () {
    var $this = $(this),
        val = $this.val();

    if (val.length >= 1) {
        $(this).parent().addClass("focus");
    } else {
        $(this).parent().removeClass("focus");
    }
});

$(".label-select").on('click', function () {
    $(this).addClass("focus");
}).blur(function () {
    if ($(this).find('select').val() === '') {
        $(this).removeClass("focus");
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

$('.slider-range4').slider({
    range: "min",
    min: 0,
    max: 50000,
    value: 11800,
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        //Поле минимального значения
        $(".dec7").val(ui.value + ' ' + '€');
    }
});
$(".dec7").val($(".slider-range4").slider("value") + ' ' + '€');

$('.slider-range5').slider({
    range: "min",
    min: 0,
    max: 112,
    value: 84,
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        //Поле минимального значения
        $(".dec8").val(ui.value + ' ' + 'мес.');
    }
});
$(".dec8").val($(".slider-range5").slider("value") + ' ' + 'мес.');

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

    open_modal.on('click', function (event) {
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

$('.product-gallery').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    asNavFor: '.product-gallery-preview'
});

$('.product-gallery-preview').slick({
    slidesToShow: 5,
    arrows: true,
    asNavFor: '.product-gallery',
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev"><svg width="17" height="54" viewBox="0 0 17 54" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M11.6216 0H16.1855L4.74944 27H0.185547L11.6216 0Z" fill="#DDE0DC"/>\n' +
        '<path d="M4.74944 27H0.185547L11.6217 54H16.1855L4.74944 27Z" fill="#DDE0DC"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="16" height="54" viewBox="0 0 16 54" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M4.5639 0H0L11.4361 27H16L4.5639 0Z" fill="#DDE0DC"/>\n' +
        '<path d="M11.4361 27H16L4.5639 54H0L11.4361 27Z" fill="#DDE0DC"/>\n' +
        '</svg>\n</button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        }
    ]
});

$('.main-slider').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg width="17" height="54" viewBox="0 0 17 54" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M11.6216 0H16.1855L4.74944 27H0.185547L11.6216 0Z"/>\n' +
        '<path d="M4.74944 27H0.185547L11.6217 54H16.1855L4.74944 27Z"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="16" height="54" viewBox="0 0 16 54" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M4.5639 0H0L11.4361 27H16L4.5639 0Z"/>\n' +
        '<path d="M11.4361 27H16L4.5639 54H0L11.4361 27Z"/>\n' +
        '</svg>\n</button>',
});

var $pagingInfo = $('.counter-slide');
var $teamSlider = $('.page-article-slider');

$teamSlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    var i = (currentSlide ? currentSlide : 0) + 1;
    var prefix = i < 10 ? '0' : '';
    var prefixAll = slick.slideCount < 10 ? '0' : '';
    $pagingInfo.html('<span class="current">' + prefix + i + '</span>' + '' + '<span class="total">' + prefixAll + slick.slideCount + '</span>');
});

$('.page-article-slider').slick({
    slidesToShow: 1,
    // fade: true,
    appendArrows: '.page-article-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
});


$('.sidebar-close').on('click', function () {
    $('.sidebar').fadeOut();
    $('.mobile-sorting').fadeOut();
});

$('.btn-filter').on('click', function () {
    $('.sidebar').fadeToggle();
});

$('.btn-sorting').on('click', function () {
   $('.mobile-sorting').fadeToggle();
});

if ($(".page-product-information__head").length) {
    $('.page-product-information__head').clone().appendTo('.title-mobile');
}

$('.characteristics-item h5').on('click', function () {
    $(this).toggleClass('click').siblings('ul').slideToggle();
});



$(window).on('load resize', function() {
    if ($(window).width() < 576) {
        var header = $('header'),
            scrollPrev = 0;

        $(window).scroll(function() {
            var scrolled = $(window).scrollTop();

            if ( scrolled > 100 && scrolled > scrollPrev ) {
                $('.mobile-vehicle-chat-sms').css('bottom', '0');
            } else {
                $('.mobile-vehicle-chat-sms').css('bottom', '-100%');
            }
            scrollPrev = scrolled;
        });

    }
});

$('.mobile-vehicle-chat-sms').on('click', function (e) {
    e.preventDefault();
    $('.overlay').fadeIn();
    $('.welcome-popup').css('bottom', '0');
});

$('.welcome-popup__close').on('click', function (e) {
    e.preventDefault();
    $('.welcome-popup').css('bottom', '-100%');
    $('.overlay').fadeOut();
});

$('.btn-close-cookie').on('click', function (e) {
    e.preventDefault();
    $('.cookie').fadeOut();
});

Fancybox.bind('[data-fancybox="gallery"]', {
    dragToClose: false,

    Toolbar: false,
    closeButton: "top",

    Image: {
        zoom: false,
    }
});

// maps
function init() {

    //Центрирование и выбор масштаба карты
    var myMap = new ymaps.Map('map', {
        center: [56.949461, 24.139861],
        zoom: 12
    });

    // Создание своей метки
    var myPlacemark = new ymaps.Placemark(
        // Координаты метки
        [56.949461, 24.139861], {
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
        .add('smallZoomControl', {right: 5, top: 75})
        // Стандартный набор кнопок
        .add('mapTools')
        //Линейка масштаба
        .add(new ymaps.control.ScaleLine());
}

ymaps.ready(init);


function init2() {

    //Центрирование и выбор масштаба карты
    var myMap = new ymaps.Map('contacts-map', {
        center: [56.949461, 24.139861],
        zoom: 14
    });

    // Создание своей метки
    var myPlacemark = new ymaps.Placemark(
        // Координаты метки
        [56.949461, 24.139861], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: 'img/marker2.png',  // картинка иконки
            iconImageSize: [40, 44],                                      // размеры картинки

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
        .add('smallZoomControl', {right: 5, top: 75})
        // Стандартный набор кнопок
        .add('mapTools')
        //Линейка масштаба
        .add(new ymaps.control.ScaleLine());
}

ymaps.ready(init2);
