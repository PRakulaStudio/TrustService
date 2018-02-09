let div = body.appendChild(document.createElement("div"));
div.classList.add("lightbox", "o-none", "d-none");
div.innerHTML = "<img src=\"#\"/>";

let lightbox = document.querySelector("div.lightbox");
let lightbox_img = lightbox.querySelector("img");
let images = document.querySelectorAll("img.lightbox");
images.forEach(i = > {
    i.parentElement.querySelector("div").addEventListener("click", function () {
    lightbox_img.attributes.getNamedItem("src").value = i.attributes.getNamedItem("data-src").value;
    lightbox.classList.remove("d-none");
    setTimeout(function () {
        lightbox.classList.remove("o-none");
    }, 20);
    body.classList.add("overflow-hidden");
});
})
;
lightbox.addEventListener("click", function () {
    let func = function () {
        lightbox.classList.add("d-none");
        lightbox.removeEventListener("transitionend", func, false);
    };
    lightbox.classList.add("o-none");
    lightbox.addEventListener("transitionend", func, false);
    body.classList.remove("overflow-hidden");
});