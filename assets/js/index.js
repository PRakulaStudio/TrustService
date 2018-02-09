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
        //log(pageY);
        //log(sections[0].clientHeight);
        if (pageY >= sections[0].clientHeight) headerClass.classList.remove("atTop");
        else headerClass.classList.add("atTop");
    });
});

