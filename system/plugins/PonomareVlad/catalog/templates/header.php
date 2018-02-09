<header data-template="header">
    <div class="header">
        <div class="container">
            <div class="phone" data-global-container="phone">
                <p><a href="tel:88001234567"><span>8 800 123 45 67</span></a></p>
            </div>
            <div class="logo" data-global-container="logo">
                <a href="/"></a>
                <span data-global-container="site-slogan">Спецтехника в Кыргыстане - Поставка и сервис</span>
            </div>
            <div class="menu">
                <button class="btn btn-menu-open"></button>
                <div>
                    <div class="menu-column-container">
                        <div class="menu-column">
                            <div class="menu-column-phone" data-global-container="phone">
                                <p><a href="tel:88001234567"><span>8 800 123 45 67</span></a></p>
                                <button class="btn btn-menu-close"></button>
                            </div>
                            <div class="search">
                                <div>
                                    <input type="search" placeholder="поиск по сайту">
                                    <input type="submit" value="">
                                    <button class="btn btn-menu-close"></button>
                                </div>
                            </div>
                            <ul data-global-container="header-menu">
                                <li><span class="category-item-title">Каталог</span></li>
                                <li><span class="category-item-title">Сервис</span><span
                                            class="category-item-arrow"></span>
                                    <ul>
                                        <li><a href="/service/">Обслуживание</a></li>
                                        <li><a href="/service/trade-in">Trade-In</a></li>
                                        <li><a href="/service/spareparts">Запчасти</a></li>
                                    </ul>
                                </li>
                                <li><span class="category-item-title">РВД</span><span
                                            class="category-item-arrow"></span>
                                    <ul>
                                        <li><a href="/rvd/cooperation">Условия сотрудничества</a></li>
                                        <li><a href="/rvd/">Каталог</a></li>
                                    </ul>
                                </li>
                                <li><span class="category-item-title">Наши проекты</span><span
                                            class="category-item-arrow"></span>
                                    <ul>
                                        <li><a href="/projects/tegene">Тегене</a></li>
                                        <li><a href="/projects/">Наши проекты</a></li>
                                    </ul>
                                </li>
                                <li><span class="category-item-title">Условия покупки</span><span
                                            class="category-item-arrow"></span>
                                    <ul>
                                        <li><a href="/buying/leasing">Лизинг</a></li>
                                        <li><a href="/buying/installment-plan">Рассрочка</a></li>
                                    </ul>
                                </li>
                                <li><span class="category-item-title">О компании</span><span
                                            class="category-item-arrow"></span>
                                    <ul>
                                        <li><a href="/company/history">История</a></li>
                                        <li><a href="/company/command">Команда</a></li>
                                        <li><a href="/company/reviews">Отзывы</a></li>
                                        <li><a href="/company/certificates">Сертификаты</a></li>
                                        <li><a href="/company/achievements">Достижения</a></li>
                                    </ul>
                                </li>
                                <li><a href="/">Главная</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="breadcrumbs">
        <div class="container">
            <a href="/">Главная</a>
            <?= getData('id') == 0 ? '<a href="/catalog/" class="active">Каталог техники</a>' : '<a href="/catalog/">Каталог техники</a>' ?>
            <?= getData('id') == 0 ? '' : (getData(false, 'breadcrumb-item', getParentCategories(getData('id'))) . (' → ' . getData('title'))); ?>
        </div>
    </div>
</header>
<?= getData('id') ?>