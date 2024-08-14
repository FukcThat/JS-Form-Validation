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

// Form Submit EventListener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!emailInput.validity.valid || !zipcodeInput.validity.valid) {
    // or country, zipcode, password, confirm password are NOT valid
    showEmailError();
    showZipcodeError();
  }
});

// E-Mail Input EventListener
emailInput.addEventListener("input", () => {
  if (emailInput.validity.valid) {
    emailInputError.textContent = "";
    emailInputError.className = "error";
  } else {
    showEmailError();
  }
});

// Country input eventListener

// ZIP-Code EventListener
zipcodeInput.addEventListener("input", () => {
  if (zipcodeInput.validity.valid) {
    zipcodeInputError.textContent = "";
    zipcodeInputError.className = "error";
  } else {
    showZipcodeError();
  }
});

// Password EventListener
// Confirm Password Eventlistener

// Functions

const showEmailError = () => {
  if (emailInput.validity.valueMissing) {
    emailInputError.textContent = "Email pls.";
  } else if (emailInput.validity.typeMismatch) {
    emailInputError.textContent = "This is not Email. Make it Email pls.";
  }

  emailInputError.className = "error active";
};

// Zipcode Error

const showZipcodeError = () => {
  if (zipcodeInput.validity.valueMissing) {
    zipcodeInputError.textContent = "Zip Code too, pls.";
  } else if (zipcodeInput.validity.typeMismatch) {
    zipcodeInputError.textContent = "Numbers only, ok?";
  }
  zipcodeInputError.className = "error active";
};
