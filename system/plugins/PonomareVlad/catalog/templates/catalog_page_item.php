<?php if (is_callable('getData')): ?>
    <div class="grid-item" data-catalog-item-id="<?= getData('id') ?>">
        <div class="img">
            <!--<img src="<? /*= ($image = getData('photo')) && $image != '' ? $image['300x300'] : '/images/index.php' */ ?>">-->
            <img src="<?= getData('photo') ?>">
            <div class="fon">
                <div class="item-characteristics">
                    <p>Масса: <?= getData('weight') ?> кг.</p>
                    <p>Двигатель: <?= getData('engine') ?></p>
                    <p>Объем ковша: <?= getData('capacity') ?> М3</p>
                    <p>Глубина копания: <?= getData('depth') ?> см</p>
                    <p>Росход топлива: <?= getData('consumption') ?> л/моточас</p>
                    <p>Производство: <?= getData('production') ?></p>
                </div>
                <div class="d-flex"><a class="btn btn-orange" href="<?= getData('href') ?>">Узнать подробнее</a></div>
            </div>
        </div>
        <div class="text">
            <p><?= getData('title') ?></p>
        </div>
    </div>
<?php endif; ?>