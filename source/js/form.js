const reviewForm = document.querySelector(".feedback__form");

const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  return re.test(email);
}

function validatePhone(phone) {
  return /^\+?[0-9]*$/.test(phone);
}

emailInput.addEventListener("change", () => {
  if (!validateEmail(emailInput.value)) {
    emailInput.classList.add("input-invalid");
  } else {
    emailInput.classList.remove("input-invalid");
  }
});

phoneInput.addEventListener("change", () => {
  if (!validatePhone(phoneInput.value)) {
    phoneInput.classList.add("input-invalid");
  } else {
    phoneInput.classList.remove("input-invalid");
  }
});

reviewForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (emailInput.classList.contains("input-invalid") || phoneInput.classList.contains("input-invalid")) {
    console.log("Invalid");
  } else {
    console.log("All OK");
  }
});
