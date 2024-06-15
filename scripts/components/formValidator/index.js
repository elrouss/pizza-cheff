import { CLASSNAMES } from "./constants.js";
import { format } from "./helpers.js";

const showInputError = (input, errorMsg) => {
  const errorElement = input.nextElementSibling;

  errorElement.textContent = errorMsg;
  errorElement.classList.add(CLASSNAMES.inputErrorElement);

  input.classList.add(CLASSNAMES.inputError);
};

const hideInputError = (input) => {
  const errorElement = input.nextElementSibling;

  errorElement.classList.remove(CLASSNAMES.inputErrorElement);
  errorElement.textContent = "";

  input.classList.remove(CLASSNAMES.inputError);
};

const isInputValid = (input) => {
  !input.validity.valid
    ? showInputError(input, input.validationMessage)
    : hideInputError(input);
};

const hasInvalidInput = (inputs) =>
  inputs.some((input) => !input.validity.valid);

export const disableSubmitButton = (button) =>
  button.setAttribute("disabled", "");

const enableSubmitButton = (button) => button.removeAttribute("disabled");

const toggleButtonState = (inputs, button) =>
  hasInvalidInput(inputs)
    ? disableSubmitButton(button)
    : enableSubmitButton(button);

const setEventListeners = (inputs, submitButton) => {
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      format(input);
      isInputValid(input);
      toggleButtonState(inputs, submitButton);
    });
  });
};

export const enableValidation = (form) => {
  const inputs = Array.from(form.querySelectorAll("input"));
  const submitButton = form.querySelector('button[type="submit"]');

  setEventListeners(inputs, submitButton);
};

export const reset = (form) => {
    form.reset();
}