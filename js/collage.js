const items = [
  {
    itemId: 0,
    imgSrc: "img/interior/interior-1.png",
    imgAlt: "Наш прекрасный ресторан до реставрации"
  },
  {
    itemId: 1,
    imgSrc: "img/interior/interior-2.png",
    imgAlt: "Наш умопомрачительный ресторан после реставрации"
  },
  {
    itemId: 2,
    imgSrc: "img/interior/interior-3.png",
    imgAlt: "Причина реставрации ресторана"
  },
  {
    itemId: 3,
    imgSrc: "img/interior/interior-4.png",
    imgAlt: "Кухонная мебель также важна..."
  }
];
const collageViewImg = document.querySelector(".js-collage__view-box-img");
const collageViewText = document.querySelector(".js-collage__view-text");
const collageItemsList = document.querySelector(".js-collage__collage-items-list");

let collageItems = {};
let collageActiveItem = {};
let activeItemId = items[0].itemId;

// Запись в DOM элементов массива в виде html
function setItems() {
  if (collageItemsList) {
    items.forEach( item => {
      let insertItem = `<li class="js-collage-item collage-item shadow-out" data-collage-id="${item.itemId}">
        <img class="collage-item__img collage-item__img_touchable" src="${item.imgSrc}" alt="${item.imgAlt}">
      </li>`;

      collageItemsList.innerHTML += insertItem;
    });

    collageItems = document.querySelectorAll(".js-collage-item");
    setCollageActive(activeItemId);
  }
}

// Установка выбранного эл-та массива (активного)
function setCollageActive(id) {
  activeItemId = id;
  collageActiveItem = document.querySelector(`.js-collage-item[data-collage-id="${activeItemId}"]`);

  if (collageItems && collageActiveItem && collageViewImg && collageViewText) {
    const activeArrayItem = items.find(i => i.itemId === activeItemId);
    collageViewImg.classList.add('anim-no-opacity');
    collageViewText.classList.add('anim-no-opacity');

    setTimeout(() => {
      collageViewImg.setAttribute("src", activeArrayItem.imgSrc);
      collageViewImg.setAttribute("alt", activeArrayItem.imgAlt);
      collageViewText.innerHTML = activeArrayItem.imgAlt;
      collageViewImg.classList.remove("anim-no-opacity");
      collageViewText.classList.remove("anim-no-opacity");
    }, 400);

    collageItems.forEach(item => item.classList.remove("collage-item_active"));
    collageActiveItem.classList.add("collage-item_active");
  }
}

// вызов функций
setItems();

// слушатель кликов по эл-там коллажа
if (collageItems.length > 0) {
  collageItems.forEach(collageItem => {
    collageItem.addEventListener('click', () => {
      let id = collageItem.getAttribute('data-collage-id');
      if (+id !== activeItemId) {
        setCollageActive(+id);
      }
    });
  });
}