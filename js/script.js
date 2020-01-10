let header = document.querySelector("header");
header.style.position = "fixed";
window.addEventListener("load", function () {
    let headerClass = header.querySelector(".header");
    let sections = document.querySelectorAll("#fullpage section");
    headerClass.classList.add("atTop");
    setTimeout(function () {
        headerClass.style.transition = "all .3s linear";
    }, 100);
    window.addEventListener("scroll", function () {
        let pageY = window.pageYOffset || document.documentElement.scrollTop;
        if (pageY >= sections[0].clientHeight) headerClass.classList.remove("atTop");
        else headerClass.classList.add("atTop");
    });
});

$(document).ready(function () {
    var $StatusR = 0;

    FullPgaPluginStart();

    $(window).on("resize", function () {
        FullPgaPluginStart();
    });

    function FullPgaPluginStart() {
        $(".about_company").attr("href", "#section3");
        $(".to_our_proj_btn").attr("href", "#section6");
        if (window.innerWidth <= 992) {
            if ($('html').hasClass('fp-enabled')) {
                $.fn.fullpage.destroy('all');
                $StatusR = 0;
            }


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


                    }
                });
            }
        }
    }
    
    $(".about_company").attr("href", "#section3");
    $(".to_our_proj_btn").attr("href", "#section6");
    modal('.connect_btn', ".modal-send-message", function (div, lightboxer) {
        inputNumber(div.querySelector('.form-phone'));
        div.querySelector(".btn-send").addEventListener('click', function () {
            let data = new FormData();
            let fname = div.querySelector('.form-name').value;
            let fphone = div.querySelector('.form-phone').value;

            if (fname === "" || fphone === "") {
                modalAlert("Внимание!", "Не все поля заполнены");
                return;
            }
            data.append('name', fname);
            data.append('phone', fphone);

            ajax(data, '/system/plugins/SecArgonia/feedback/client/create', function (response) {
                modalAlert("Ваша заявка принята", "Мы ответим Вам в ближайшее время");
                lightboxer.closeBox();
            });
        });
    });

    modal('.clinet_btn', ".modal-be-client", function (div, lightboxer) {
        inputNumber(div.querySelector('.form-phone'));
        div.querySelector(".btn-send").addEventListener('click', function () {
            let data = new FormData();
            let fname = div.querySelector('.form-name').value;
            let fphone = div.querySelector('.form-phone').value;

            if (fname === "" || fphone === "") {
                modalAlert("Внимание!", "Не все поля заполнены");
                return;
            }
            data.append('name', fname);
            data.append('phone', fphone);
            ajax(data, '/system/plugins/SecArgonia/feedback/message/create', function (response) {
                modalAlert("Ваша заявка принята", "Мы ответим Вам в ближайшее время");
                lightboxer.closeBox();
            });
        });
    });

    $('#section5 a').click(function (e) {
        e.preventDefault();
    });

    $('.video_play').on('click', function (e) {
        e.preventDefault();
        $("#video_about")[0].src += "&autoplay=1";
        $(this).hide();
    });

    $('.to_our_proj_btn').on("click", function (e) {
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor)[0].offsetTop
        }, 1000);
    });
    $('.about_company').on("click", function (e) {
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor)[0].offsetTop
        }, 500);
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

    //initMap();

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
