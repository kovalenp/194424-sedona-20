let menu = document.querySelector(".main-nav__menu");
let menuToggleButton = document.querySelector(".main-nav__toggle");

menu.classList.add("js-invisible");

menuToggleButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("js-invisible");
});
