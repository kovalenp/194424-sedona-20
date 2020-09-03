const menu = document.querySelector(".main-nav__list");
const menuOpen = document.querySelector(".toggle__icon--open");
const menuClose = document.querySelector(".toggle__icon--close");

menu.classList.add("js-invisible--mobile");
menuClose.classList.add("js-invisible--mobile");

function toggleVisibility() {
  menu.classList.toggle("js-invisible--mobile");
  menuOpen.classList.toggle("js-invisible--mobile");
  menuClose.classList.toggle("js-invisible--mobile");
}

menuOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  toggleVisibility();
});

menuClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  toggleVisibility();
});
