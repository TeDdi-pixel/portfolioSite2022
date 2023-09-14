
const burgerMenu = document.querySelector(".burger__menu");
const menu = document.querySelector(".header__menu");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger__menu_active");
  menu.classList.toggle("header__menu_active");
});