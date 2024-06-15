import { data } from "./constants.js";
import { benefitsCard } from "../benefitsCard/index.js";

const container = document.querySelector(".hero__list");

(function render() {
  data.forEach((item) => {
    const li = document.createElement("li");
    li.className = "hero__list-item";
    li.prepend(benefitsCard(item));

    container.append(li);
  });
})();
