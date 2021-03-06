const reviewForm = document.querySelector(".feedback__form");

const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");

const popupFail = document.querySelector(".popup__failure");
const popupSuccess = document.querySelector(".popup__success");

popupFail.classList.add("js-invisible");
popupSuccess.classList.add("js-invisible");

const closeButton = document.querySelector(".button--close");
const okButton = document.querySelector(".button--ok");

const reviewButton = document.querySelector(".review__button");
reviewButton.disabled = true;

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  return re.test(email);
}

function validatePhone(phone) {
  return /^\+?[0-9]*$/.test(phone);
}

emailInput.addEventListener("change", (e) => {
  emailInput.value == "" ? (reviewButton.disabled = true) : (reviewButton.disabled = false);

  if (!validateEmail(emailInput.value)) {
    emailInput.classList.add("input-invalid");
  } else {
    emailInput.classList.remove("input-invalid");
  }
});

phoneInput.addEventListener("change", (e) => {
  phoneInput.value == "" ? (reviewButton.disabled = true) : (reviewButton.disabled = false);

  if (!validatePhone(phoneInput.value)) {
    phoneInput.classList.add("input-invalid");
  } else {
    phoneInput.classList.remove("input-invalid");
  }
});

reviewForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (emailInput.classList.contains("input-invalid") || phoneInput.classList.contains("input-invalid")) {
    popupFail.classList.remove("js-invisible");
  } else {
    // add sending request to HTML Academy form endpoint
    popupSuccess.classList.remove("js-invisible");
  }
});

okButton.addEventListener("click", (e) => {
  e.preventDefault();
  popupFail.classList.add("js-invisible");
});

closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  popupSuccess.classList.add("js-invisible");
});
