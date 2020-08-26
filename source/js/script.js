const menu = document.querySelector(".main-nav__list");
const menuOpen = document.querySelector(".main-nav__open");
const menuClose = document.querySelector(".main-nav__close");

menu.classList.add("js-invisible");
menuClose.classList.add("js-invisible");

menuOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("js-invisible");
  menuOpen.classList.toggle("js-invisible");
  menuClose.classList.toggle("js-invisible");
});

menuClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("js-invisible");
  menuOpen.classList.toggle("js-invisible");
  menuClose.classList.toggle("js-invisible");
});
