$(document).ready(function () {

    $('.connect_btn').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });
    $('.clinet_btn').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });


    var $StatusR = 0;

    FullPgaPluginStart();

    $(window).on("resize", function () {
        FullPgaPluginStart();
    });

    function FullPgaPluginStart() {
        if (window.innerWidth <= 992) {
            if ($('html').hasClass('fp-enabled')) {
                $.fn.fullpage.destroy('all');
                $StatusR = 0;
            }

            $(".about_company").attr("href", "#section3");
            $(".to_our_proj_btn").attr("href", "#section6");
            //$('header').removeClass('fixed');
        }
        else {
            if (!$StatusR) {
                $StatusR = 1;
                $('#fullpage').fullpage({
                    navigation: true,
                    navigationPosition: 'right',
                    scrollBar: true,
                    afterLoad: function (anchorLink, index) {
                        var loadedSection = $(this);
                        //using index
                        if (index == 1) {
                            //$('header').removeClass('fixed');
                        }
                        else {
                            //$('header').addClass('fixed');
                        }

                        if (index == 2 || index == 4 || index == 6 || index == 7) {
                            $('#fp-nav ul li').addClass('grey');
                        }
                        else {
                            $('#fp-nav ul li').removeClass('grey');
                        }

                    }
                });

                $(".about_company").attr("href", "#slide3");
                $(".to_our_proj_btn").attr("href", "#slide6");
            }
        }
    }

    $('.menu_btn').click(function (e) {
        e.preventDefault();
        //$('header').toggleClass('active');
        $('.head_info').toggleClass('active');
        $('.body_loyer').toggleClass('active');
    });
    $(".menu_btn").on("click", function (e) {
        e.stopPropagation();
    });
    $(".body_loyer").on("click", function (e) {
        e.preventDefault();
        //$('header').toggleClass('active');
        $('.head_info').toggleClass('active');
        $('.body_loyer').toggleClass('active');
    });

    (function ($) {
        $(".menu-column > ul").mCustomScrollbar({
            axis: "y",
            theme: "dark-3"
        });
    })(jQuery);

    $('#section5 a').click(function (e) {
        e.preventDefault();
    });

    $('.accardion h4').click(function () {
        $(this).toggleClass('active');
        $(this).parent('.accardion').find('.accardion_block').stop().slideToggle();
    });

    $('.video_play').on('click', function (e) {
        e.preventDefault();
        $("#video_about")[0].src += "&autoplay=1";
        $(this).hide();
    });

    /*Phone input placehoder mask*/
    jQuery(function ($) {
        $('input[name="phone"]').mask("+7 (999) 999-99-99");
    });
    /*Phone input placeholder mask End*/
    $("form input").click(function () {
        $(this).parent("form").addClass("before");
    });

    $('.to_our_proj_btn, .about_company').bind("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });


    if ($(window).width() <= 767) {
        $('.sec2_slide').addClass('owl-carousel');
        $('.sec2_slide').addClass('owl-theme');
        $('.sec2_slide').removeClass('clearfix');
        $('.sec2_slide').owlCarousel({
            loop: false,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 2,
                }
            }
        });
        $('.sec4_slide').addClass('owl-carousel');
        $('.sec4_slide').addClass('owl-theme');
        $('.sec4_slide').removeClass('clearfix');
        $('.sec4_slide').owlCarousel({
            loop: true,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                },
                580: {
                    items: 2,
                    margin: 10,
                }
            }
        });
        $('.sec5_slide').addClass('owl-carousel');
        $('.sec5_slide').addClass('owl-theme');
        $('.sec5_slide').removeClass('clearfix');
        $('.sec5_slide').owlCarousel({
            loop: true,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                },
                620: {
                    items: 2,
                    margin: 10,
                }
            }
        });
    }

    $(window).resize(function () {
        if ($(window).width() <= 767) {
            $('.sec2_slide').addClass('owl-carousel');
            $('.sec2_slide').addClass('owl-theme');
            $('.sec2_slide').removeClass('clearfix');
            $('.sec2_slide').owlCarousel({
                loop: false,
                nav: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    480: {
                        items: 2,
                    }
                }
            });
            $('.sec4_slide').addClass('owl-carousel');
            $('.sec4_slide').addClass('owl-theme');
            $('.sec4_slide').removeClass('clearfix');
            $('.sec4_slide').owlCarousel({
                loop: true,
                nav: false,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0,
                    },
                    580: {
                        items: 2,
                        margin: 10,
                    }
                }
            });
            $('.sec5_slide').addClass('owl-carousel');
            $('.sec5_slide').addClass('owl-theme');
            $('.sec5_slide').removeClass('clearfix');
            $('.sec5_slide').owlCarousel({
                loop: true,
                nav: true,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0,
                    },
                    620: {
                        items: 2,
                        margin: 10,
                    }
                }
            });
        }
    });

    $("#client_popup form").submit(function (ev) {
        ev.preventDefault();
        let div = this;
        let data = new FormData();
        let fname = div.querySelector('.form-name').value;
        let fphone = div.querySelector('.form-phone').value;
        if (fname === "" || fphone === "") {
            alert("Не все поля заполнены");
            return;
        }
        data.append('name', fname);
        data.append('phone', fphone);

        return fetch('/system/plugins/SecArgonia/feedback/client/create', {method: 'POST', credentials: 'same-origin', body: data})
            .then(function (response) {
                let responseData = false;
                try {
                    responseData = response.json();
                }
                catch (e) {
                    responseData = {status: false, statusText: "Произошла ошибка при соединении"};
                    response.text().then(console.debug);
                }

                return responseData;
            })
            .then(function (response) {
                if (response.status) {
                    alert("Ваша заявка принята, мы ответим Вам в ближайшее время");
                }
            });
    });
    $("#send_message_popup form").submit(function (ev) {
        ev.preventDefault();
        let div = this;
        let data = new FormData();
        let fname = div.querySelector('.form-name').value;
        let fphone = div.querySelector('.form-phone').value;
        /*let fmail = div.querySelector('.form-mail').value;
        let fmessage = div.querySelector('.form-message').value;*/
        if (fname === "" || fphone === "" /*|| fmail === "" || fmessage === ""*/) {
            alert("Не все поля заполнены");
            return;
        }
        data.append('name', fname);
        data.append('phone', fphone);
        /*data.append('email', fmail);
        data.append('message', fmessage);*/
        return fetch('/system/plugins/SecArgonia/feedback/message/create', {method: 'POST', credentials: 'same-origin', body: data})
            .then(function (response) {
                let responseData = false;
                try {
                    responseData = response.json();
                }
                catch (e) {
                    responseData = {status: false, statusText: "Произошла ошибка при соединении"};
                    response.text().then(console.debug);
                }

                return responseData;
            })
            .then(function (response) {
                if (response.status) {
                    alert("Ваша заявка принята, мы ответим Вам в ближайшее время");
                }
            });
    });
});


function initMap() {
    var uluru = {
        lat: 42.848588,
        lng: 74.618520
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}