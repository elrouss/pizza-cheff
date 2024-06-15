import { data } from "./constants.js";
import { orderCard } from "../orderCard/index.js";
import { favoriteList as container } from "../../constants/index.js";

(function render() {
  data.forEach((item) => {
    const li = document.createElement("li");
    li.className = "favorite__list-item";
    li.prepend(orderCard(item));

    container.append(li);
  });
})();
