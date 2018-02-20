<?php if (is_callable('getData')): ?>
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="/assets/css/base.css">
        <link rel="stylesheet" href="/assets/css/swiper.min.css">
        <link rel="stylesheet" href="/assets/css/catalog.css">
        <link rel="stylesheet" media="screen and (min-width: 1024px)" href="/assets/css/desktop.css">
        <title><?= ($categoryTitle = getData('title')) ? $categoryTitle : 'Каталог техники'; ?></title>
    </head>
    <body>

    <?= getData(false, 'header', ['']) ?>
    <div class="breadcrumbs">
        <div class="container">
            <a href="/">Главная</a>
            <?= getData('id') == 0 ? '<a href="/catalog/" class="active">Каталог техники</a>' : '<a href="/catalog/">Каталог техники</a><a class="active" href="/catalog' . getData('href') . '">' . getData('title') . '</a>' ?>
        </div>
    </div>
    </header>
    <main>
        <section class="top">
            <h2><?= ($categoryTitle = getData('title')) ? $categoryTitle : 'Каталог техники'; ?></h2>
        </section>
        <section class="grid-section">
            <?php $childCategories = getCatalogCategories()['data']; ?>

            <?php if (count($childCategories) > 0): ?>
                <div class="d-flex">
                    <?= getData(false, [
                        'id' => 'category_link',
                        'source' => '<a class="btn btn-filter btn-orange"  href="<?=getData(\'href\');?>"><?=getData(\'title\');?></a>'
                    ], $childCategories); ?>
                </div>
            <?php endif; ?>

            <div class="catalog-block">
                <?= getData('items', 'catalog_page_item'); ?>
                <?php if (getData('count') == 0): ?>
                    <h1 style="text-align:center; margin-bottom: 20px; width: 100%;">Нет товаров в категории</h1>
                <?php endif; ?>
                <!--<div class="d-flex m-auto"><a class="reload-btn"><img src="/assets/images/reload.svg" alt=""></a></div>-->

                <?php $desc = getData('description'); ?>
                <?php if ($desc != ""): ?>
            </div>
            <div class="grid-item grid-item-text">
                <div class="text">
                    <?= $desc; ?>
                </div>
            </div>

            <!--<div class="d-flex m-auto"><a href="#" class="btn btn-orange"><img src="/assets/images/download.png" alt="">Скачать
                    презентацию в PDF</a></div>-->
        <?php endif; ?>

        </section>
    </main>
    <?= getData(false, 'footer', ['']) ?>

    <script>
        if (!window.pms) window.pms = {};
        if (!pms.plugins) pms.plugins = {};
        if (!pms.plugins.catalog) pms.plugins.catalog = {};
        pms.plugins.catalog.category = {};
        pms.plugins.catalog.category['<?=getData('id')?>'] =<?=getData(false, false, false, true)?>;
        pms.plugins.catalog.currentCategory = pms.plugins.catalog.category['<?=getData('id')?>'];
        // console.debug('Смотри Игорь, я переменная',
        //     'pms.plugins.catalog.currentCategory',
        //     pms.plugins.catalog.currentCategory,
        //     'Почему же ты не видишь меня в своих скриптах? :\'(');
    </script>
    <script src="/assets/js/base.js"></script>
    <script src="/assets/js/swiper.min.js"></script>
    <script src="/assets/js/catalog.js"></script>
    </body>
    </html>
<?php endif; ?>