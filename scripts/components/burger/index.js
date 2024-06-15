const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");

const onBurgerToggleHandler = () => {
  burger.classList.toggle("burger_click");
  mobileMenu.classList.toggle("mobile-menu_visible");
};

const onMobileMenuLinkClickHandler = (evt) => {
  if (!evt.target.classList.contains("menu__link")) {
    return;
  }

  onBurgerToggleHandler();
};

burger.addEventListener("click", onBurgerToggleHandler);
mobileMenu.addEventListener("click", onMobileMenuLinkClickHandler);
