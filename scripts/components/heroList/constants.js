import { UNICODE } from "../../constants/unicode.js";

export const data = Object.freeze([
  {
    id: 1,
    title: "Лучшее тесто",
    description: `Мы${UNICODE.nbsp}создаем тесто только из${UNICODE.nbsp}отборной итальянской муки наивысшего качества`,
    img: "./assets/images/hop.png",
    alt: "Колосья",
  },
  {
    id: 2,
    title: "Лучшие повара",
    description: "Пиццы готовят самые профессиональные итальянские повара",
    img: "./assets/images/kitchen_pack.png",
    alt: "Шляпа повара",
  },
  {
    id: 3,
    title: "Гарантия качества",
    description: `Наша пиццерия получила множество наград и${UNICODE.nbsp}признаний по${UNICODE.nbsp}всему миру`,
    img: "./assets/images/seo_and_web.png",
    alt: "Знак качества",
  },
  {
    id: 4,
    title: "Отборные рецепты",
    description: `Мы${UNICODE.nbsp}используем рецепты от${UNICODE.nbsp}мировых лидеров в${UNICODE.nbsp}изготовлении пиццы`,
    img: "./assets/images/holidays.png",
    alt: "Подача блюда",
  },
]);
