const templateCard = document.querySelector(".benefits-card-template");

export const benefitsCard = ({ title, description, img, alt }) => {
  const template = templateCard.content.cloneNode(true);

  const card = template.querySelector(".benefits");
  const cardTitle = card.querySelector(".benefits__title");
  const cardDescription = card.querySelector(".benefits__description");
  const cardImg = card.querySelector(".benefits__img");

  cardTitle.textContent = title;
  cardDescription.textContent = description;
  cardImg.src = img;
  cardImg.alt = alt;

  return card;
};
