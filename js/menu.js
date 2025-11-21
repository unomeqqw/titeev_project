const menuLists = [
  {
    menuListId: 0,
    menuListName: "Pizza",
    menuListItems: [
        {
        itemName: "Тортилла",
        itemImgSrc: "img/menu/pizza/pizza-1.png",
        itemImgAlt: "Пицца Тортилла пицца фото",
        itemComposition: "томаты, перец, сыр сулугуни, фарш черепаший",
        itemPrice: "400р"
      },
      {
        itemName: "Римский витязь",
        itemImgSrc: "img/menu/pizza/pizza-2.png",
        itemImgAlt: "Римский витязь пицца фото",
        itemComposition: "сыр косичка плавленный, томаты(муляж), курица",
        itemPrice: "600р"
      },
      {
        itemName: "Страж Милана",
        itemImgSrc: "img/menu/pizza/pizza-3.png",
        itemImgAlt: "Страж Милана пицца фото",
        itemComposition: "сухарики '3 корочки', паштет, перец",
        itemPrice: "700р"
      },
      {
        itemName: "Цезарь",
        itemImgSrc: "img/menu/pizza/pizza-4.png",
        itemImgAlt: "Цезарь пицца фото",
        itemComposition: "Сыр Красная цена, мыло, помидоры",
        itemPrice: "1950р"
      },
      {
        itemName: "Колбасный угар",
        itemImgSrc: "img/menu/pizza/pizza-5.png",
        itemImgAlt: "Колбасный угар пицца фото",
        itemComposition: "колбаса п/копченая, колбаса охотничья",
        itemPrice: "1400р"
      },
      {
        itemName: "Пляжный флекс",
        itemImgSrc: "img/menu/pizza/pizza-6.png",
        itemImgAlt: "Пляжный флекс пицца фото",
        itemComposition: "ананасы, кокосовая стружка, рыбные палочки",
        itemPrice: "1100р"
      },
    ]
  },
  {
    menuListId: 1,
    menuListName: "Salads",
    menuListItems: [
        {
        itemName: "Мариолли",
        itemImgSrc: "img/menu/salads/salad-1.png",
        itemImgAlt: "Мариолли салат фото",
        itemComposition: "Сыр, мясо телячье, грибы",
        itemPrice: "780р"
      },
      {
        itemName: "Милано-Сухаро",
        itemImgSrc: "img/menu/salads/salad-2.png",
        itemImgAlt: "Эль-Сухаро салат фото",
        itemComposition: "сочные bread-strips, frash чеснок",
        itemPrice: "665р"
      },
      {
        itemName: "Итальянский пунш",
        itemImgSrc: "img/menu/salads/salad-3.png",
        itemImgAlt: "Итальянский пунш салат фото",
        itemComposition: "кетчуп, кинза, петрушка",
        itemPrice: "400р"
      },
      {
        itemName: "Лайт-купах",
        itemImgSrc: "img/menu/salads/salad-4.png",
        itemImgAlt: "Лайт-купах салат фото",
        itemComposition: "Козье молоко, укроп",
        itemPrice: "2000р"
      },
      {
        itemName: "Креветочный нахор",
        itemImgSrc: "img/menu/salads/salad-5.png",
        itemImgAlt: "Креветочный нахор салат фото",
        itemComposition: "Креветки(тесто), трава обыкновенная",
        itemPrice: "630р"
      },
      {
        itemName: "Questo e` per uso personale",
        itemImgSrc: "img/menu/salads/salad-6.png",
        itemImgAlt: "Questo e` per uso personale салат фото",
        itemComposition: "разнообразные ингредиенты",
        itemPrice: "200р"
      },
    ]
  },
  {
    menuListId: 2,
    menuListName: "Drinks",
    menuListItems: [
        {
        itemName: "Сок Гаспаччо",
        itemImgSrc: "img/menu/drinks/drink-1.png",
        itemImgAlt: "Сок Гаспаччо напиток фото",
        itemComposition: "виноградный сок",
        itemPrice: "250р"
      },
      {
        itemName: "Рара Карлоу",
        itemImgSrc: "img/menu/drinks/drink-2.png",
        itemImgAlt: "Рара Карлоу напиток фото",
        itemComposition: "Квас",
        itemPrice: "300р"
      },
      {
        itemName: "Кока кола",
        itemImgSrc: "img/menu/drinks/drink-3.png",
        itemImgAlt: "Кока кола напиток фото",
        itemComposition: "Кола красная цена",
        itemPrice: "700р"
      },
      {
        itemName: "Детское пиво",
        itemImgSrc: "img/menu/drinks/drink-4.png",
        itemImgAlt: "Детское пиво напиток фото",
        itemComposition: "Дюшес с пенкой",
        itemPrice: "230р"
      },
      {
        itemName: "Ореш Вотер",
        itemImgSrc: "img/menu/drinks/drink-5.png",
        itemImgAlt: "Ореш Вотер напиток фото",
        itemComposition: "Чистейшая Water из Italian cran",
        itemPrice: "900р"
      },
      {
        itemName: "Чай белорусский",
        itemImgSrc: "img/menu/drinks/drink-6.png",
        itemImgAlt: "Чай белорусский напиток фото",
        itemComposition: "Чай листовой, Абхазия",
        itemPrice: "400р"
      },
    ]
  }
  
];
const menuNavList = document.querySelectorAll(".js-menu__nav-item");
const menuItemsBlock = document.querySelector(".js-menu__menu-items-block");
let menuItems = {};
let activeMenu = {};
let activeMenuNavItem = {};
let activeMenuId = 0;

