const html = document.querySelector(".html");

const favoriteList = document.querySelector(".favorite__list");

const fullScreenModal = document.querySelector(".fullScreenModal");
const fullScreenModalImg = fullScreenModal.querySelector(
  ".fullScreenModal__img"
);
const fullScreenModalButton = fullScreenModal.querySelector(
  ".fullScreenModal__close-button"
);

const onFullScreenModalKeyHandler = (evt) => {
  if (evt.key !== "Escape") return;

  fullScreenModal.classList.remove("fullScreenModal_visible");

  html.classList.remove("html_hidden");
  document.removeEventListener("keydown", onFullScreenModalKeyHandler);
};

const onOrderCardImgCloseHandler = () => {
  fullScreenModal.classList.remove("fullScreenModal_visible");

  html.classList.remove("html_hidden");
  document.removeEventListener("keydown", onFullScreenModalKeyHandler);
};

const onOrderCardImgClickHandler = (evt) => {
  if (!evt.target.classList.contains("order-card__img")) {
    return;
  }

  if (evt instanceof KeyboardEvent && evt.key !== "Enter") {
    return;
  }

  fullScreenModalImg.src = evt.target.src;
  fullScreenModal.classList.add("fullScreenModal_visible");

  html.classList.add("html_hidden");
  document.addEventListener("keydown", onFullScreenModalKeyHandler);
};

favoriteList.addEventListener("click", onOrderCardImgClickHandler);
favoriteList.addEventListener("keydown", onOrderCardImgClickHandler);
fullScreenModalButton.addEventListener("click", onOrderCardImgCloseHandler);
