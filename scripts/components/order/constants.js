import { UNICODE } from "../../constants/unicode.js";

export const ORDER_MESSAGES = Object.freeze({
  success: {
    title: "Спасибо за заказ!",
    paragraph: `Ваш номер ${UNICODE.mdash}`,
  },
  error: {
    title: "Произошла ошибка!",
    paragraph: "Попробуйте еще раз",
  },
  pending: {
    button: "Подождите...",
  },
});
