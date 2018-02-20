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
<div class="breadcrumbs">
    <div class="container">
        <a href="/">Главная</a>
        <a href="/catalog/">Каталог техники</a>
        <?php $category = getCategory(array("id" => getData("category")))['data']; ?>
        <a href="/catalog/<?= $category['path'] ?>"><?= $category['title'] ?></a>
        <a class="active" href="<?= '/catalog' . getData('href') ?>"><?= getData('title') ?></a>
    </div>
</div>
</header>
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
        <?php
        $cat_items = getCatalogItemFromParameters(getData('id'));

        foreach ($cat_items as $key => $item) {
            if ($item['parameter'] == "category" || $item['parameter'] == "photo" || $item['parameter'] == "price" || $item['parameter'] == "description2")
                unset($cat_items[$key]);
        }
        $cat_items = array_values($cat_items);
        if (count($cat_items) > 0): ?>
            <div class="grid-item characteristics">


                <div class="title">
                    <p>Характеристики</p>
                </div>

                <hr class="yellow">

                <div class="text-characteristics">

                    <?php
                    for ($i = 0; $i < count($cat_items) && $i <= 4; $i++):?>
                        <div class="name-value">
                            <div>
                                <p><?= $cat_items[$i]['title'] ?></p>
                            </div>

                            <div>
                                <p><?= $cat_items[$i]['data'] ?></p>
                            </div>
                        </div>
                        <hr>
                    <?php endfor; ?>

                    <div id="characteristics">
                        <?php
                        for ($i = 5; $i < count($cat_items); $i++):?>
                            <div class="name-value">
                                <div>
                                    <p><?= $cat_items[$i]['title'] ?></p>
                                </div>

                                <div>
                                    <p><?= $cat_items[$i]['data'] ?></p>
                                </div>
                            </div>
                            <hr>
                        <?php endfor; ?>
                    </div>

                </div>
                <?php if (count($cat_items) > 4): ?>
                    <div class="d-flex"><a class="btn btn-yellow">развернуть<img src="/assets/images/down-arrow.svg" alt=""></a></div>
                <?php endif; ?>
            </div>
        <?php endif; ?>

        <div class="grid-item special">
            <div class="img">
                <img src="/assets/images/jpg/service.jpg" alt="">
            </div>
            <div class="d-flex m-auto"><a class="btn btn-yellow" href="/service">Спецсервис</a></div>
        </div>
    </section>

    <section class="grid-section">
        <p></p>
        <?php if (getData("description2")): ?>
            <div class="grid-item advantage">
                <div class="title">
                    <p><?= getData("title") ?></p>
                </div>

                <hr class="yellow">

                <div class="text">
                    <?= getData("description2") ?>
                </div>
                <div class="d-flex"><a class="btn btn-orange btn-price">Узнать цену</a></div>
            </div>
        <?php endif; ?>

        <?php
        $arr = [];
        if (getData('category') != 73) {
            $arr = getCatalogItemsByParameters($parameters = ["category" => 73]); ?>

            <div class="grid-title">
                <p>Навесное оборудование:</p>
            </div>

            <!-- Slider container -->
            <div class="swiper-container">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <?php
                    foreach ($arr as $item):
                        ?>
                        <!-- Slides -->
                        <div class="swiper-slide">
                            <div class="slide">
                                <img src="<?= $item["photo"] ?>" alt="">
                                <div class="link">
                                    <a href="<?= $item["href"] ?>"><?= $item["title"] ?></a>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
            <!-- navigation buttons -->
            <div class="swiper-button">
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        <?php } ?>
    </section>
</main>
<?= getData(false, 'footer', ['']) ?>
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
    modal(".btn-price", ".modal", function (div, lightboxer) {
        inputNumber(div.querySelector('.form-phone'));
        div.querySelector("#send").addEventListener('click', function () {
            let data = new FormData();
            let fname = div.querySelector('.form-name').value;
            let fphone = div.querySelector('.form-phone').value;
            if (fname === "" || fphone === "") {
                modalAlert("Внимание!", "Не все поля заполнены");
                return;
            }
            data.append('name', fname);
            data.append('phone', fphone);
            data.append('catalog_item', <?= getData('id') ?>);
            ajax(data, '/system/plugins/SecArgonia/feedback/price/create', function (response) {
                modalAlert("Ваша заявка принята", "Мы ответим Вам в ближайшее время");
                lightboxer.closeBox();
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