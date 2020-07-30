const menu = document.querySelector(".main-nav__list");
const menuToggleButton = document.querySelector(".main-nav__toggle");

menu.classList.add("js-invisible");

menuToggleButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Clicked");
  menu.classList.toggle("js-invisible");
});
