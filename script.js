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
console.log(passwordConfirmInput);

// Event Listeners

// Form Submit EventListener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    !emailInput.validity.valid ||
    !zipcodeInput.validity.valid ||
    !passwordInput.validity.valid ||
    !passwordConfirmInput.validity.valid
  ) {
    // or country are NOT valid
    showEmailError();
    showZipcodeError();
    showPasswordError();
    showConfirmPasswordError();
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

// Password Input EventListener
passwordInput.addEventListener("input", () => {
  if (passwordInput.validity.valid) {
    passwordInputError.textContent = "";
    passwordInputError.className = "error";
  } else {
    showPasswordError();
  }
});

// Confirm Password Input Eventlistener
passwordConfirmInput.addEventListener("input", () => {
  if (passwordConfirmInput.validity.valid) {
    passwordConfirmInputError.textContent = "";
    passwordConfirmInputError.className = "error";
  } else {
    showConfirmPasswordError();
  }
});

// Functions

// Email Error Conditions
const showEmailError = () => {
  if (emailInput.validity.valueMissing) {
    emailInputError.textContent = "Email pls.";
  } else if (emailInput.validity.typeMismatch) {
    emailInputError.textContent = "This is not Email. Make it Email pls.";
  }

  emailInputError.className = "error active";
};

// Zipcode Error Conditions
const showZipcodeError = () => {
  if (zipcodeInput.validity.valueMissing) {
    zipcodeInputError.textContent = "Zip Code too, pls.";
  } else if (zipcodeInput.validity.typeMismatch) {
    zipcodeInputError.textContent = "Numbers only, ok?";
  }
  zipcodeInputError.className = "error active";
};

// Password Input Error Conditions
const showPasswordError = () => {
  if (passwordInput.validity.valueMissing) {
    passwordInputError.textContent = "You're gonna need a password.";
  } else if (passwordInput.validity.patternMismatch) {
    passwordInputError.textContent =
      "Lower Case, Upper Case, Number, Special Character, between 8 and 24 characters";
  }
  passwordInputError.className = "error active";
};

// Confirm Password Error Conditions
const showConfirmPasswordError = () => {
  if (passwordConfirmInput.validity.valueMissing) {
    passwordConfirmInputError.textContent = "Password needs confirmation";
  } else if (!passwordConfirmInput.value === passwordInput.value) {
    passwordConfirmInputError.textContent = "Needs to be the same as password";
  }
};
