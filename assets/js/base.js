window.onload = function () {
    function a(a, b) {
        let c = /^(?:file):/, d = new XMLHttpRequest, e = 0;
        d.onreadystatechange = function () {
            4 === d.readyState && (e = d.status), c.test(location.href) && d.responseText && (e = 200), 4 === d.readyState && 200 === e && (a.innerHTML = d.responseText)
        };
        try {
            d.open("GET", b, false);
            d.send();
        } catch (f) {
        }
    }

    document.querySelectorAll("[data-include]").forEach(i = > {
        a(i, i.attributes.getNamedItem("data-include").value
)
    ;
})
    ;

    let body = document.querySelector("body");
    let btn_active = document.querySelector(".breadcrumbs .active"); // Активная хлебная крошка
    let btn_menu_open = document.querySelector(".btn-menu-open"); // Кнопка открытия меню
    let btn_menu_close = document.querySelectorAll(".btn-menu-close"); // Кнопка закрытия меню
    let menu = document.querySelector(".menu>div"); // Меню
    let category_items_headers = document.querySelectorAll(".category-item-title, .category-item-arrow"); // Заголовки и стрелки категорий


    category_items_headers.forEach(function (node) {
        let ul = node.parentElement.querySelector("ul"); // получаем подсписок в категории
        ul.style.maxHeight = ul.clientHeight + "px"; // Устанавливаем максимальную выосту для анимации
        node.addEventListener('click', function () {
            if (!ul.classList.contains("d-none")) {
                let func = function () {
                    ul.classList.add("d-none");
                    ul.removeEventListener("transitionend", func, false);
                };
                ul.classList.add("o-none");
                ul.addEventListener("transitionend", func, false);
                node.parentElement.querySelector(".category-item-arrow").classList.add("closed");
            }
            else {
                ul.classList.remove("d-none");
                setTimeout(function () {
                    ul.classList.remove("o-none");
                }, 20);
                node.parentElement.querySelector(".category-item-arrow").classList.remove("closed");
            }
        });
    });

    menu.classList.add("d-none", "o-none", "loaded"); // Скрываем блок и прикрепляем к левому краю

    btn_active.onclick = function (e) { // нажатие на активную хлебную крошку
        e.preventDefault();
    };

    btn_menu_open.onclick = function (e) { // Открытие блока с поиском и меню
        menu.classList.remove("d-none");
        setTimeout(function () {
            menu.classList.remove("o-none");
        }, 20);
        body.classList.add("overflow-hidden");
    };

    btn_menu_close.forEach(btn = > {
        btn.onclick = function (e) { // Закрытие блока с поиском и меню
        let func = function () {
            menu.classList.add("d-none");
            menu.removeEventListener("transitionend", func, false);
        };
        menu.classList.add("o-none");
        menu.addEventListener("transitionend", func, false);
        body.classList.remove("overflow-hidden");
    };
    });


    // UTILS
    function log(s) { // Упрощенный лог
        console.log(s);
    }

    /*

        setTimeout(function () { // Для теста открытие меню
            menu.classList.remove("d-none");
            setTimeout(function () {
                menu.classList.remove("o-none");
            }, 20);
            body.classList.add("overflow-hidden");
        });
    */

};