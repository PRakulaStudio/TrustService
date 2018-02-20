<?php if (is_callable('getData')): ?>
    <div class="grid-item" data-catalog-item-id="<?= getData('id') ?>">
        <div class="img">
            <!--<img src="<?php /*= ($image = getData('photo')) && $image != '' ? $image['300x300'] : '/images/index.php' */ ?>">-->
            <img src="<?= getData('photo') ?>">
            <div class="fon">
                <div class="item-characteristics">
                    <?php
                    $cat_items = getCatalogItemFromParameters(getData('id'));
                    foreach ($cat_items as $key => $item) {
                        if ($item['parameter'] == "category" || $item['parameter'] == "photo" || $item['parameter'] == "price" || $item['parameter'] == "description2")
                            unset($cat_items[$key]);
                    }
                    $cat_items = array_values($cat_items);
                    for ($i = 0; $i < count($cat_items) && $i <= 5; $i++):?>
                        <p><?= $cat_items[$i]['title'] ?>: <?= $cat_items[$i]['data'] ?></p>
                    <?php endfor;
                    if (count($cat_items) == 0) echo "<div class='description'>" . getData("description2") . "</div>"; ?>
                </div>
                <div class="d-flex" style="margin: auto auto 0;"><a class="btn btn-orange" href="<?= getData('href') ?>">Узнать подробнее</a></div>
            </div>
        </div>
        <div class="text">
            <p><?= getData('title') ?></p>
        </div>
    </div>
<?php

    /*echo "<pre>";
    print_r($cat_items);
    echo "</pre>";*/
endif; ?>