const menu = document.querySelector(".main-nav__list");
const menuOpen = document.querySelector(".toggle__icon--open");
const menuClose = document.querySelector(".toggle__icon--close");

menu.classList.add("js-invisible");
menuClose.classList.add("js-invisible");

function toggleVisibility() {
  menu.classList.toggle("js-invisible");
  menuOpen.classList.toggle("js-invisible");
  menuClose.classList.toggle("js-invisible");
}

menuOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  toggleVisibility();
});

menuClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  toggleVisibility();
});
