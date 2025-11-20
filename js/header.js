// переменные
const mainHeader = document.querySelector('.js-body__header');
const hamburger = document.querySelector('.js-hamburger');
const navList = document.querySelector('.js-nav-list');
const navListItems = document.querySelectorAll('.js-nav-list__item');
let lastScroll = 0; // последняя позиция прокрутки
const defaultOffset = 200;
const adaptiveWidth = 1000;
// стрелочные ф-ции
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const isAdaptive = () => document.documentElement.clientWidth <= adaptiveWidth;
const containHide = () => mainHeader.classList.contains("body__header_hided");
const isNavListHided = () => navList.classList.contains("nav-list_hided");
const isHamburgerActive = () => hamburger.classList.contains("hamburger_active");
// ф-ции
function openMenu() {
  hamburger.classList.add("hamburger_active");
  navList.classList.remove("nav-list_hided");
}

function closeMenu() {
  hamburger.classList.remove("hamburger_active");
  navList.classList.add("nav-list_hided");
}
// -------------------- слушатели--------------------
window.addEventListener("scroll", () => {
  if (
    scrollPosition() > lastScroll &&
    !containHide() &&
    scrollPosition() > defaultOffset &&
    isAdaptive() &&
    !isHamburgerActive()
  ) {
    // scroll вниз
    mainHeader.classList.add("body__header_hided");
  } else if (scrollPosition() < lastScroll && containHide()) {
    // scroll вверх
    mainHeader.classList.remove("body__header_hided");
  }
  lastScroll = scrollPosition();
});
hamburger.addEventListener("click", () => {
  if (!isHamburgerActive() && isAdaptive() && isNavListHided()) {
    openMenu();
  } else if (isHamburgerActive() && isAdaptive() && !isNavListHided()) {
    closeMenu();
  }
});
navListItems.forEach(navItem => {
  navItem.addEventListener("click", () => {
    if (isAdaptive()) {
      closeMenu();
    }
  });
});