function setMenu() {
    if (menuItemsBlock) {
        menuLists.forEach( menuList => {
            let menuListTemp = ``;
            let menuListTempItems = ``;
            menuListTemp += `<ul class="js-menu__menu-items-list menu__menu-items-list menu__menu-items-list_hidden" data-menu-id="${menuList.menuListId}">`;
            menuList.menuListItems.forEach(menuListItem => {
                menuListTempItems += `<li class="menu-item">
                <div class="menu-item__img-container">
                  <img class="menu-item__img" src="${menuListItem.itemImgSrc}" alt="${menuListItem.itemImgAlt}">
                </div>
                <div class="menu-item__info-block">
                  <span class="menu-item__name">${menuListItem.itemName}</span>
                  <span class="menu-item__composition">${menuListItem.itemComposition}</span>
                  <span class="menu-item__price">${menuListItem.itemPrice}</span>
                </div>
                </li>`
            });
            menuListTemp += menuListTempItems += `</ul>`;
            menuItemsBlock.innerHTML += menuListTemp;
        });
        menuItems = document.querySelectorAll(".js-menu__menu-items-list");
        setActiveMenu(activeMenuId);
    }
}
function setActiveMenu(id) {
  activeMenuId = id;
  activeMenu = document.querySelector(`.js-menu__menu-items-list[data-menu-id="${activeMenuId}"]`);
  activeMenuNavItem = document.querySelector(`.js-menu__nav-item[data-menu-list-id="${activeMenuId}"]`);
  if (activeMenu && activeMenuNavItem && menuNavList && menuItemsBlock) {
    menuItems.forEach(item => item.classList.add("menu__menu-items-list_hidden"));
    activeMenu.classList.remove("menu__menu-items-list_hidden");
    menuNavList.forEach(navItem => navItem.classList.remove("menu__nav-item_active"));
    activeMenuNavItem.classList.add("menu__nav-item_active");
  }
}
// вызов функций
setMenu();
menuNavList.forEach(menuNavItem => {
  menuNavItem.addEventListener('click', () => {
    let menuId = menuNavItem.getAttribute('data-menu-list-id');
    if (menuId !== activeMenuId) {
      setActiveMenu(menuId);
    }
  });
});