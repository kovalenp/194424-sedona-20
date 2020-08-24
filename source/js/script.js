const menu = document.querySelector(".main-nav__list");
const menuToggleButton = document.querySelector(".main-nav__toggle");
const menuClose = document.querySelector(".main-nav__close");

menu.classList.add("js-invisible");

menuToggleButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("js-invisible");
});

menuClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("js-invisible");
});
