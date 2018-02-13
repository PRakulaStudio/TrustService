<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="/assets/css/base.css">
    <link rel="stylesheet" href="/assets/css/swiper.min.css">
    <link rel="stylesheet" href="/assets/css/product.css">
    <link rel="stylesheet" media="only screen  and (min-width: 1024px)" href="/assets/css/desktop.css">
    <title><?= getData('title') ?></title>
</head>
<body>
<?= getData(false, 'header', ['']) ?>

<main>
    <section class="top">
        <h2><?= getData('title') ?></h2>
    </section>
    <section class="grid-section">
        <div class="grid-item">
            <div class="img">
                <img src="<?= getData('photo') ?>" alt="">
            </div>
        </div>

        <div class="d-flex m-auto"><a class="btn btn-orange btn-price" id="openModal">Узнать цену</a></div>
    </section>

    <section class="grid-section row-column">
        <div class="grid-item characteristics">
            <div class="title">
                <p>Характеристики</p>
            </div>

            <hr class="yellow">

            <div class="text-characteristics">

                <?php
                $cat_items = getCatalogItemFromParameters(getData('id'));
                for ($i = 0; $i < count($cat_items) && $i <= 4; $i++):?>
                    <?php if ($cat_items[$i]['parameter'] != "category" && $cat_items[$i]['parameter'] != "photo"): ?>
                        <div class="name-value">
                            <div>
                                <p><?= $cat_items[$i]['title'] ?></p>
                            </div>

                            <div>
                                <p><?= $cat_items[$i]['data'] ?></p>
                            </div>
                        </div>
                        <hr>
                    <?php endif; ?>
                <?php endfor; ?>

                <div id="characteristics">
                    <?php
                    for ($i = 5; $i < count($cat_items); $i++):?>
                        <?php if ($cat_items[$i]['parameter'] != "category" && $cat_items[$i]['parameter'] != "photo"): ?>
                            <div class="name-value">
                                <div>
                                    <p><?= $cat_items[$i]['title'] ?></p>
                                </div>

                                <div>
                                    <p><?= $cat_items[$i]['data'] ?></p>
                                </div>
                            </div>
                            <hr>
                        <?php endif; ?>
                    <?php endfor; ?>
                </div>

            </div>
            <div class="d-flex"><a class="btn btn-yellow">развернуть<img src="/assets/images/down-arrow.svg" alt=""></a>
            </div>
        </div>

        <div class="grid-item special">
            <div class="img">
                <img src="/assets/images/jpg/service.jpg" alt="">
            </div>
            <div class="d-flex m-auto"><a class="btn btn-yellow" href="/service">Спецсервис</a></div>
        </div>
    </section>

    <section class="grid-section">
        <p></p>
        <?php if (false): ?>

            <div class="grid-item advantage">
                <div class="title">
                    <p>Преимущества мини-экскаватора</p>
                </div>

                <hr class="yellow">

                <div class="text">
                    <p>Не следует, однако забывать, что дальнейшее развитие различных форм деятельности влечет за собой
                        процесс внедрения и модернизации системы обучения кадров,
                        соответствует насущным потребностям. Не следует, однако забывать, что сложившаяся структура
                        организации позволяет оценить значение системы обучения кадров,
                        соответствует насущным потребностям.</p>

                    <p>Таким образом постоянный количественный рост и сфера нашей активности представляет собой интересный
                        эксперимент проверки форм развития. Разнообразный и богатый
                        опыт консультация с широким активом требуют определения и уточнения позиций, занимаемых участниками
                        в отношении поставленных задач. Товарищи! дальнейшее
                        развитие различных форм деятельности влечет за собой процесс внедрения и модернизации форм развития.
                        С другой стороны новая модель организационной деятельности
                        в значительной степени обуславливает создание соответствующий условий активизации.</p>
                </div>
                <div class="d-flex"><a class="btn btn-orange btn-price">Узнать цену</a></div>
            </div>

            <div class="grid-title">
                <p>Навесное оборудование:</p>
            </div>

            <!-- Slider container -->
            <div class="swiper-container">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide">
                        <div class="slide">
                            <img src="/assets/images/jpg/product-slider.jpg" alt="">
                            <div class="link">
                                <a href="#">Ковш для мини-экскаватора</a>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="slide">
                            <img src="/assets/images/jpg/product-slider.jpg" alt="">
                            <div class="link">
                                <a href="#">Ковш для мини-экскаватора</a>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="slide">
                            <img src="/assets/images/jpg/product-slider.jpg" alt="">
                            <div class="link">
                                <a href="#">Ковш для мини-экскаватора</a>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="slide">
                            <img src="/assets/images/jpg/product-slider.jpg" alt="">
                            <div class="link">
                                <a href="#">Ковш для мини-экскаватора</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- navigation buttons -->
            <div class="swiper-button">
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        <?php endif; ?>
    </section>
</main>
<footer data-template="footer">
    <div class="container">
        <div class="phone" data-global-container="phone">
            <p><a href="tel:88001234567"><span>8 800 123 45 67</span></a></p>
        </div>
        <div class="copyright">
            <p>© Copyright 2018 - ТрастСервис</p>
        </div>
        <div class="dev-in">
            <p>Разработано в</p>
            <p class="pr-akula">
                <span class="pr-akula-pr">PR</span> Akula
            </p>
        </div>
    </div>
</footer>
<script src="/assets/js/base.js"></script>

<div class="modal">
    <div class="wrapper">
        <h3>Узнать цену</h3>
        <p>
            <input type="text" class="form-name" placeholder="Ваше имя">
        </p>
        <p>
            <input type="text" class="form-phone" placeholder="Ваш телефон">
        </p>
        <p>
            <button id="send" class="btn btn-yellow">Оставить заявку</button>
        </p>
    </div>
</div>
<script>
    modal("#openModal", ".modal", function (div) {
        div.querySelector("#send").addEventListener('click', function () {
            let data = new FormData();
            let fname = div.querySelector('.form-name').value;
            let fphone = div.querySelector('.form-phone').value;
            if (fname === "" || fphone === "") {
                alert("Не все поля заполнены");
                return;
            }
            data.append('name', fname);
            data.append('phone', fphone);
            return fetch('/system/plugins/SecArgonia/feedback/price/create', {method: 'POST', credentials: 'same-origin', body: data})
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
</script>
<script>
    if (!window.pms) window.pms = {};
    if (!pms.plugins) pms.plugins = {};
    if (!pms.plugins.catalog) pms.plugins.catalog = {};
    pms.plugins.catalog.item = {};
    pms.plugins.catalog.item['<?=getData('id')?>'] =<?=getData(false, false, false, true)?>;
    pms.plugins.catalog.currentItem = pms.plugins.catalog.item['<?=getData('id')?>'];
</script>
<script src="/assets/js/base.js"></script>
<script src="/assets/js/swiper.min.js"></script>
<script src="/assets/js/product.js"></script>
</body>
</html>