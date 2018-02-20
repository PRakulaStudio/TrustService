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
        mainClass: 'my-mfp-zoom-in',
        focus: false
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
        mainClass: 'my-mfp-zoom-in',
        focus: false
    });


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
    /*jQuery(function ($) {
        $('input[name="phone"]').mask("+___________");
    });
    /!*Phone input placeholder mask End*!/
    $("form input").click(function () {
        $(this).parent("form").addClass("before");
    });*/
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

    inputNumber(document.querySelector('#send_message_popup .form-phone'));
    inputNumber(document.querySelector('#client_popup .form-phone'));

    $("#client_popup form").submit(function (ev) {
        ev.preventDefault();
        let div = this;
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
            modalAlert("Ваша заявка принята", "мы ответим Вам в ближайшее время");
            div.querySelector('.form-name').value = '';
            div.querySelector('.form-phone').value = '';
            $.magnificPopup.close();
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
            modalAlert("Внимание!", "Не все поля заполнены");
            return;
        }
        data.append('name', fname);
        data.append('phone', fphone);
        /*data.append('email', fmail);
        data.append('message', fmessage);*/
        ajax(data, '/system/plugins/SecArgonia/feedback/message/create', function (response) {
            modalAlert("Ваша заявка принята", "мы ответим Вам в ближайшее время");
            div.querySelector('.form-name').value = '';
            div.querySelector('.form-phone').value = '';
            $.magnificPopup.close();
        });
    });
})
;

/*$(document).on('click', '.class', function (e) {
    log(e);

});*/