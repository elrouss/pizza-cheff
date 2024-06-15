const templateCard = document.querySelector(".order-card-template");

export const orderCard = ({ title, description, img }) => {
  const template = templateCard.content.cloneNode(true);

  const card = template.querySelector(".order-card");
  const cardTitle = card.querySelector(".order-card__title");
  const cardDescription = card.querySelector(".order-card__description");
  const cardImg = card.querySelector(".order-card__img");

  cardTitle.textContent = title;
  cardDescription.textContent = description;
  cardImg.src = img;

  return card;
};
