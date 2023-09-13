document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu-mobile");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});