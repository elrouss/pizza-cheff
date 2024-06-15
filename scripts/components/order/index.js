import {
  API_BASE,
  API_METHODS,
  API_STATUSES,
} from "../../utils/api/constants.js";
import { ORDER_MESSAGES } from "./constants.js";
import { html } from "../../constants/index.js";
import {
  enableValidation,
  disableSubmitButton,
  reset
} from "../formValidator/index.js";

const form = document.querySelector(".order__form");
const formSubmitButton = form.querySelector('.button[type="submit"]');

const orderModal = document.querySelector(".order-modal");
const orderModalTitle = orderModal.querySelector(".modal__title");
const orderModalParagraph = orderModal.querySelector(".modal__paragraph");

const onSubmitHandler = (evt) => {
  evt.preventDefault();

  if (!form.checkValidity()) {
    disableSubmitButton(formSubmitButton);
    form.querySelector("input").focus();
    return;
  }

  fetchOrderData(new FormData(form));
};

const showOrderModal = ({ id, status }) => {
  orderModalTitle.textContent = ORDER_MESSAGES[status].title;
  orderModalParagraph.textContent =
    status === API_STATUSES.error
      ? ORDER_MESSAGES[status].paragraph
      : `${ORDER_MESSAGES[status].paragraph} ${id}`;

  orderModal.classList.add("modal_visible");
  html.classList.add("html_hidden");
};

const pending = () => {
  const initialText = formSubmitButton.textContent;

  return (isLoading) => {
    formSubmitButton.textContent = isLoading
      ? ORDER_MESSAGES.pending.button
      : initialText;
  };
};

const fetchOrderData = async (data) => {
  const togglePendingState = pending();

  try {
    togglePendingState(true);

    const request = await fetch(`${API_BASE}/posts`, {
      method: API_METHODS.post,
      body: data,
    });

    if (request.ok) {
      const data = await request.json();
      showOrderModal({ ...data, status: API_STATUSES.success });
      reset(form);
    } else {
      throw new Error();
    }
  } catch (e) {
    showOrderModal({ status: API_STATUSES.error });
    console.error(e);
  } finally {
    togglePendingState(false);
  }
};

enableValidation(form);

form.addEventListener("submit", onSubmitHandler);
