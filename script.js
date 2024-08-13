const form = document.querySelector("form");
const emailInput = document.querySelector("#input__email");
const emailInputError = document.querySelector("#input__email--error");
const countryInput = document.querySelector("#input__country");
const countryInputError = document.querySelector("#input__country--error");
const zipcodeInput = document.querySelector("#input__zipcode");
const zipcodeInputError = document.querySelector("#input__zipcode--error");
const passwordInput = document.querySelector("#input__password");
const passwordInputError = document.querySelector("#input__password--error");
const passwordConfirmInput = document.querySelector("#input__password-confirm");
const passwordConfirmInputError = document.querySelector(
  "#input__password-confirm--error"
);
const submitBtn = document.querySelector("#submit-btn");

// Event Listeners

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!emailInput.validity.valid) {
    showError();
  }
});

emailInput.addEventListener("input", () => {
  if (emailInput.validity.valid) {
    emailInputError.textContent = "";
    emailInputError.className = "error";
  } else {
    showError();
  }
});

// Functions

const showError = () => {
  if (emailInput.validity.valueMissing) {
    emailInputError.textContent = "Email pls.";
  } else if (emailInput.validity.typeMismatch) {
    emailInputError.textContent = "This is not Email. Make it Email pls.";
  }

  emailInputError.className = "error active";
};
