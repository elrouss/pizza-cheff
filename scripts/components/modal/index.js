import { html } from "../../constants/index.js";

const modals = document.querySelectorAll(".modal");

const onModalCloseClickHandler = (modal) => {
  modal.classList.remove("modal_visible");
  html.classList.remove("html_hidden");
};

modals.forEach((modal) => {
  const button = modal.querySelector(".modal__close-button");
  button.addEventListener("click", () => onModalCloseClickHandler(modal));
});
