import { html, favoriteList } from "../../constants/index.js";

const fullScreenModal = document.querySelector(".fullScreenModal");
const fullScreenModalImg = fullScreenModal.querySelector(
  ".fullScreenModal__img"
);
const fullScreenModalButton = fullScreenModal.querySelector(
  ".fullScreenModal__close-button"
);

const onOrderCardOpenClickHandler = (evt) => {
  if (!evt.target.classList.contains("order-card__img")) {
    return;
  }

  if (evt instanceof KeyboardEvent && evt.key !== "Enter") {
    return;
  }

  fullScreenModalImg.src = evt.target.src;
  fullScreenModal.classList.add("modal_visible");

  html.classList.add("html_hidden");
};

favoriteList.addEventListener("click", onOrderCardOpenClickHandler);
